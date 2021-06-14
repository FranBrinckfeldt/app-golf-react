import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { yupResolver } from '@hookform/resolvers/yup'
import useUserService from 'hooks/services/useUserService'
import { User } from 'models/user'
import userRegisterSchema from '../validations/userRegisterSchema'
import { useSetNewUserToken } from '../recoil/newUserToken'

interface RegisterFormData {
  email: string
  firstname: string
  lastname: string
  phone: string
  address: string
  country: string
}

const useUserRegister = () => {
  const userService = useUserService()
  const setNewUserToken = useSetNewUserToken()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userRegisterSchema)
  })
  const { mutateAsync: execRegister, isLoading } = useMutation(userService.register)

  const toast = useToast()

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const formatedData: User = {
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        location: {
          address: formData.address,
          country: formData.country
        }
      }
      const { data } = await execRegister(formatedData)
      setNewUserToken(data.accessToken)

      toast({
        title: 'La cuenta ha sido creada con éxito',
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
    errors,
    isLoading,
    register,
    handleSubmit: handleSubmit(onSubmit)
  }
}

export default useUserRegister
