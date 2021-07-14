import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { Challenge } from 'models/tournament'
import useResultService from 'hooks/services/useResultService'

const useWinnerResponse = (challenge: Challenge, onClose: () => void) => {
  const responseService = useResultService()

  const queryClient = useQueryClient()

  const { mutateAsync: execWinner, isLoading } = useMutation(responseService.winner, {
    mutationKey: ['challenges', challenge._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('challenges')
    }
  })

  const toast = useToast()

  const handleWinner = async () => {
    await execWinner(challenge._id as string)

    toast({
      title: 'El resultado del deasafío ha sido registrado con éxito',
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoadingWinner: isLoading,
    handleWinner
  }
}

export default useWinnerResponse
