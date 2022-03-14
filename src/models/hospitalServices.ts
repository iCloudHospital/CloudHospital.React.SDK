import { MarketingType, MediaType, Procedure } from 'ch-api-client-typescript2/lib'

export interface HospitalServicesSearchOption {
  hospitalId: string
  specialtyId: string
  hospitalName?: string
  hospitalSlug?: string
  id?: string
  name?: string
  description?: string
  specialtyName?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  serviceCategoryId?: string
  marketingType?: MarketingType
  procedure?: Procedure
  created?: Date
  languageCode?: string
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalServiceSearchOption {
  hospitalId: string
  specialtyId: string
  serviceId: string
  languageCode?: string
}

export interface HospitalServiceMediasSearchOption {
  hospitalId: string
  specialtyId: string
  serviceId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalServiceMediaSearchOption {
  hospitalId: string
  specialtyId: string
  serviceId: string
  mediaId: string
}
