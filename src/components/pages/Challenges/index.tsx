import React, { ChangeEventHandler, useState } from 'react'
import { PageLayout } from 'components/layout'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons'
import { Box, Heading, Select } from '@chakra-ui/react'
import { useTournamentService } from 'hooks'
import { useQuery } from 'react-query'
import ChallengesTable from './components/ChallengesTable'

const Challenges = () => {
  const service = useTournamentService()
  const { data } = useQuery('tournaments', service.getAll)
  const tournaments = data?.data
  const [selectedTournament, setSelectedTournament] = useState<string>()

  const { data: challengesData } = useQuery(['challenges', selectedTournament as string], service.getChallenges, {
    enabled: !!selectedTournament
  })

  const tournamentChallenges = challengesData?.data

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const { value } = e.target
    setSelectedTournament(value)
  }
  return (
    <PageLayout
      title="Mis desafíos"
      subtitle="Todos los desafíos, tanto enviados como recibidos."
      icon={faGolfBall}>
      <Select onChange={handleSelectChange} placeholder="Selecciona un torneo" my="6">
        {tournaments?.map(item => (
          <option key={item._id} value={item._id}>{item.name}</option>
        ))}
      </Select>
      <Box w="100%">
        <Heading as="h4" size="md" mb="6">Desafíos</Heading>
        <ChallengesTable challenges={tournamentChallenges} />
      </Box>
    </PageLayout>
  )
}

export default Challenges
