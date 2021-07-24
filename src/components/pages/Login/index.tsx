/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import LoginForm from './components/LoginForm'
import LoginTitle from './components/LoginTitle'

const Login: React.FC = () => {
  return (
    <Flex justifyContent="stretch">
      <Flex as="section" flex="1" py="12" px={{ base: '4', sm: '24' }} flexDir="column" justifyContent="center">
        <LoginTitle />
        <LoginForm />
      </Flex>
      <Box
        as="section"
        display={{ base: 'none', md: 'block' }}
        flex="1"
        bgGradient="linear(to-br, primary.500, primary.400)"
        minH="100vh" />
    </Flex>
  )
}

export default Login
