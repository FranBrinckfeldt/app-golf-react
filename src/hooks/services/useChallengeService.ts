import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { Challenge } from 'models/tournament'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useChallengeService = () => {
  const { token } = useAuth()

  const getAll = useCallback(async () => {
    const client = getHttpClient({ token: token as string })
    return client.get<Challenge[]>('/challenges')
  }, [token])

  const getById = useCallback(async (params: { queryKey: string[] }) => {
    const client = getHttpClient({ token: token as string })
    return client.get<Challenge>(`/challenges/${params.queryKey[1]}`)
  }, [token])

  const insert = useCallback(async (challenge: Challenge) => {
    const client = getHttpClient({ token: token as string })
    return client.post<Challenge, AxiosResponse<void>>('/challenges', challenge)
  }, [token])

  return {
    getAll,
    getById,
    insert
  }
}

export default useChallengeService
