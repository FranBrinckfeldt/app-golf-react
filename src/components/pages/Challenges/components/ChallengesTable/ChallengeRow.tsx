import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Challenge, Tournament } from 'models/tournament'
import { User } from 'models/user'
import { useAuth } from 'hooks'

interface ChallengeRowProps {
  challenge: Challenge
}

const getChallengeStatus = (challenge: Challenge) => {
  if (challenge.response) {
    return challenge.response.accept ? 'Aceptado' : 'Rechazado'
  }
  return challenge.result ? 'Jugado' : 'Pendiente'
}

const ChallengeRow = ({ challenge }: ChallengeRowProps) => {
  const { decodedToken } = useAuth()
  const isUserChallenger = (challenge.challenger as User)._id === decodedToken?._id

  return (
    <Tr>
      <Td>{isUserChallenger ? 'Enviado' : 'Recibido'}</Td>
      <Td>{isUserChallenger
        ? (challenge.challenged as User).firstname
        : (challenge.challenger as User).firstname}
      </Td>
      <Td>{format(new Date(challenge.date), 'MM/dd/yyyy HH:mm')}</Td>
      <Td>{challenge.place}</Td>
      <Td>{getChallengeStatus(challenge)}</Td>
      <Td>
        <Button as={Link} to={`/tournaments/${(challenge.tournament as Tournament)._id}/challenges`} size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default ChallengeRow
