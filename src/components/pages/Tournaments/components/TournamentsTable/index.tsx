import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Table, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import { Tournament } from 'models/tournament'
import TournamentRow from './TournamentRow'

interface TournamentsTableProps {
  tournaments?: Tournament[]
}

const TournamentsTable = ({ tournaments }: TournamentsTableProps) => {
  return (
    <Box borderRadius="md" boxShadow="md" p="4">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Fecha de comienzo</Th>
            <Th>Fecha de finalización</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tournaments?.map(item => (
            <TournamentRow key={item._id} tournament={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default TournamentsTable
