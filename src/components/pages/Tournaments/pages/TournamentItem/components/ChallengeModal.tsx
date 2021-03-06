import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { useAuth } from 'hooks'
import { getWeekOfMonth } from 'date-fns'
import { User } from 'models/user'
import { Tournament } from 'models/tournament'
import ChallengeForm from './ChallengeForm'

interface ChallengeModalProps {
  user: User
  tournament: Tournament
  place: number
}

const ChallengeModal = ({ user, tournament, place }: ChallengeModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { decodedToken } = useAuth()
  const isSpecialWeek = (
    process.env.REACT_APP_FORCE_SPECIAL_WEEK === 'true'
    || getWeekOfMonth(new Date()) === 1)
  const maxPlacesToChallenge = isSpecialWeek ? 15 : 5
  const userPlace = (tournament.participants as User[]).findIndex(
    (participant: User) => participant._id === decodedToken?._id
  ) + 1
  const userCantChallenge = userPlace === place
    || userPlace < place
    || userPlace > place + maxPlacesToChallenge

  return (
    <>
      <Button
        onClick={onOpen}
        disabled={userCantChallenge || decodedToken?._id === user._id}>
        Desafiar
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Desafiando a: {user.firstname} {user.lastname}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChallengeForm
              tournament={tournament}
              challenged={user._id as string}
              onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChallengeModal
