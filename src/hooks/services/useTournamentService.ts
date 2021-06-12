import { AxiosResponse } from 'axios'
import useAuth from 'hooks/useAuth'
import { Tournament, TournamentChallenges } from 'models/tournament'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useTournamentService = () => {
  const { token } = useAuth()

  const getAll = useCallback(async () => {
    const client = getHttpClient({ token: token as string })
    return client.get<Tournament[]>('/tournaments')
  }, [token])

  const getById = useCallback(async (params: { queryKey: string[] }) => {
    const client = getHttpClient({ token: token as string })
    return client.get<Tournament>(`/tournaments/${params.queryKey[1]}`)
  }, [token])

  const getChallenges = useCallback(async (params: { queryKey: string[] }) => {
    const client = getHttpClient({ token: token as string })
    return client.get<TournamentChallenges>(`/tournaments/${params.queryKey[1]}/challenges`)
  }, [token])

  const insert = useCallback(async (tournament: Tournament) => {
    const client = getHttpClient({ token: token as string })
    return client.post<Tournament, AxiosResponse<void>>('/tournaments', tournament)
  }, [token])

  return {
    getAll,
    getById,
    getChallenges,
    insert
  }
}

export default useTournamentService
