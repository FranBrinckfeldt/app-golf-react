import { useCallback } from 'react'
import { AxiosResponse } from 'axios'
import { AccessTokenResponse, CreatePasswordPayload, LoginPayload } from 'models/auth'
import { getHttpClient } from 'utils'

const useAuthService = () => {
  const login = useCallback(async (payload: LoginPayload) => {
    const client = getHttpClient()
    return client.post<LoginPayload, AxiosResponse<AccessTokenResponse>>('/login', payload)
  }, [])

  const createPassword = useCallback(async (payload: CreatePasswordPayload) => {
    const client = getHttpClient({ token: payload.token })
    return client.put<CreatePasswordPayload, AxiosResponse<void>>('/create-password', payload)
  }, [])

  return {
    login,
    createPassword
  }
}

export default useAuthService
