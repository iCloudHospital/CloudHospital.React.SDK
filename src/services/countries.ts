import {
  CountriesApi,
  CountriesApiApiV2CountriesCountryIdGetRequest,
  CountriesApiApiV2CountriesCountryIdMediasGetRequest,
  CountriesApiApiV2CountriesCountryIdMediasMediaIdGetRequest,
  CountriesApiApiV2CountriesGetRequest,
  CountriesApiApiV2CountriesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/countries-api'
import { CountriesModel } from 'ch-api-client-typescript2/lib/models/countries-model'
import { CountryModel } from 'ch-api-client-typescript2/lib/models/country-model'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Countries
export const getCountries = async (payload?: CountriesApiApiV2CountriesGetRequest): Promise<CountriesModel> => {
  return new CountriesApi(configuration, undefined, instance)
    .apiV2CountriesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getCountryById = async (payload: CountriesApiApiV2CountriesCountryIdGetRequest): Promise<CountryModel> => {
  return new CountriesApi(configuration, undefined, instance)
    .apiV2CountriesCountryIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getCountryBySlug = async (payload: CountriesApiApiV2CountriesSlugGetRequest): Promise<CountryModel> => {
  return new CountriesApi(configuration, undefined, instance)
    .apiV2CountriesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

// #endregion Countries

// #region CountryMedias
export const getCountryMedias = async (
  payload: CountriesApiApiV2CountriesCountryIdMediasGetRequest
): Promise<MediasModel> => {
  return new CountriesApi(configuration, undefined, instance)
    .apiV2CountriesCountryIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getCountryMedia = async (
  payload: CountriesApiApiV2CountriesCountryIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new CountriesApi(configuration, undefined, instance)
    .apiV2CountriesCountryIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion CountryMedias

const countries = {
  getCountries,
  getCountryById,
  getCountryBySlug,
  getCountryMedias,
  getCountryMedia
}

export default countries
