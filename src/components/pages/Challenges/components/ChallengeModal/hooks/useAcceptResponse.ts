import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { Challenge } from 'models/tournament'
import useResponseService from 'hooks/services/useResponseService'

const useAcceptResponse = (challenge: Challenge, onClose: () => void) => {
  const responseService = useResponseService()

  const queryClient = useQueryClient()

  const { mutateAsync: execAccept, isLoading } = useMutation(responseService.accept, {
    mutationKey: ['challenges', challenge._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('challenges')
    }
  })

  const toast = useToast()

  const handleAccept = async () => {
    await execAccept(challenge._id as string)

    toast({
      title: 'El desafío ha sido aceptado con éxito',
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoadingAccept: isLoading,
    handleAccept
  }
}

export default useAcceptResponse
