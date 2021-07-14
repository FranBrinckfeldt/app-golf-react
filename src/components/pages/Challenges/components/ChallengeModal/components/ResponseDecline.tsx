import React, { ChangeEventHandler, useState } from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Textarea,
  Select
} from '@chakra-ui/react'
import { Challenge } from 'models/tournament'
import { User } from 'models/user'

interface DeclineBody {
  reason: string
  message?: string
}

interface Props {
  challenge: Challenge
  onCancel: () => void
  onDecline: (body: DeclineBody) => void
  loading: boolean
}

const ResponseDecline = ({ challenge, onDecline, onCancel, loading }: Props) => {
  const challenger = challenge.challenger as User
  const challengerFullname = `${challenger.firstname} ${challenger.lastname}`

  const [message, setMessage] = useState('')
  const [reason, setReason] = useState('enfermedad')

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setMessage(e.target.value)
  }

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
    setReason(e.target.value)
  }

  const handleDecline = () => {
    onDecline({
      reason,
      message
    })
  }

  return (
    <ModalContent>
      <ModalHeader>
        Rechazar el desafío de {challengerFullname}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text mb="2" display="block">
          Es necesario enviar una justificación para rechazar el desafío.{' '}
          Esta acción no se puede deshacer
        </Text>
        <Select value={reason} onChange={handleSelectChange} mb="3">
          <option value="enfermedad">Enfermedad</option>
          <option value="lesion">Lesión</option>
          <option value="viaje">Viaje de negocios o Vacaciones</option>
          <option value="otro">Otro</option>
        </Select>
        <Textarea value={message} onChange={handleChange} />
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="red" mr={3} onClick={handleDecline} isLoading={loading}>
          Rechazar desafío
        </Button>
        <Button colorScheme="red" variant="ghost" onClick={onCancel} isLoading={loading}>
          Cancelar
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default ResponseDecline
