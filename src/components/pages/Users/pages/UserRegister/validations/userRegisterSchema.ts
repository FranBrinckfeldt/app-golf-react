import { object, string } from 'yup'

const userRegisterSchema = object().shape({
  firstname: string()
    .min(3)
    .max(20)
    .required(),
  lastname: string()
    .min(3)
    .max(20)
    .required(),
  email: string()
    .email()
    .required(),
  phone: string()
    .required(),
  address: string()
    .required(),
  country: string()
    .required()
})

export default userRegisterSchema
