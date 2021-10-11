import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faCheck, faClock, faDoorOpen, faGolfBall, faTimesCircle, faTrophy } from '@fortawesome/free-solid-svg-icons'
import ChallengeStatus from './ChallengeStatus'

const icons: Record<ChallengeStatus, IconDefinition> = {
  [ChallengeStatus.GAIN]: faTrophy,
  [ChallengeStatus.LOST]: faTimesCircle,
  [ChallengeStatus.PLAYED]: faGolfBall,
  [ChallengeStatus.ACCEPTED]: faCheck,
  [ChallengeStatus.DECLINED]: faDoorOpen,
  [ChallengeStatus.PENDING]: faClock
}

const getStatusIcon = (status: ChallengeStatus) => icons[status]

export default getStatusIcon
