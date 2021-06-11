import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import useChallengeCreate from '../hooks/useChallengeCreate'

interface ChallengeFormProps {
  tournament: string
  challenged: string
}

const ChallengeForm = ({ tournament, challenged }: ChallengeFormProps) => {
  const {
    register,
    handleSubmit,
    isLoading,
    errors
  } = useChallengeCreate({ tournament, challenged })

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" mt="6" alignItems="flex-start">
      <HookFormControl
        label="Fecha"
        fieldName="date"
        placeholder=""
        type="date"
        register={register}
        error={errors.date} />
      <HookFormControl
        label="Lugar"
        fieldName="place"
        register={register}
        error={errors.place} />
      <Button type="submit" colorScheme="accent" isDisabled={isLoading}>
        Enviar desafío
      </Button>
    </VStack>
  )
}

export default ChallengeForm
