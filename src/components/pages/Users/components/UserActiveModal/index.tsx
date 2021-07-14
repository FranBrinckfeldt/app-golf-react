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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useActiveSwitchUser from './useActiveSwitchUser'

interface Props {
  user: User
}

const UserActiveModal = ({ user }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onActiveSwitch, isLoading } = useActiveSwitchUser(user, onClose)

  const label = user.active ? 'bloquear' : 'desbloquear'
  const color = user.active ? 'red' : 'green'

  return (
    <>
      <Button size="sm" colorScheme={color} ml="2" onClick={onOpen}>
        <FontAwesomeIcon icon={user.active ? faBan : faCheckCircle} fixedWidth />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              ¿Estás seguro que deseas {label} al usuario {user.firstname} {user.lastname}?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={color}
              textTransform="capitalize"
              mr={3}
              onClick={onActiveSwitch}
              disabled={isLoading}>
              {label}
            </Button>
            <Button variant="ghost" onClick={onClose} disabled={isLoading}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserActiveModal
