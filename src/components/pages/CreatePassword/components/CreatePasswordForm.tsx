/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import useCreatePassword from '../hooks/useCreatePassword'

const CreatePasswordForm = () => {
  const { register, handleSubmit, isLoading, errors } = useCreatePassword()
  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" alignItems="flex-start">
      <HookFormControl
        label="Contraseña"
        fieldName="password"
        type="password"
        register={register}
        error={errors.password} />
      <HookFormControl
        label="Confirma tu contraseña"
        fieldName="passwordRepeat"
        type="password"
        register={register}
        error={errors.passwordRepeat} />
      <Button type="submit" colorScheme="purple" isDisabled={isLoading}>
        Activar cuenta
      </Button>
    </VStack>
  )
}

export default CreatePasswordForm
