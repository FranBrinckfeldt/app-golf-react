import { Challenge } from 'models/tournament'
import { User } from 'models/user'

const getChallengeStatus = (challenge: Challenge, userId: string) => {
  if (challenge.result) {
    if (challenge.result.confirm) {
      const winner = challenge.result.winner as User
      return winner._id === userId ? 'Ganado' : 'Perdido'
    }
    return 'Jugado'
  }
  if (challenge.response) {
    return challenge.response.accept ? 'Aceptado' : 'Rechazado'
  }
  return 'Pendiente'
}

export default getChallengeStatus
