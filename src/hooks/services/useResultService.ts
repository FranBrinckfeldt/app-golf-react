import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useResponseService = () => {
  const { token } = useAuth()

  const winner = useCallback(async (challengeId: string) => {
    const client = getHttpClient({ token: token as string })
    return client.post<void, AxiosResponse<void>>(`/results/winner/${challengeId}`)
  }, [token])

  const confirm = useCallback(async (resultId: string) => {
    const client = getHttpClient({ token: token as string })
    return client.put<void, AxiosResponse<void>>(`/results/confirm/${resultId}`)
  }, [token])

  return {
    winner,
    confirm
  }
}

export default useResponseService
