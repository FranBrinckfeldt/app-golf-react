import React from 'react'
import { PageLayout } from 'components/layout'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'
import { useTournamentService } from 'hooks'
import { useQuery } from 'react-query'
import NotFound from 'components/pages/NotFound'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table'
import { User } from 'models/user'
import ParticipantRow from './components/ParticipantRow'

const TournamentItem = () => {
  const { id } = useParams<{ id: string }>()
  const { getById } = useTournamentService()
  const { data, error } = useQuery(['tournaments', id], getById)

  if (error) {
    return <NotFound />
  }
  const tournament = data?.data

  return tournament ? (
    <PageLayout
      title={tournament.name}
      subtitle="Crea y gestiona torneos para la comunidad"
      icon={faTrophy}>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Posición</Th>
            <Th>Nombre</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {(tournament.participants as User[])?.map((item: User, index: number) => (
            <ParticipantRow key={item._id} user={item} index={index} tournament={tournament} />
          ))}
        </Tbody>
      </Table>
    </PageLayout>
  ) : null
}

export default TournamentItem
