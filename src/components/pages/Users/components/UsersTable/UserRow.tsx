import React from 'react'
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { User } from 'models/user'
import { Link } from 'react-router-dom'
import UserDeleteModal from '../UserDeleteModal'

interface UserRowProps {
  user: User
}

const UserRow = ({ user }: UserRowProps) => {
  return (
    <Tr>
      <Td>{user.firstname} {user.lastname}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phone}</Td>
      <Td>{user.location.address}</Td>
      <Td>{user.location.country}</Td>
      <Td>
        <Button as={Link} to={`/users/${user._id}`} size="sm" colorScheme="yellow">
          <FontAwesomeIcon icon={faPencilAlt} />
        </Button>
        <UserDeleteModal user={user} />
      </Td>
    </Tr>
  )
}

export default UserRow
