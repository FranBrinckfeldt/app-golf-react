import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { Challenge } from 'models/tournament'
import { User } from 'models/user'

interface Props {
  challenge: Challenge
  onCancel: () => void
  onConfirm: (resultId: string) => void
  loading: boolean
}

const ConfirmContent = ({ challenge, onConfirm, onCancel, loading }: Props) => {
  const challenger = challenge.challenger as User
  const challengerFullname = `${challenger.firstname} ${challenger.lastname}`

  const winner: User = challenge.result?.winner as User

  const handleConfirm = () => {
    onConfirm(challenge.result?._id as string)
  }

  return (
    <ModalContent>
      <ModalHeader>
        Resultados del Desafío de {challengerFullname}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box>
          <Text fontWeight="bold">Ganador:</Text>
          <Text>{winner?.firstname} {winner?.lastname}</Text>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="primary" mr={3} onClick={handleConfirm} isLoading={loading}>
          Confirmar Resultado
        </Button>
        <Button colorScheme="red" variant="ghost" onClick={onCancel} isLoading={loading}>
          Cancelar
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default ConfirmContent
