import { Gender } from 'ch-api-client-typescript2/lib'

export interface DoctorsSearchOption {
  hospitalId?: string
  languageCode?: string
  returnDefaultValue?: boolean
  ids?: Array<string>
  specialtyId?: string
  consultationEnabled?: boolean
  id?: string
  fullname?: string
  email?: string
  gender?: Gender
  dateOfBirth?: Date
  created?: Date
  showHidden?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DoctorsSimpleSearchOption {
  hospitalId?: string
  languageCode?: string
  returnDefaultValue?: boolean
  ids?: Array<string>
  specialtyId?: string
  consultationEnabled?: boolean
  id?: string
  fullname?: string
  email?: string
  gender?: Gender
  dateOfBirth?: Date
  created?: Date
  showHidden?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DoctorSearchOption {
  doctorId: string
  slug: string
  languageCode: string
  returnDefaultValue?: boolean
}

export interface DoctorAffiliationsSearchOption {
  doctorId: string
  hospitalName?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DoctorAffiliationSearchOption {
  doctorId: string
  hospitalId: string
  options?: any
}
