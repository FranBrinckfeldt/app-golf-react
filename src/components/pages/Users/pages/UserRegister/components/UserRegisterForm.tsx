import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import useUserRegister from '../hooks/useUserRegister'

const UserRegisterForm = () => {
  const { register, handleSubmit, isLoading, errors } = useUserRegister()

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" mt="6" alignItems="flex-start">
      <HookFormControl
        label="Email"
        fieldName="email"
        placeholder="nombre@gmail.com"
        register={register}
        error={errors.email} />
      <HookFormControl
        label="Nombre"
        fieldName="firstname"
        placeholder="Juanito"
        register={register}
        error={errors.firstname} />
      <HookFormControl
        label="Apellido"
        fieldName="lastname"
        placeholder="Pérez"
        register={register}
        error={errors.lastname} />
      <HookFormControl
        label="Teléfono"
        fieldName="phone"
        register={register}
        error={errors.phone} />
      <HookFormControl
        label="Dirección"
        fieldName="address"
        register={register}
        error={errors.address} />
      <HookFormControl
        label="País"
        fieldName="country"
        register={register}
        error={errors.country} />
      <Button type="submit" colorScheme="accent" isDisabled={isLoading}>
        Registrar Nuevo usuario
      </Button>
    </VStack>
  )
}

export default UserRegisterForm
