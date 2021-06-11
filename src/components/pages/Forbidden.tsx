import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const Forbidden: React.FC = () => {
  return (
    <Flex>
      <Text>This is the forbidden page</Text>
      <Button as={Link} to="/">Volver al Dashboard</Button>
    </Flex>
  )
}

export default Forbidden
