import { object, string } from 'yup'
import { MediaType } from 'ch-api-client-typescript2/lib'
export interface CountriesSearchOption {
  id?: string
  name?: string
  description?: string
  createdDate?: Date
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface CountrySearchOption {
  countryId: string
  slug?: string
  languageCode?: string
  returnDefaultValue?: boolean
  options?: any
}

export type CountryOption = {
  id: string
  value: string
  label?: string
}
