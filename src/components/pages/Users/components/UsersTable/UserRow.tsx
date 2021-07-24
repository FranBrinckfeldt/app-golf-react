import React, { useMemo } from 'react'
import { Tag } from '@chakra-ui/react'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Td, Tr } from '@chakra-ui/table'
import { User } from 'models/user'
import { Link } from 'react-router-dom'
import { useAuth } from 'hooks'
import UserDeleteModal from '../UserDeleteModal'
import UserActiveModal from '../UserActiveModal'

interface UserRowProps {
  user: User
}

const UserRow = ({ user }: UserRowProps) => {
  const { decodedToken } = useAuth()

  const status = useMemo(() => ({
    label: user.active ? 'Activo' : 'Bloqueado',
    color: user.active ? 'green' : 'red'
  }), [user.active])

  return (
    <Tr>
      <Td display={{ base: 'none', lg: 'table-cell' }}>{user.firstname} {user.lastname}</Td>
      <Td maxW={{ base: '16', sm: 'full' }}>{user.email}</Td>
      <Td display={{ base: 'none', xl: 'table-cell' }}>{user.phone}</Td>
      <Td display={{ base: 'none', xl: 'table-cell' }}>{user.location.address}</Td>
      <Td display={{ base: 'none', xl: 'table-cell' }}>{user.location.country}</Td>
      <Td display={{ base: 'none', md: 'table-cell' }}>
        <Tag colorScheme={status.color}>{status.label}</Tag>
      </Td>
      <Td whiteSpace="nowrap">
        <Button as={Link} to={`/users/${user._id}`} size="sm" colorScheme="yellow">
          <FontAwesomeIcon icon={faPencilAlt} fixedWidth />
        </Button>
        {decodedToken?._id !== user._id && (
          <>
            <UserActiveModal user={user} />
            {!user.active && <UserDeleteModal user={user} />}
          </>
        )}
      </Td>
    </Tr>
  )
}

export default UserRow
