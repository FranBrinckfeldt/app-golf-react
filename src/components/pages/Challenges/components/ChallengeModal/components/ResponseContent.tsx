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
  onAccept: () => void
  onDecline: () => void
  loading: boolean
}

const ResponseContent = ({ challenge, onAccept, onDecline, loading }: Props) => {
  const challenger = challenge.challenger as User
  const challengerFullname = `${challenger.firstname} ${challenger.lastname}`

  return (
    <ModalContent>
      <ModalHeader>
        Responder al desafío de {challengerFullname}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text mb="2" display="block">
          Te ha desafiado{' '}
          <Text as="span" fontWeight="bold">
            {challengerFullname}{' '}
            <Text as="span" opacity="0.75">
              ({challenger.email})
            </Text>
          </Text>
        </Text>
        <Text mb="2" display="block">Se llevará a cabo en {challenge.place} a las {challenge.date}</Text>
        <Text fontWeight="bold">Aceptas el desafío?</Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="primary" mr={3} onClick={onAccept} disabled={loading}>
          Aceptar
        </Button>
        <Button colorScheme="red" variant="ghost" onClick={onDecline} disabled={loading}>
          Rechazar
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default ResponseContent
