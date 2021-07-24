import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { useAuth, useChallengeService } from 'hooks'
import { addHours, addMinutes } from 'date-fns'
import { Tournament } from 'models/tournament'
import challengeSchema from '../validations/challengeSchema'

interface ChallengeFormData {
  date: Date
  place: string
  hour: string
  minute: string
}

interface ChallengeCreateProps {
  tournament: Tournament
  challenged: string
  onClose: () => void
}

const useChallengeCreate = ({ tournament, challenged, onClose }: ChallengeCreateProps) => {
  const service = useChallengeService()
  const { decodedToken } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(challengeSchema(tournament.endDate))
  })
  const { mutateAsync: execInsert, isLoading } = useMutation(service.insert)

  const toast = useToast()

  const onSubmit = async (formData: ChallengeFormData) => {
    const newChallenge = {
      tournament: tournament._id,
      challenger: decodedToken?._id as string,
      challenged,
      place: formData.place,
      date: addMinutes(
        addHours(
          new Date(formData.date), parseInt(formData.hour, 10)
        ), parseInt(formData.minute, 10)
      )
    }
    try {
      await execInsert(newChallenge)
      toast({
        title: 'El nuevo desafío ha sido enviado',
        status: 'success',
        isClosable: true
      })
      onClose()
    } catch (e) {
      toast({
        title: 'No se puede desafiar a este jugador actualmente',
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

export default useChallengeCreate
