import React, { ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useAuth } from 'hooks'
import usePermission from 'hooks/usePermission'
import Forbidden from 'components/pages/Forbidden'
import Navigation from './Navigation'

interface DefaultLayoutProps {
  children?: ReactElement
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isAuthenticated } = useAuth()
  const hasPermission = usePermission()
  return (
    <Flex as="main" justifyContent="stretch" w="full" minH="100vh" h="full" overflow="hidden">
      {isAuthenticated && <Navigation />}
      <Box ml={isAuthenticated ? '64' : '0'} w="full">
        {hasPermission ? children : <Forbidden />}
      </Box>
    </Flex>
  )
}

export default DefaultLayout
