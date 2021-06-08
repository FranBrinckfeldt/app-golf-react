import React from 'react'
import { useQuery } from 'react-query'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import useTournamentService from 'hooks/services/useTournamentService'
import TournamentsTable from './components/TournamentsTable'
import TournamentsActions from './components/TournamentsActions'

const Tournaments = () => {
  const service = useTournamentService()
  const { data } = useQuery('tournaments', service.getAll)

  return (
    <PageLayout
      title="Torneos"
      subtitle="Crea y gestiona torneos para la comunidad"
      icon={faTrophy}>
      <TournamentsActions />
      <TournamentsTable tournaments={data?.data} />
    </PageLayout>
  )
}

export default Tournaments
