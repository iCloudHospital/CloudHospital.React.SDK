import { ConsultationStatus, ConsultationType } from 'ch-api-client-typescript2/lib'
import { object, string } from 'yup'

export enum ConsultationTab {
  Basic = 'Basic',
  History = 'History'
}
export interface ConsultationsSearchOption {
  searchString?: string
  isOpen?: boolean
  isCompleted?: boolean
  status?: ConsultationStatus
  consultationType?: ConsultationType
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface ConsultationSearchOption {
  consultationId: string
  options?: any
}

export interface ConfrimConsultationValues {
  consultationId: string
  managerId: string
  date: Date | null
}

export const SearchSchema = object().shape({
  searchString: string().ensure().required('SearchTerm is required.')
})
