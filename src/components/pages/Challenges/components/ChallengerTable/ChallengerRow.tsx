import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Challenge, Tournament } from 'models/tournament'
import { User } from 'models/user'

interface ChallengerRowProps {
  challenger: Challenge
}

const ChallengerRow = ({ challenger }: ChallengerRowProps) => {
  return (
    <Tr>
      <Td>{(challenger.challenged as User).firstname}</Td>
      <Td>{format(new Date(challenger.date), 'MM/dd/yyyy')}</Td>
      <Td>{challenger.place}</Td>
      <Td>Respuesta</Td>
      <Td>
        <Button as={Link} to={`/tournaments/${(challenger.tournament as Tournament)._id}/challenges`} size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default ChallengerRow
