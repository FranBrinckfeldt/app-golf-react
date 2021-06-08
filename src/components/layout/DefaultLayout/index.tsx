import React, { ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useAuth } from 'hooks'
import Navigation from './Navigation'

interface DefaultLayoutProps {
  children?: ReactElement
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isAuthenticated } = useAuth()
  return (
    <Flex as="main" justifyContent="stretch" w="full" minH="100vh" h="full" overflow="hidden">
      {isAuthenticated && <Navigation />}
      <Box ml={isAuthenticated ? '72' : '0'} w="full">
        {children}
      </Box>
    </Flex>
  )
}

export default DefaultLayout
