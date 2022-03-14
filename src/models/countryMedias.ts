import { MediaType } from 'ch-api-client-typescript2/lib'

export interface CountryMediasSearchOption {
  countryId: string
  id?: string
  mediaType?: MediaType | undefined
  page?: number | undefined
  limit?: number | undefined
  lastRetrieved?: Date | undefined
}

export interface CountryMediaSearchOption {
  countryId: string
  mediaId: string
  options?: any
}
