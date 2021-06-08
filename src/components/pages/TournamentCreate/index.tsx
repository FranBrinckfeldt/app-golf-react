import React from 'react'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import { Heading } from '@chakra-ui/layout'
import TournamentForm from './components/TournamentForm'

const TournamentCreate = () => {
  return (
    <PageLayout
      title="Torneos"
      subtitle="Crea y gestiona torneos para la comunidad"
      icon={faTrophy}>
      <Heading mt="6" fontSize="2xl">Crea un nuevo torneo</Heading>
      <TournamentForm />
    </PageLayout>
  )
}

export default TournamentCreate
