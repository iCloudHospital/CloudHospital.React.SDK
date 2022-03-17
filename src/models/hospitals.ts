import { MarketingType, MediaType } from 'ch-api-client-typescript2/lib'

export interface HospitalsSearchOption {
  hospitalId?: string
  name?: string
  countryId?: string
  created?: Date
  marketingType?: MarketingType
  specialtyTypeId?: string
  specialtyId?: string
  serviceId?: string
  exceptHospitalId?: string
  showHidden?: boolean
  languageCode?: string
  ids?: Array<string>
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalSearchOption {
  hospitalId: string
  slug: string
  languageCode?: string
  returnDefaultValue?: boolean
}

export interface HospitalsSimpleSearchOption {
  hospitalId?: string
  name?: string
  countryId?: string
  created?: Date
  marketingType?: MarketingType
  specialtyTypeId?: string
  specialtyId?: string
  serviceId?: string
  exceptHospitalId?: string
  showHidden?: boolean
  languageCode?: string
  ids?: Array<string>
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalMediasSearchOption {
  hospitalId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
