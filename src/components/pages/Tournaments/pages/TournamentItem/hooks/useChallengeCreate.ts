import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { useAuth, useChallengeService } from 'hooks'
import challengeSchema from '../validations/challengeSchema'

interface ChallengeFormData {
  date: Date
  place: string
}

interface ChallengeCreateProps {
  tournament: string
  challenged: string
}

const useChallengeCreate = ({ tournament, challenged }: ChallengeCreateProps) => {
  const service = useChallengeService()
  const { decodedToken } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(challengeSchema)
  })
  const { mutateAsync: execInsert, isLoading } = useMutation(service.insert)

  const toast = useToast()

  const onSubmit = async (formData: ChallengeFormData) => {
    const newChallenge = {
      tournament,
      challenger: decodedToken?._id as string,
      challenged,
      ...formData
    }
    try {
      await execInsert(newChallenge)
      toast({
        title: 'El nuevo desafío ha sido enviado',
        status: 'success',
        isClosable: true
      })
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

export default useChallengeCreate
