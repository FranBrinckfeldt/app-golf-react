import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import useUserService from 'hooks/services/useUserService'
import { User } from 'models/user'

const useActiveSwitchUser = (user: User, onClose: () => void) => {
  const userService = useUserService()

  const queryClient = useQueryClient()

  const { mutateAsync, isLoading } = useMutation(userService.switchActive, {
    mutationKey: ['users', user._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('users')
    }
  })

  const toast = useToast()

  const onActiveSwitch = async () => {
    await mutateAsync(user._id as string)

    toast({
      title: `El usuario ha sido ${user.active ? 'bloqueado' : 'desbloqueado'} con éxito`,
      status: 'success',
      isClosable: true
    })
    onClose()
  }

  return {
    isLoading,
    onActiveSwitch
  }
}

export default useActiveSwitchUser
