import { CountriesModel, CountryModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  CountriesActionTypes,
  loadCountriesAsync,
  appendCountriesAsync,
  loadCountryAsync,
  loadTranslatedCountryAsync,
  resetCountriesState,
  resetCountryState
} from '../actions/countries'

// #region Countries
export const isLoadingCountries = createReducer<boolean, CountriesActionTypes>(false as boolean)
  .handleAction(
    [
      resetCountriesState,
      loadCountriesAsync.success,
      loadCountriesAsync.failure,
      appendCountriesAsync.success,
      appendCountriesAsync.failure,
    ],
    (state, action) => false
  )
  .handleAction([loadCountriesAsync.request, appendCountriesAsync.request], (state, action) => true)

export const loadCountriesErrors = createReducer<RestException | null, CountriesActionTypes>(null)
  .handleAction(
    [
      resetCountriesState,
      loadCountriesAsync.request,
      loadCountriesAsync.success,
      appendCountriesAsync.request,
      appendCountriesAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadCountriesAsync.failure, appendCountriesAsync.failure], (state, action) => action.payload)

export const countries = createReducer<CountriesModel | null, CountriesActionTypes>(null)
  .handleAction(
    [resetCountriesState, loadCountriesAsync.failure, appendCountriesAsync.failure],
    (state, action) => null
  )
  .handleAction([loadCountriesAsync.success], (state, action) => action.payload)
  .handleAction([appendCountriesAsync.success], (state, action) => {
    const countriesModel = {
      items: {},
      metaData: {}
    } as CountriesModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    countriesModel.items = newItems
    countriesModel.metaData = action.payload.metaData

    return countriesModel
  })

export const isLoadingCountry = createReducer<boolean, CountriesActionTypes>(false as boolean)
  .handleAction(
    [
      resetCountryState,
      loadCountryAsync.success,
      loadCountryAsync.failure,
      loadTranslatedCountryAsync.success,
      loadTranslatedCountryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadCountryAsync.request, loadTranslatedCountryAsync.request], (state, action) => true)

export const loadCountryErrors = createReducer<RestException | null, CountriesActionTypes>(null)
  .handleAction(
    [
      resetCountryState,
      loadCountryAsync.request,
      loadCountryAsync.success,
      loadTranslatedCountryAsync.request,
      loadTranslatedCountryAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadCountryAsync.failure, loadTranslatedCountryAsync.failure], (state, action) => action.payload)

export const country = createReducer<CountryModel | null, CountriesActionTypes>(null)
  .handleAction([resetCountryState, loadCountryAsync.request, loadCountryAsync.failure], (state, action) => null)
  .handleAction([loadCountryAsync.success], (state, action) => action.payload)

export const translatedCountry = createReducer<CountryModel | null, CountriesActionTypes>(null)
  .handleAction(
    [resetCountryState, loadTranslatedCountryAsync.request, loadTranslatedCountryAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedCountryAsync.success], (state, action) => action.payload)
// #endregion Countries

const countriesState = combineReducers({
  isLoadingCountries,
  loadCountriesErrors,
  countries,

  isLoadingCountry,
  loadCountryErrors,
  country,
  translatedCountry
})

export default countriesState
export type CountriesState = ReturnType<typeof countriesState>
