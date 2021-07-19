/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Pusher from 'pusher-js'
import { Box, Button, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, StackDivider, Text, useToast, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from 'hooks'
import useNotificationService from 'hooks/services/useNotificationService'
import { useMutation, useQuery } from 'react-query'

const Notifications = () => {
  const { isAuthenticated, decodedToken } = useAuth()
  const toast = useToast()
  const service = useNotificationService()

  const { data: notifications, refetch } = useQuery('notifications', service.getAll)

  const { mutateAsync } = useMutation(service.deleteByKey)

  const handleDismiss = async (key: string) => {
    await mutateAsync(key)
    refetch()
  }

  const notificationLength = notifications?.data?.length || 0

  useEffect(() => {
    if (decodedToken) {
      const pusher = new Pusher('5a49799e1df290980450', {
        cluster: 'us2'
      })
      const userChannel = pusher.subscribe(decodedToken._id)
      userChannel.bind('new-challenge', (data: Record<string, string>) => {
        refetch()
        toast({
          title: 'Nuevo desafío',
          description: data.message,
          status: 'success',
          isClosable: true,
          duration: 10000
        })
      })
      userChannel.bind('on-lose', (data: Record<string, string>) => {
        refetch()
        toast({
          title: 'Desafío perdido',
          description: data.message,
          status: 'warning',
          isClosable: true,
          duration: 10000
        })
      })

      const roleChannel = pusher.subscribe(decodedToken.role)
      roleChannel.bind('on-result', (data: Record<string, string>) => {
        refetch()
        toast({
          title: 'Nuevo resultado',
          description: data.message,
          status: 'info',
          isClosable: true,
          duration: 10000
        })
      })
    }
  }, [decodedToken, toast, refetch])

  return isAuthenticated ? (
    <Popover placement="left-end">
      <PopoverTrigger>
        <Button
          position="absolute"
          bottom="4"
          right="4"
          borderRadius="full"
          p="2"
          colorScheme="primary"
        >
          <FontAwesomeIcon icon={faBell} fixedWidth />
          {(notifications?.data?.length || -1) > 0 && (
            <Box position="absolute" top="0.25" right="0.25" fontSize="xs" bgColor="accent.500" color="white" rounded="full" p="0.5" w="4" h="4">
              {notifications?.data?.length}
            </Box>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="bold">Notificaciones</PopoverHeader>
        <PopoverBody>
          {notificationLength > 0 ? (
            <VStack
              alignItems="left"
              divider={<StackDivider borderColor="gray.200" />}
            >
              {notifications?.data.map(item => (
                <Box key={item.key}>
                  <Text fontSize="sm" textAlign="left">
                    {item?.message}
                  </Text>
                  <Link
                    as="button"
                    fontSize="sm"
                    textAlign="left"
                    color="accent.500"
                    onClick={() => handleDismiss(item.key)}
                  >
                    Ignorar
                  </Link>
                </Box>
              ))}
            </VStack>
          ) : (
            <Box>
              <Text>No hay notificaciones</Text>
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ) : null
}

export default Notifications
