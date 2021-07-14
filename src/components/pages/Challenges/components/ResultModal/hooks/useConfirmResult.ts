import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { Challenge } from 'models/tournament'
import useResultService from 'hooks/services/useResultService'

const useConfirmResult = (challenge: Challenge, onClose: () => void) => {
  const responseService = useResultService()

  const queryClient = useQueryClient()

  const { mutateAsync: execConfirm, isLoading } = useMutation(responseService.confirm, {
    mutationKey: ['challenges', challenge._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('challenges')
    }
  })

  const toast = useToast()

  const handleConfirm = async (resultId: string) => {
    await execConfirm(resultId)

    toast({
      title: 'El resultado se ha confirmado con éxito',
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoadingConfirm: isLoading,
    handleConfirm
  }
}

export default useConfirmResult
