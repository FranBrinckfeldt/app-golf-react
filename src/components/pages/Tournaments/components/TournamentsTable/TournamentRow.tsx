import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { Tournament } from 'models/tournament'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

interface TournamentRowProps {
  tournament: Tournament
}

const TournamentRow = ({ tournament }: TournamentRowProps) => {
  return (
    <Tr>
      <Td>{tournament.name}</Td>
      <Td display={{ base: 'none', md: 'table-cell' }}>{format(new Date(tournament.startDate), 'dd/MM/yyyy')}</Td>
      <Td display={{ base: 'none', md: 'table-cell' }}>{format(new Date(tournament.endDate), 'dd/MM/yyyy')}</Td>
      <Td>
        <Button as={Link} to={`/tournaments/${tournament._id}`} size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default TournamentRow
