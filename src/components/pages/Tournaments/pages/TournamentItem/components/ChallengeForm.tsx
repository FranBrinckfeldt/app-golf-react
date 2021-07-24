import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { HookFormControl } from 'components/common'
import HookFormSelect from 'components/common/HookFormSelect'
import { Tournament } from 'models/tournament'
import useChallengeCreate from '../hooks/useChallengeCreate'
import { hourOptions, minuteOptions } from '../utils/timeOptions'

interface ChallengeFormProps {
  tournament: Tournament
  challenged: string
  onClose: () => void
}

const ChallengeForm = ({ tournament, challenged, onClose }: ChallengeFormProps) => {
  const {
    register,
    handleSubmit,
    isLoading,
    errors
  } = useChallengeCreate({ tournament, challenged, onClose })

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing="6" mb="6" mt="6" alignItems="flex-start">
      <HookFormControl
        label="Fecha"
        fieldName="date"
        placeholder=""
        type="date"
        register={register}
        error={errors.date} />
      <HookFormSelect
        label="Hora"
        fieldName="hour"
        placeholder=""
        register={register}
        error={errors.hour}
        options={hourOptions} />
      <HookFormSelect
        label="Minutos"
        fieldName="minute"
        placeholder=""
        register={register}
        error={errors.minute}
        options={minuteOptions} />
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
