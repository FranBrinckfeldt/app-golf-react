import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useToast } from '@chakra-ui/toast'
import { useAuth, useAuthService } from 'hooks'
import { LoginPayload } from 'models/auth'
import loginSchema from '../validations/loginSchema'

const useLogin = () => {
  const authService = useAuthService()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const { mutateAsync: execLogin, isLoading } = useMutation(authService.login)
  const { setAuthToken } = useAuth()

  const toast = useToast()

  const onSubmit = async (formData: LoginPayload) => {
    try {
      const { data } = await execLogin(formData)
      setAuthToken(data.accessToken)
    } catch (e) {
      toast({
        title: 'Credenciales inválidas',
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

export default useLogin
