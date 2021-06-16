import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from 'hooks'
import { useQuery } from 'react-query'
import useUserService from 'hooks/services/useUserService'

const UserCard = () => {
  const service = useUserService()
  const { decodedToken } = useAuth()
  const { data } = useQuery(['users', decodedToken?._id as string], service.getById)
  const user = data?.data
  return user ? (
    <Box px="6" py="4" rounded="lg" boxShadow="md" color="gray.600">
      <Text fontWeight="bold" fontSize="2xl" mb="1.5">
        {user.firstname} {user.lastname}
      </Text>
      <Text mb="1">
        <Text as={FontAwesomeIcon} icon={faEnvelope} mr="2" fixedWidth />
        {user.email}
      </Text>
      <Text mb="1">
        <Text as={FontAwesomeIcon} icon={faPhone} mr="2" fixedWidth />
        {user.phone}
      </Text>
      <Text>
        <Text as={FontAwesomeIcon} icon={faMapPin} mr="2" fixedWidth />
        {user.location.address}, {user.location.country}
      </Text>
    </Box>
  ) : null
}

export default UserCard
