import { Gender } from 'ch-api-client-typescript2/lib'
import moment from 'moment'
import { date, mixed, object, string } from 'yup'

export interface PatientSearchOption {
  patientId: string
  options?: any
}

export const PatientValidationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().required('Email is required').email('Invaild Email format.'),
  phone: string().nullable(true).min(8, 'Phone Number should be longer than 8.'),
  dateOfBirth: date()
    .nullable()
    .max(new Date(), 'Birthday should be earlier than today.')
    .default(() => null)
    .transform((_, value) => {
      if (value) {
        return moment(value).toDate()
      }

      return null
    }),
  gender: mixed<Gender>().oneOf(Object.values(Gender))
})
