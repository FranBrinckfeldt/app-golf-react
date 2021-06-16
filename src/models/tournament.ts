import { User } from './user'

export interface PlayerResult {
  points: number
  confirmed: boolean
}

export interface Result {
  challenge: string
  challenger: PlayerResult
  challenged: PlayerResult
}

export interface Response {
  challenge: string
  accept: boolean
  reason?: string
  message?: string
}

export interface Challenge {
  _id?: string
  tournament: Tournament | string
  date: Date
  place: string
  challenger: User | string
  challenged: User | string
  result?: Result
  response?: Response
}

export interface Tournament {
  _id: string
  name: string
  startDate: string
  endDate: string
  participants: User[] | string[]
}

export interface TournamentChallenges {
  sent: Challenge[]
  received: Challenge[]
}
