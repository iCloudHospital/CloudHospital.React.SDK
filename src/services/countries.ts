import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { CountriesApi, CountriesModel, CountryModel, MediaModel, MediasModel } from 'ch-api-client-typescript2/lib'
import { CountriesSearchOption, CountrySearchOption } from '../models/countries'
import { CountryMediaSearchOption, CountryMediasSearchOption } from '../models/countryMedias'

const apiRoot = HttpClient.getBaseUrl()

// #region Countries
export function loadCountries(countriesSearchOption: CountriesSearchOption): Promise<CountriesModel> {
  const {
    id,
    name,
    description,
    createdDate,
    languageCode,
    showHidden,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = countriesSearchOption

  return new CountriesApi(configuration, apiRoot, instance)
    .apiV2CountriesGet(
      id,
      name,
      description,
      createdDate,
      languageCode,
      showHidden,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as CountriesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadCountry(countrySearchOption: CountrySearchOption): Promise<CountryModel> {
  const { countryId, slug, languageCode, returnDefaultValue, options } = countrySearchOption

  if (slug) {
    return new CountriesApi(configuration, apiRoot, instance)
      .apiV2CountriesSlugGet(slug, languageCode, returnDefaultValue, options)
      .then((res) => {
        return res.data as CountryModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new CountriesApi(configuration, apiRoot, instance)
      .apiV2CountriesCountryIdGet(countryId, languageCode, returnDefaultValue, options)
      .then((res) => {
        return res.data as CountryModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Countries

// #region CountryMedias
export function loadCountryMedias(countryMediasSearchOption: CountryMediasSearchOption): Promise<MediasModel> {
  const { countryId, id, mediaType, page, limit, lastRetrieved } = countryMediasSearchOption

  return new CountriesApi(configuration, apiRoot, instance)
    .apiV2CountriesCountryIdMediasGet(countryId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as MediasModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadCountryMedia(countryMediaSearchOption: CountryMediaSearchOption): Promise<MediaModel> {
  const { countryId, mediaId, options } = countryMediaSearchOption

  return new CountriesApi(configuration, apiRoot, instance)
    .apiV2CountriesCountryIdMediasMediaIdGet(countryId, mediaId, options)
    .then((res) => {
      return res.data as MediaModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion CountryMedias

export default {
  loadCountries,
  loadCountry,

  loadCountryMedias,
  loadCountryMedia
}
