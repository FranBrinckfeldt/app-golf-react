import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table'
import { Challenge } from 'models/tournament'
import ChallengerRow from './ChallengerRow'

interface ChallengerTableProps {
  challenges?: Challenge[]
}

// Challenges Sent
const ChallengerTable = ({ challenges }: ChallengerTableProps) => {
  return (
    <Box borderRadius="md" boxShadow="md" p="4">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Retados</Th>
            <Th>Fecha</Th>
            <Th>Lugar</Th>
            <Th>Respuesta</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {challenges?.map(item => (
            <ChallengerRow key={item._id} challenger={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default ChallengerTable
