import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { isBefore } from 'date-fns'
import { useTournamentService } from 'hooks'
import { Tournament } from 'models/tournament'
import { ChangeEventHandler, useEffect, useMemo, useState } from 'react'
import { User } from 'models/user'
import useUserService from 'hooks/services/useUserService'
import tournamentSchema from '../validations/tournamentSchema'

interface ParticipantsDraggables {
  items: User[],
  selected: User[]
}

const useTournamentCreate = () => {
  const service = useTournamentService()
  const userService = useUserService()
  const { push } = useHistory()
  const [tournamentForCopy, setTournamentForCopy] = useState<string>('')
  const [draggables, setDraggables] = useState<ParticipantsDraggables>({
    items: [],
    selected: []
  })

  const { data: usersData } = useQuery('users', userService.getAll)
  const { data: tournamentsData } = useQuery('tournaments', service.getAll)

  const tournaments = tournamentsData?.data

  const handleTournamentSelection: ChangeEventHandler<HTMLSelectElement> = e => {
    setTournamentForCopy(e.target.value)
  }

  useEffect(() => {
    const selectedTournament = (tournaments || []).find(item => item._id === tournamentForCopy)
    if (selectedTournament?.participants.length) {
      const { participants } = selectedTournament
      setDraggables(prevState => {
        const allPlayers = [...prevState.items, ...prevState.selected]
        const allParticipants = (participants as string[])
        const items = allPlayers.filter(item => !allParticipants.find(id => id === item._id))
        const selected = allParticipants.map(id => allPlayers.find(item => id === item._id) as User)
        return {
          items,
          selected
        }
      })
    } else {
      setDraggables(prevState => ({
        items: [...prevState.items, ...prevState.selected],
        selected: []
      }))
    }
  }, [tournamentForCopy, tournaments])

  const tournamentsForCopyOptions = useMemo(() => {
    const today = new Date()
    const options: { value: string, label: string }[] = []
    if (tournaments) {
      tournaments.forEach(item => {
        if (isBefore(new Date(item.endDate), today)) {
          options.push({ value: item._id, label: item.name })
        }
      })
    }
    return options
  }, [tournaments])

  useEffect(() => {
    setDraggables(prevDraggables => {
      if (prevDraggables.items.length === 0 && prevDraggables.selected.length === 0) {
        return {
          selected: [],
          items: (usersData?.data || []).filter(item => item.active)
        }
      }
      return prevDraggables
    })
  }, [usersData])

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(tournamentSchema)
  })
  const { mutateAsync: execInsert, isLoading } = useMutation(service.insert)

  const toast = useToast()

  const onSubmit = async (formData: Tournament) => {
    try {
      await execInsert({
        ...formData,
        participants: draggables.selected.map(user => user._id || '')
      })
      toast({
        title: 'El nuevo torneo ha sido creado',
        status: 'success',
        isClosable: true
      })
      push('/tournaments')
    } catch (e) {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true
      })
    }
  }

  return {
    isLoading,
    errors,
    register,
    draggables,
    setDraggables,
    tournamentForCopy,
    tournamentsForCopyOptions,
    handleTournamentSelection,
    handleSubmit: handleSubmit(onSubmit)
  }
}

export default useTournamentCreate
