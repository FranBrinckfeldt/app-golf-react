import { Challenge } from 'models/tournament'
import { User } from 'models/user'
import ChallengeStatus from './ChallengeStatus'

const getChallengeStatus = (challenge: Challenge, userId: string):ChallengeStatus => {
  if (challenge.result) {
    if (challenge.result.confirm) {
      const winner = challenge.result.winner as User
      return winner._id === userId ? ChallengeStatus.GAIN : ChallengeStatus.LOST
    }
    return ChallengeStatus.PLAYED
  }
  if (challenge.response) {
    return challenge.response.accept ? ChallengeStatus.ACCEPTED : ChallengeStatus.DECLINED
  }
  return ChallengeStatus.PENDING
}

export default getChallengeStatus
