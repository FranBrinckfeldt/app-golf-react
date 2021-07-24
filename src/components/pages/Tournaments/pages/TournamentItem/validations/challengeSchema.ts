import { date, object, string } from 'yup'

const challengeSchema = (tournamentEndDate: string) => object().shape({
  date: date()
    .typeError('Debe ser una fecha válida')
    .min(new Date().toDateString(), 'No puede ser menor a hoy')
    .max(new Date(tournamentEndDate).toDateString(), 'No puede ser superior a la fecha de término del torneo')
    .required('Campo requerido'),
  place: string()
    .required('Campo requerido')
})

export default challengeSchema
