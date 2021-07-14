import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { Challenge } from 'models/tournament'
import useResponseService from 'hooks/services/useResponseService'

const useDeclineResponse = (challenge: Challenge, onClose: () => void) => {
  const responseService = useResponseService()

  const queryClient = useQueryClient()

  const { mutateAsync: execDecline, isLoading } = useMutation(responseService.decline, {
    mutationKey: ['challenges', challenge._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('challenges')
    }
  })

  const toast = useToast()

  const handleDecline = async (declineBody: { reason: string, message?: string }) => {
    await execDecline({ ...declineBody, challengeId: challenge._id as string })

    toast({
      title: 'El desafío ha sido rechazado con éxito',
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoadingDecline: isLoading,
    handleDecline
  }
}

export default useDeclineResponse
