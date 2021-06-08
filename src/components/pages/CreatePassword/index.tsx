/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import CreatePasswordForm from './components/CreatePasswordForm'
import CreatePasswordTitle from './components/CreatePasswordTitle'

const CreatePassword: React.FC = () => {
  return (
    <Flex justifyContent="stretch">
      <Flex as="section" flex="0.5" py="12" px="24" flexDir="column" justifyContent="center">
        <CreatePasswordTitle />
        <CreatePasswordForm />
      </Flex>
      <Box
        as="section"
        flex="1"
        bgGradient="linear(to-br, primary.500, primary.400)"
        minH="100vh" />
    </Flex>
  )
}

export default CreatePassword
