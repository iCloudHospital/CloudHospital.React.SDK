import { CountriesModel, CountryModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { CountriesSearchOption, CountrySearchOption } from '../../models/countries'
import { RestException } from '../../models/exceptions'

export const loadCountriesAsync = createAsyncAction(
  'LOAD_COUNTRIES_REQUEST',
  'LOAD_COUNTRIES_SUCCESS',
  'LOAD_COUNTRIES_FAILURE'
)<CountriesSearchOption, CountriesModel, RestException>()

export const appendCountriesAsync = createAsyncAction(
  'APPEND_COUNTRIES_REQUEST',
  'APPEND_COUNTRIES_SUCCESS',
  'APPEND_COUNTRIES_FAILURE'
)<CountriesSearchOption, CountriesModel, RestException>()

export const loadCountryAsync = createAsyncAction(
  'LOAD_COUNTRY_REQUEST',
  'LOAD_COUNTRY_SUCCESS',
  'LOAD_COUNTRY_FAILURE'
)<CountrySearchOption, CountryModel, RestException>()

export const loadTranslatedCountryAsync = createAsyncAction(
  'LOAD_TRANSLATED_COUNTRY_REQUEST',
  'LOAD_TRANSLATED_COUNTRY_SUCCESS',
  'LOAD_TRANSLATED_COUNTRY_FAILURE'
)<CountrySearchOption, CountryModel, RestException>()

export const resetCountriesState = createAction('RESET_COUNTRIES_STATE')<undefined>()
export const resetCountryState = createAction('RESET_COUNTRY_STATE')<undefined>()

export type CountriesActionTypes =
  | ActionType<typeof loadCountriesAsync>
  | ActionType<typeof appendCountriesAsync>
  | ActionType<typeof loadCountryAsync>
  | ActionType<typeof loadTranslatedCountryAsync>
  | ActionType<typeof resetCountriesState>
  | ActionType<typeof resetCountryState>
