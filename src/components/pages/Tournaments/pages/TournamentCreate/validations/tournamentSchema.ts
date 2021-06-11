import { date, object, string } from 'yup'

const tournamentSchema = object().shape({
  name: string().min(3).max(50).required(),
  startDate: date().typeError('Debe ser una fecha válida').required(),
  endDate: date().typeError('Debe ser una fecha válida').required()
})

export default tournamentSchema
