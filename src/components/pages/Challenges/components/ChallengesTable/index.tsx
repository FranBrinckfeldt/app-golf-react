import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table'
import { Challenge } from 'models/tournament'
import ChallengeRow from './ChallengeRow'

interface ChallengeTableProps {
  challenges?: Challenge[]
}

// Challenges Received
const ChallengesTable = ({ challenges }: ChallengeTableProps) => {
  return (
    <Box borderRadius="md" boxShadow="md" p="4">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th display={{ base: 'none', lg: 'table-cell' }}>Tipo</Th>
            <Th>Oponente</Th>
            <Th display={{ base: 'none', md: 'table-cell' }}>Fecha</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {challenges?.map(item => (
            <ChallengeRow key={item._id} challenge={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default ChallengesTable
