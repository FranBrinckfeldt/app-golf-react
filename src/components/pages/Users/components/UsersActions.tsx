import React, { ChangeEventHandler, useRef } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Input } from '@chakra-ui/react'

interface Props {
  onEmailQueryChanges: (q: string) => void
}

const UsersActions = ({ onEmailQueryChanges }: Props) => {
  const inputTimeout = useRef<NodeJS.Timeout>()
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    clearTimeout(inputTimeout.current as NodeJS.Timeout)
    const { value } = e.target
    inputTimeout.current = setTimeout(() => {
      onEmailQueryChanges(value)
    }, 1000)
  }

  return (
    <Flex my="4" justifyContent="space-between">
      <Button
        colorScheme="accent"
        as={Link}
        to="/users/register">
        <FontAwesomeIcon icon={faPlus} />
        <Text ml="2">Registrar un usuario</Text>
      </Button>
      <Input onChange={handleChange} w="64" placeholder="Buscar por email..." />
    </Flex>
  )
}

export default UsersActions
