import { Tournament } from './tournament'
import { User } from './user'

export interface Challenge {
  _id?: string
  tournament: Tournament | string
  date: Date
  place: string
  challenger: User | string
  challenged: User | string
}
