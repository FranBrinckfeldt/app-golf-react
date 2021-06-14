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
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useDeleteUser from './useDeleteUser'

interface UserDeleteModalProps {
  user: User
}

const UserDeleteModal = ({ user }: UserDeleteModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onDelete, isLoading } = useDeleteUser(user, onClose)
  return (
    <>
      <Button size="sm" colorScheme="red" ml="2" onClick={onOpen}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              ¿Estás seguro que deseas eliminar al usuario {user.firstname} {user.lastname}?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onDelete} disabled={isLoading}>
              Eliminar
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

export default UserDeleteModal
