import React from 'react'
import { Td, Tr } from '@chakra-ui/table'
import { User } from 'models/user'
import { Tournament } from 'models/tournament'
import ChallengeModal from './ChallengeModal'

interface ParticipantRowProps {
  user: User
  index: number
  tournament: Tournament
}

const ParticipantRow = ({ user, index, tournament }: ParticipantRowProps) => {
  return (
    <Tr key={user._id}>
      <Td>{index}</Td>
      <Td>{user.firstname} {user.lastname}</Td>
      <Td>
        <ChallengeModal tournament={tournament} user={user} />
      </Td>
    </Tr>
  )
}

export default ParticipantRow
