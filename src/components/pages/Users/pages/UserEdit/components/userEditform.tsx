import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { User } from 'models/user'
import { HookFormControl } from 'components/common'
import { FieldError } from 'react-hook-form'
import useUserEditForm from '../hooks/useUserEditForm'

interface UserEditFormProps {
  user: User
}

const UserEditForm = ({ user } : UserEditFormProps) => {
  const { register, handleSubmit, isLoading, errors } = useUserEditForm(user)

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" mt="6" alignItems="flex-start">
      <HookFormControl
        label="Email"
        fieldName="email"
        placeholder="nombre@gmail.com"
        register={register}
        error={errors.email as FieldError} />
      <HookFormControl
        label="Nombre"
        fieldName="firstname"
        placeholder="Juanito"
        register={register}
        error={errors.firstname as FieldError} />
      <HookFormControl
        label="Apellido"
        fieldName="lastname"
        placeholder="Pérez"
        register={register}
        error={errors.lastname as FieldError} />
      <HookFormControl
        label="Teléfono"
        fieldName="phone"
        register={register}
        error={errors.phone as FieldError} />
      <HookFormControl
        label="Dirección"
        fieldName="address"
        register={register}
        error={errors.address as FieldError} />
      <HookFormControl
        label="País"
        fieldName="country"
        register={register}
        error={errors.country as FieldError} />
      <Button type="submit" colorScheme="accent" isDisabled={isLoading}>
        Guardar cambios
      </Button>
    </VStack>
  )
}

export default UserEditForm
