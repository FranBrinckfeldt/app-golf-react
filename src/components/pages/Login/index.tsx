/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import LoginForm from './components/LoginForm'
import LoginTitle from './components/LoginTitle'

const Login: React.FC = () => {
  return (
    <Flex justifyContent="stretch">
      <Flex as="section" flex="0.5" py="12" px="24" flexDir="column" justifyContent="center">
        <LoginTitle />
        <LoginForm />
      </Flex>
      <Box
        as="section"
        flex="1"
        bgGradient="linear(to-br, primary.500, primary.400)"
        minH="100vh" />
    </Flex>
  )
}

export default Login
