import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { User } from 'models/user'

interface UserRowProps {
  user: User
}

const UserRow = ({ user }: UserRowProps) => {
  return (
    <Tr>
      <Td>{user.firstname} {user.lastname}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phone}</Td>
      <Td>
        <Button size="sm" colorScheme="primary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Td>
    </Tr>
  )
}

export default UserRow
