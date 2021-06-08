import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const TournamentsActions = () => {
  return (
    <Box my="4">
      <Button
        colorScheme="accent"
        as={Link}
        to="/tournaments/create">
        <FontAwesomeIcon icon={faPlus} />
        <Text ml="2">Crear nuevo torneo</Text>
      </Button>
    </Box>
  )
}

export default TournamentsActions
