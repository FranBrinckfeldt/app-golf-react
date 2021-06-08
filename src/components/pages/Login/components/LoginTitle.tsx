/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/layout'

const LoginTitle: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="1">
        Bienvenido a Golf App
      </Heading>
      <Text mb="12" fontSize="lg">
        Torneos de Golf con resultados en tiempo real
      </Text>
    </Box>
  )
}

export default LoginTitle
