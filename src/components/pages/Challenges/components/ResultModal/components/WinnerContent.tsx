import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button
} from '@chakra-ui/react'
import { Challenge } from 'models/tournament'
import { User } from 'models/user'

interface Props {
  challenge: Challenge
  onWinner: () => void
  onCancel: () => void
  loading: boolean
}

const ResponseContent = ({ challenge, onWinner, onCancel, loading }: Props) => {
  const challenger = challenge.challenger as User
  const challengerFullname = `${challenger.firstname} ${challenger.lastname}`

  return (
    <ModalContent>
      <ModalHeader>
        Responder al desafío de {challengerFullname}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text fontWeight="bold">
          Deseas declararte como ganador? Esta acción no tiene vuelta atrás.{' '}
          Un resultado falso podría ser penalizado con la descalificación.
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="primary" mr={3} onClick={onWinner} isLoading={loading}>
          Registrar resultado
        </Button>
        <Button colorScheme="red" variant="ghost" onClick={onCancel} isLoading={loading}>
          Cancelar
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default ResponseContent
