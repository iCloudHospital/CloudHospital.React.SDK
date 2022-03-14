import { AutocompleteMode, MarketingType } from "ch-api-client-typescript2/lib";

export interface SearchOption {
  searchTerm?: string
  countryId?: string
  countOnly?: boolean
  marketingType?: MarketingType
  hospitalId?: string
  languageCode?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface AutoCompleteOption {
  keyword: string
  mode?: AutocompleteMode
  fuzzy?: boolean
  highlight?: boolean
  size?: number
  minimumCoverage?: number
}

export type SearchCountModel = {
  hospitals: number,
  doctors: number,
  deals: number,
  specialties: number,
  specialtyTypes: number
}

