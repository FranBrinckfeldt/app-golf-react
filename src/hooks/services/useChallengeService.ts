import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { Challenge } from 'models/tournament'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

interface ChallengeRequest {
  place: string
  date: Date
  challenged: string
  tournament: string
}

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

  const insert = useCallback(async (request: ChallengeRequest) => {
    const client = getHttpClient({ token: token as string })
    return client.post<ChallengeRequest, AxiosResponse<void>>(`/challenges/request/${request.tournament}/${request.challenged}`, request)
  }, [token])

  return {
    getAll,
    getById,
    insert
  }
}

export default useChallengeService
