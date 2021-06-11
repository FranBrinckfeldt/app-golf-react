import React from 'react'
import { Text, VStack, Spacer } from '@chakra-ui/react'
import { faSignOutAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from 'hooks'
import pages from 'components/pages'
import NavigationLink from './NavigationLink'
import NavigationButton from './NavigationButton'

const Navigation = () => {
  const { logout, decodedToken } = useAuth()
  return (
    <VStack
      as="nav"
      bgGradient="linear(to-br, primary.500, primary.300)"
      color="white"
      w="72"
      flexShrink={0}
      h="100vh"
      top="0"
      position="fixed"
      px="4"
      py="6"
      userSelect="none"
      alignItems="stretch">
      <Text py="4" fontWeight="bold" fontSize="2xl">
        Golf App
      </Text>
      {pages.filter(page => page.menu && (page.adminOnly ? decodedToken?.role === 'ADMIN' : true)).map(page => (
        <NavigationLink
          key={page.path}
          to={page.path}
          icon={page.menu?.icon as IconDefinition}
          label={page.menu?.label as string} />
      ))}
      <NavigationButton
        onClick={logout}
        icon={faSignOutAlt}
        label="Cerrar sesión" />
      <Spacer />
      <Text textAlign="center">v0.1.0 · 2021</Text>
    </VStack>
  )
}

export default Navigation
