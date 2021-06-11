import { User } from './user'

export interface Tournament {
  _id: string
  name: string
  startDate: string
  endDate: string
  participants: User[] | string[]
}
