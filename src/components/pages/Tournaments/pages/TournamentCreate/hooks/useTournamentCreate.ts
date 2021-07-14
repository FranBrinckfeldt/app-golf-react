import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { useTournamentService } from 'hooks'
import { Tournament } from 'models/tournament'
import { useEffect, useState } from 'react'
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
  const [draggables, setDraggables] = useState<ParticipantsDraggables>({
    items: [],
    selected: []
  })

  const { data } = useQuery('users', userService.getAll)

  useEffect(() => {
    setDraggables(prevDraggables => {
      if (prevDraggables.items.length === 0 && prevDraggables.selected.length === 0) {
        return {
          selected: [],
          items: [...(data?.data || []).filter(item => item.active)]
        }
      }
      return prevDraggables
    })
  }, [data])

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
    handleSubmit: handleSubmit(onSubmit)
  }
}

export default useTournamentCreate
