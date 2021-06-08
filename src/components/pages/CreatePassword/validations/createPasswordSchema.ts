import { object, ref, string } from 'yup'

const createPasswordSchema = object().shape({
  password: string()
    .min(6)
    .required(),
  passwordRepeat: string()
    .oneOf([ref('password')], 'Las contraseñas deben coincidir')
})

export default createPasswordSchema
