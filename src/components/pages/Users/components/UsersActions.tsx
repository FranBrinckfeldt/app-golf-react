import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const UsersActions = () => {
  return (
    <Box my="4">
      <Button
        colorScheme="accent"
        as={Link}
        to="/users/register">
        <FontAwesomeIcon icon={faPlus} />
        <Text ml="2">Registrar un usuario</Text>
      </Button>
    </Box>
  )
}

export default UsersActions
