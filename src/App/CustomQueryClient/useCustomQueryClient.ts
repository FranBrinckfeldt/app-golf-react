import { useMemo } from 'react'
import { QueryClient } from 'react-query'
import { useToast } from '@chakra-ui/toast'
import { useAuth } from 'hooks'
import { AxiosError } from 'axios'

const useCustomQueryClient = () => {
  const toast = useToast()
  const { logout } = useAuth()

  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        onError: e => {
          const errorResponse = (e as AxiosError).response
          if (errorResponse?.status === 401 || errorResponse?.status === 403) {
            toast({
              title: 'La sesión ha expirado',
              status: 'error',
              isClosable: true
            })
            logout()
          }
        }
      }
    }
  }), [logout, toast])

  return queryClient
}

export default useCustomQueryClient
