import React from 'react'
import { useQuery } from 'react-query'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from 'hooks'
import { PageLayout } from 'components/layout'
import useTournamentService from 'hooks/services/useTournamentService'
import TournamentsTable from './components/TournamentsTable'
import TournamentsActions from './components/TournamentsActions'

const Tournaments = () => {
  const service = useTournamentService()
  const { decodedToken } = useAuth()
  const { data } = useQuery('tournaments', service.getAll)

  return (
    <PageLayout
      title="Torneos"
      subtitle="Crea y gestiona torneos para la comunidad"
      icon={faTrophy}>
      {decodedToken?.role === 'ADMIN' ? <TournamentsActions /> : <></>}
      <TournamentsTable tournaments={data?.data} />
    </PageLayout>
  )
}

export default Tournaments
