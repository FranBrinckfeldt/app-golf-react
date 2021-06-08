import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { useToast } from '@chakra-ui/toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthService } from 'hooks'
import createPasswordSchema from '../validations/createPasswordSchema'

interface CreatePasswordFormData {
  password: string
  passwordRepeat: string
}

const useCreatePassword = () => {
  const authService = useAuthService()
  const { token } = useParams<{ token: string }>()
  const { push } = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createPasswordSchema)
  })
  const { mutateAsync: execCreatePassword, isLoading } = useMutation(authService.createPassword)

  const toast = useToast()

  const onSubmit = async (formData: CreatePasswordFormData) => {
    try {
      const formatData = {
        token,
        password: formData.password
      }
      await execCreatePassword(formatData)
      toast({
        title: 'Tu cuenta ha sido activada con éxito',
        status: 'success',
        isClosable: true
      })
      push('/login')
    } catch (e) {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true
      })
    }
  }

  return {
    errors,
    isLoading,
    register,
    handleSubmit: handleSubmit(onSubmit)
  }
}

export default useCreatePassword
