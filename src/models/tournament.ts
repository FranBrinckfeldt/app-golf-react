import { User } from './user'

export interface Challenge {
  _id?: string
  tournament: Tournament | string
  date: Date
  place: string
  challenger: User | string
  challenged: User | string
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
