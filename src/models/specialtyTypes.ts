import { MarketingType, MediaType } from 'ch-api-client-typescript2/lib/api'
export interface SpecialtyTypesSearchOption {
  id?: string
  name?: string
  description?: string
  marketingType?: MarketingType
  hospitalId?: string
  created?: Date
  languageCode?: string
  ids?: Array<string>
  specialtyTypeCategoryId?: string
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface SpecialtyTypeSearchOption {
  specialtyTypeId: string
  slug: string
  languageCode?: string
  returnDefaultValue?: boolean
}

export interface SpecialtyTypeMediasSearchOption {
  specialtyTypeId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
