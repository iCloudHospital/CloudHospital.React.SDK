import { AxiosRequestConfig } from 'axios'
import { MarketingType } from 'ch-api-client-typescript2/lib'

export interface HospitalSpecialtiesSearchOption {
  hospitalId: string
  hospitalName?: string
  hospitalSlug?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  hospitalSpecialtySlug?: string
  title?: string
  marketingType?: MarketingType
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  includeServices?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
  options?: AxiosRequestConfig
}

export interface HospitalSpecialtySearchOption {
  hospitalId: string
  specialtyId: string
  languageCode?: string
  returnDefaultValue?: boolean
  includeServices?: boolean
}

export interface HospitalSpecialtiesSimpleSearchOption {
  hospitalId: string
  hospitalName?: string
  hospitalSlug?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  hospitalSpecialtySlug?: string
  title?: string
  marketingType?: MarketingType
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  includeServices?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
  options?: AxiosRequestConfig
}
