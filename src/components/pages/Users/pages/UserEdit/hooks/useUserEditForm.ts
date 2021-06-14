import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { yupResolver } from '@hookform/resolvers/yup'
import useUserService from 'hooks/services/useUserService'
import { User } from 'models/user'
import { useHistory } from 'react-router'
import userEditSchema from '../validations/userEditSchema'

interface RegisterFormData {
  email: string
  firstname: string
  lastname: string
  phone: string
  address: string
  country: string
}

const useUserEditForm = (user: User) => {
  const userService = useUserService()
  const defaultValues = {
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    address: user.location?.address,
    country: user.location?.country
  }
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userEditSchema),
    defaultValues
  })

  const { push } = useHistory()

  const queryClient = useQueryClient()

  const { mutateAsync: execUpdate, isLoading } = useMutation(userService.update, {
    mutationKey: ['users', user._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries('users')
    }
  })

  const toast = useToast()

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const formatedData: User = {
        _id: user._id,
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        location: {
          address: formData.address,
          country: formData.country
        }
      }
      await execUpdate(formatedData)

      toast({
        title: 'El usuario ha sido modificado con éxito',
        status: 'success',
        isClosable: true
      })
      push('/users')
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

export default useUserEditForm
