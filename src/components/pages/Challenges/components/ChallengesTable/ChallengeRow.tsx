import React from 'react'
import { Td, Tr } from '@chakra-ui/table'
import { format } from 'date-fns'
import { Challenge } from 'models/tournament'
import { User } from 'models/user'
import { useAuth } from 'hooks'
import ChallengeModal from '../ChallengeModal'
import { getChallengeStatus } from '../../utils'
import ResultModal from '../ResultModal'

interface ChallengeRowProps {
  challenge: Challenge
}

const ChallengeRow = ({ challenge }: ChallengeRowProps) => {
  const { decodedToken } = useAuth()
  const isUserChallenger = (challenge.challenger as User)._id === decodedToken?._id

  const challengeStatus = getChallengeStatus(challenge, decodedToken?._id as string)

  return (
    <Tr>
      <Td>{isUserChallenger ? 'Enviado' : 'Recibido'}</Td>
      <Td>{isUserChallenger
        ? (challenge.challenged as User).firstname
        : (challenge.challenger as User).firstname}
      </Td>
      <Td>{format(new Date(challenge.date), 'MM/dd/yyyy HH:mm')}</Td>
      <Td>{challenge.place}</Td>
      <Td>{challengeStatus}</Td>
      <Td>
        {!isUserChallenger && challengeStatus === 'Pendiente' && (
          <ChallengeModal challenge={challenge} />
        )}
        {(challengeStatus === 'Aceptado' || (challengeStatus === 'Jugado' && String((challenge.result?.winner as User)._id) !== decodedToken?._id)) && (
          <ResultModal challenge={challenge} />
        )}
      </Td>
    </Tr>
  )
}

export default ChallengeRow
