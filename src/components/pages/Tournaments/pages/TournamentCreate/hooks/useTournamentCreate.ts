import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { useTournamentService } from 'hooks'
import { Tournament } from 'models/tournament'
import tournamentSchema from '../validations/tournamentSchema'

const useTournamentCreate = () => {
  const service = useTournamentService()
  const { push } = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(tournamentSchema)
  })
  const { mutateAsync: execInsert, isLoading } = useMutation(service.insert)

  const toast = useToast()

  const onSubmit = async (formData: Tournament) => {
    try {
      await execInsert(formData)
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
    handleSubmit: handleSubmit(onSubmit)
  }
}

export default useTournamentCreate
