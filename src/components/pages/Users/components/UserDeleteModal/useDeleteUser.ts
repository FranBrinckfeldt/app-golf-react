import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import useUserService from 'hooks/services/useUserService'
import { User } from 'models/user'

const useDeleteUser = (user: User, onClose: () => void) => {
  const userService = useUserService()

  const queryClient = useQueryClient()

  const { mutateAsync: execDelete, isLoading } = useMutation(userService.deleteById, {
    mutationKey: ['users', user._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('users')
    }
  })

  const toast = useToast()

  const onDelete = async () => {
    await execDelete(user._id as string)

    toast({
      title: 'El usuario ha sido eliminado con éxito',
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoading,
    onDelete
  }
}

export default useDeleteUser
