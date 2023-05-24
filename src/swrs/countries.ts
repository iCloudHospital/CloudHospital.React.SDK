import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  CountriesApiApiV2CountriesCountryIdGetRequest,
  CountriesApiApiV2CountriesGetRequest
} from 'ch-api-client-typescript2/lib/api/countries-api'
import { CountriesModel } from 'ch-api-client-typescript2/lib/models/countries-model'
import { CountryModel } from 'ch-api-client-typescript2/lib/models/country-model'
import { getCountries, getCountryById } from '../services/countries'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/countries
export const getCountriesSWR = (
  operationName = '',
  payload: CountriesApiApiV2CountriesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<CountriesModel, RestException>
) => {
  return useGenericSWR<CountriesModel, RestException, CountriesApiApiV2CountriesGetRequest>(
    operationName + nameOf(() => getCountries),
    getCountries,
    payload,
    shouldFetch,
    config
  )
}

export const getCountriesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<CountriesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<CountriesModel, RestException, CountriesApiApiV2CountriesGetRequest>(
    operationName + nameOf(() => getCountries),
    getCountries,
    config
  )
}

export const getCountriesSwrInfinite = (
  operationName = '',
  payload: CountriesApiApiV2CountriesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<CountriesModel, RestException, CountriesApiApiV2CountriesGetRequest>(
    operationName + nameOf(() => getCountries),
    getCountries,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/countries

// #region GET api/v2/countries/{countryId}
export const getCountrySWR = (
  operationName = '',
  payload: CountriesApiApiV2CountriesCountryIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<CountryModel, RestException>
) => {
  return useGenericSWR<CountryModel, RestException, CountriesApiApiV2CountriesCountryIdGetRequest>(
    operationName + nameOf(() => getCountryById),
    getCountryById,
    payload,
    shouldFetch,
    config
  )
}

export const getCountrySWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<CountryModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<CountryModel, RestException, CountriesApiApiV2CountriesCountryIdGetRequest>(
    operationName + nameOf(() => getCountryById),
    getCountryById,
    config
  )
}

// #endregion GET api/v2/countries/{countryId}
