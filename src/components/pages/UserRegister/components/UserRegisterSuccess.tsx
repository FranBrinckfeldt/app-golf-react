import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/button'
import { Text, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { useNewUserTokenState } from '../recoil/newUserToken'

const UserRegisterSuccess = () => {
  const [newUserToken, setNewUserToken] = useNewUserTokenState()

  useEffect(() => {
    return () => {
      setNewUserToken('')
    }
  }, [setNewUserToken])

  return (
    <VStack spacing="6" mb="6" mt="6" alignItems="flex-start">
      <Text>El link del nuevo usuario para crear su contraseña es:</Text>
      <Text>/create-password/{newUserToken}</Text>
      <Button as={Link} colorScheme="accent" to="/users">
        Volver a usuarios
      </Button>
    </VStack>
  )
}

export default UserRegisterSuccess
