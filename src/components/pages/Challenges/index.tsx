import React, { ChangeEventHandler, useState } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { PageLayout } from 'components/layout'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons'
import { Box, Heading, Select, SimpleGrid } from '@chakra-ui/react'
import { useTournamentService } from 'hooks'
import { useQuery } from 'react-query'
import ChallengesTable from './components/ChallengesTable'
import ChallengerTable from './components/ChallengerTable'

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
          <option value={item._id}>{item.name}</option>
        ))}
      </Select>
      <SimpleGrid columns={2} spacing={10}>
        <Box w="100%">
          <Heading as="h4" size="md" mb="6">Desafíos recibidos</Heading>
          <ChallengesTable challenges={tournamentChallenges?.received} />
        </Box>
        <Box w="100%">
          <Heading as="h4" size="md" mb="6">Desafíos enviados</Heading>
          <ChallengerTable challenges={tournamentChallenges?.sent} />
        </Box>
      </SimpleGrid>
    </PageLayout>
  )
}

export default Challenges
