import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

interface DeclineRequest {
  challengeId: string
  reason: string
  message?: string
}

const useResponseService = () => {
  const { token } = useAuth()

  const accept = useCallback(async (id: string) => {
    const client = getHttpClient({ token: token as string })
    return client.post<DeclineRequest, AxiosResponse<void>>(`/responses/accept/${id}`)
  }, [token])

  const decline = useCallback(async (request: DeclineRequest) => {
    const client = getHttpClient({ token: token as string })
    return client.post<DeclineRequest, AxiosResponse<void>>(`/responses/decline/${request.challengeId}`, request)
  }, [token])

  return {
    accept,
    decline
  }
}

export default useResponseService
