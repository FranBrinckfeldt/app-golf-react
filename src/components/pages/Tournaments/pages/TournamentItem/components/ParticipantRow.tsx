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
      <Td>{index + 1}</Td>
      <Td>{user.firstname} {user.lastname}</Td>
      <Td>
        <ChallengeModal
          tournament={tournament}
          user={user}
          place={index + 1}
        />
      </Td>
    </Tr>
  )
}

export default ParticipantRow
