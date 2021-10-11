import React from 'react'
import { Td, Tr } from '@chakra-ui/table'
import { format } from 'date-fns'
import { Challenge } from 'models/tournament'
import { User } from 'models/user'
import { useAuth } from 'hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChallengeModal from '../ChallengeModal'
import { getChallengeStatus, getStatusIcon } from '../../utils'
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
      <Td display={{ base: 'none', lg: 'table-cell' }}>{isUserChallenger ? 'Enviado' : 'Recibido'}</Td>
      <Td>{isUserChallenger
        ? (challenge.challenged as User).firstname
        : (challenge.challenger as User).firstname}
      </Td>
      <Td display={{ base: 'none', md: 'table-cell' }}>{format(new Date(challenge.date), 'MM/dd/yyyy HH:mm')}</Td>
      <Td><FontAwesomeIcon icon={getStatusIcon(challengeStatus)} />{challengeStatus}</Td>
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
