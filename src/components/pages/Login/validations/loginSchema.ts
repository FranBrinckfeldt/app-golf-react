import { object, string } from 'yup'

const loginSchema = object().shape({
  email: string().email('Email inválido').required('Campo requerido'),
  password: string().required('Campo requerido')
})

export default loginSchema
