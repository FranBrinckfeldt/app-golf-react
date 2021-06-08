export interface User {
  _id?: string
  firstname: string
  lastname: string
  email: string
  password?: string
  phone: string
  location: {
    address: string
    country: string
  }
}
