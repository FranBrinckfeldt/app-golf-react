import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { Tournament } from 'models/tournament'
import { format } from 'date-fns'

interface TournamentRowProps {
  tournament: Tournament
}

const TournamentRow = ({ tournament }: TournamentRowProps) => {
  return (
    <Tr>
      <Td>{tournament.name}</Td>
      <Td>{format(new Date(tournament.startDate), 'MM/dd/yyyy')}</Td>
      <Td>{format(new Date(tournament.endDate), 'MM/dd/yyyy')}</Td>
      <Td>Pendiente</Td>
      <Td>
        <Button size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default TournamentRow
