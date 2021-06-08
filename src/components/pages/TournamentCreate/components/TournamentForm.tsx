import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import useTournamentCreate from '../hooks/useTournamentCreate'

const TournamentForm = () => {
  const { register, handleSubmit, isLoading, errors } = useTournamentCreate()

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" mt="6" alignItems="flex-start">
      <HookFormControl
        label="Nombre del torneo"
        fieldName="name"
        placeholder="Torneo máximo"
        register={register}
        error={errors.name} />
      <HookFormControl
        label="Fecha de inicio"
        fieldName="startDate"
        type="date"
        register={register}
        error={errors.startDate} />
      <HookFormControl
        label="Fecha de término"
        fieldName="endDate"
        type="date"
        register={register}
        error={errors.endDate} />
      <Button type="submit" colorScheme="accent" isDisabled={isLoading}>
        Crear un nuevo torneo
      </Button>
    </VStack>
  )
}

export default TournamentForm
