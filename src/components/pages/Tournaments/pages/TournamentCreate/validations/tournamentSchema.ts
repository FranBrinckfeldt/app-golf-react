import { addYears } from 'date-fns'
import { date, object, ref, string } from 'yup'

const tournamentSchema = object().shape({
  name: string().min(3, 'No puede ser tan corto').max(50, 'No puede ser tan largo').required('Campo requerido'),
  startDate: date()
    .typeError('Debe ser una fecha válida')
    .min(new Date().toDateString(), 'No puede ser inferior a hoy')
    .max(addYears(new Date(), 5).toDateString(), 'No puede iniciar en más de 5 años')
    .required('Campo requerido'),
  endDate: date()
    .typeError('Debe ser una fecha válida')
    .min(ref('startDate'), 'No puede terminar antes de comenzar')
    .required('Campo requerido')
})

export default tournamentSchema
