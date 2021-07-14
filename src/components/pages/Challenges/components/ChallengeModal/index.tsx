import React from 'react'
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Challenge } from 'models/tournament'
import ResponseContent from './components/ResponseContent'
import ResponseDecline from './components/ResponseDecline'
import useAcceptResponse from './hooks/useAcceptResponse'
import useDeclineResponse from './hooks/useDeclineResponse'

interface Props {
  challenge: Challenge
}

const ChallengeModal = ({ challenge }: Props) => {
  const { isOpen: isAskOpen, onOpen: onAskOpen, onClose: onAskClose } = useDisclosure()
  const { isOpen: isDeclineOpen, onOpen: onDeclineOpen, onClose: onDeclineClose } = useDisclosure()

  const { handleAccept, isLoadingAccept } = useAcceptResponse(challenge, onAskClose)
  const { handleDecline, isLoadingDecline } = useDeclineResponse(challenge, onDeclineClose)

  const handleDeclineOpen = () => {
    onAskClose()
    onDeclineOpen()
  }

  return (
    <>
      <Button size="sm" colorScheme="primary" onClick={onAskOpen}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isAskOpen} onClose={onAskClose}>
        <ModalOverlay />
        <ResponseContent
          challenge={challenge}
          onAccept={handleAccept}
          onDecline={handleDeclineOpen}
          loading={isLoadingAccept} />
      </Modal>

      <Modal blockScrollOnMount={false} isOpen={isDeclineOpen} onClose={onDeclineClose}>
        <ModalOverlay />
        <ResponseDecline
          challenge={challenge}
          onDecline={handleDecline}
          onCancel={onDeclineClose}
          loading={isLoadingDecline} />
      </Modal>
    </>
  )
}

export default ChallengeModal
