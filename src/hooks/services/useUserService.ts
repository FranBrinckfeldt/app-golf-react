import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { AccessTokenResponse } from 'models/auth'
import { User } from 'models/user'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useUserService = () => {
  const { token } = useAuth()

  const getAll = useCallback(async () => {
    const client = getHttpClient({ token: token as string })
    return client.get<User[]>('/users')
  }, [token])

  const register = useCallback(async (user: User) => {
    const client = getHttpClient({ token: token as string })
    return client.post<User, AxiosResponse<AccessTokenResponse>>('/users', user)
  }, [token])

  return {
    getAll,
    register
  }
}

export default useUserService
