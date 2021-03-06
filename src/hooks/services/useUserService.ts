import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { AccessTokenResponse } from 'models/auth'
import { User } from 'models/user'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useUserService = () => {
  const { token } = useAuth()

  const getAll = useCallback(async (params: { queryKey: string[] }) => {
    const client = getHttpClient({ token: token as string })
    if (params.queryKey[1]) {
      return client.get<User[]>(`/users?emailq=${params.queryKey[1]}`)
    }
    return client.get<User[]>('/users')
  }, [token])

  const getById = useCallback(async (params: { queryKey: string[] }) => {
    const client = getHttpClient({ token: token as string })
    return client.get<User>(`/users/${params.queryKey[1]}`)
  }, [token])

  const register = useCallback(async (user: User) => {
    const client = getHttpClient({ token: token as string })
    return client.post<User, AxiosResponse<AccessTokenResponse>>('/users', user)
  }, [token])

  const update = useCallback(async (user: User) => {
    const client = getHttpClient({ token: token as string })
    return client.put<User, AxiosResponse<void>>(`/users/${user._id}`, user)
  }, [token])

  const switchActive = useCallback(async (id: string) => {
    const client = getHttpClient({ token: token as string })
    return client.put<undefined, AxiosResponse<void>>(`/users/${id}/active`)
  }, [token])

  const deleteById = useCallback(async (id: string) => {
    const client = getHttpClient({ token: token as string })
    return client.delete(`/users/${id}`)
  }, [token])

  return {
    getAll,
    getById,
    register,
    update,
    switchActive,
    deleteById
  }
}

export default useUserService
