import React from 'react'
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { Challenge } from 'models/tournament'
import WinnerContent from './components/WinnerContent'
import ConfirmContent from './components/ConfirmContent'
import useWinnerResponse from './hooks/useWinnerResult'
import useConfirmResponse from './hooks/useConfirmResult'

interface Props {
  challenge: Challenge
}

const ResultModal = ({ challenge }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { handleWinner, isLoadingWinner } = useWinnerResponse(challenge, onClose)
  const { handleConfirm, isLoadingConfirm } = useConfirmResponse(challenge, onClose)

  return (
    <>
      <Button size="sm" colorScheme="primary" onClick={onOpen}>
        <FontAwesomeIcon icon={faUserCheck} />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {!challenge.result ? (
          <WinnerContent
            challenge={challenge}
            onWinner={handleWinner}
            onCancel={onClose}
            loading={isLoadingWinner} />
        ) : (
          <ConfirmContent
            challenge={challenge}
            onConfirm={handleConfirm}
            onCancel={onClose}
            loading={isLoadingConfirm} />
        )}
      </Modal>
    </>
  )
}

export default ResultModal
