import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import useLogin from '../hooks/useLogin'

const LoginForm = () => {
  const { register, handleSubmit, isLoading, errors } = useLogin()

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" alignItems="flex-start">
      <HookFormControl
        label="Email"
        fieldName="email"
        placeholder="nombre@gmail.com"
        register={register}
        error={errors.email} />
      <HookFormControl
        label="Contraseña"
        fieldName="password"
        type="password"
        register={register}
        error={errors.password} />
      <Button type="submit" colorScheme="accent" isDisabled={isLoading}>
        Ingresa
      </Button>
    </VStack>
  )
}

export default LoginForm
