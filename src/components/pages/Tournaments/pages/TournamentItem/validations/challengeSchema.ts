import { date, object, string } from 'yup'

const challengeSchema = object().shape({
  date: date().typeError('Debe ser una fecha válida').required(),
  place: string().required()
})

export default challengeSchema
