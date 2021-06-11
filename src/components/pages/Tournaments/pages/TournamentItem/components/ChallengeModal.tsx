import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button
} from '@chakra-ui/react'
import { User } from 'models/user'
import { Tournament } from 'models/tournament'
import ChallengeForm from './ChallengeForm'

interface ChallengeModalProps {
  user: User
  tournament: Tournament
}

const ChallengeModal = ({ user, tournament }: ChallengeModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Desafiar</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Desafiando a: {user.firstname} {user.lastname}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChallengeForm tournament={tournament._id} challenged={user._id as string} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Enviar desafío
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChallengeModal
