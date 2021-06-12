import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Challenge, Tournament } from 'models/tournament'
import { User } from 'models/user'

interface ChallengeRowProps {
  challenge: Challenge
}

const ChallengeRow = ({ challenge }: ChallengeRowProps) => {
  return (
    <Tr>
      <Td>{(challenge.challenger as User).firstname}</Td>
      <Td>{format(new Date(challenge.date), 'MM/dd/yyyy')}</Td>
      <Td>{challenge.place}</Td>
      <Td>Pendiente</Td>
      <Td>
        <Button as={Link} to={`/tournaments/${(challenge.tournament as Tournament)._id}/challenges`} size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default ChallengeRow
