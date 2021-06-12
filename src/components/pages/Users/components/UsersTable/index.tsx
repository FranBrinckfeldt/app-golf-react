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
    <Box borderRadius="md" boxShadow="md" p="4">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th>Teléfono</Th>
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
