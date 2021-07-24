import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table'
import { User } from 'models/user'
import UserRow from './UserRow'

interface UsersTableProps {
  users?: User[]
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Box borderRadius="md" boxShadow="md" p="4" w="full" overflowX="scroll">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th display={{ base: 'none', lg: 'table-cell' }}>Nombre</Th>
            <Th>Email</Th>
            <Th display={{ base: 'none', xl: 'table-cell' }}>Teléfono</Th>
            <Th display={{ base: 'none', xl: 'table-cell' }}>Dirección</Th>
            <Th display={{ base: 'none', xl: 'table-cell' }}>País</Th>
            <Th display={{ base: 'none', md: 'table-cell' }}>Estado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map(item => (
            <UserRow key={item._id} user={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default UsersTable
