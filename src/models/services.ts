import { MarketingType, Procedure } from 'ch-api-client-typescript2/lib'

export interface ServicesSearchOption {
  hospitalId?: string
  hospitalName?: string
  hospitalSlug?: string
  id?: string
  name?: string
  description?: string
  specialtyId?: string
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

export interface ServiceSearchOption {
  serviceId: string
  languageCode?: string
  slug?: string
}
