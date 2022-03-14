import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendCountryMediasAsync,
  CountryMediasActionTypes,
  loadCountryMediaAsync,
  loadCountryMediasAsync,
  resetCountryMediasState,
  resetCountryMediaState
} from '../actions/countryMedias'

// #region CountryMedias
export const isLoadingCountryMedias = createReducer<boolean, CountryMediasActionTypes>(false as boolean)
  .handleAction(
    [
      resetCountryMediasState,
      loadCountryMediasAsync.success,
      loadCountryMediasAsync.failure,
      appendCountryMediasAsync.success,
      appendCountryMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadCountryMediasAsync.request, appendCountryMediasAsync.request], (state, action) => true)

export const loadCountryMediasErrors = createReducer<RestException | null, CountryMediasActionTypes>(null)
  .handleAction(
    [
      resetCountryMediasState,
      loadCountryMediasAsync.request,
      loadCountryMediasAsync.success,
      appendCountryMediasAsync.request,
      appendCountryMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadCountryMediasAsync.failure, appendCountryMediasAsync.failure], (state, action) => action.payload)

export const countryMedias = createReducer<MediasModel | null, CountryMediasActionTypes>(null)
  .handleAction([resetCountryMediasState, loadCountryMediasAsync.failure], (state, action) => null)
  .handleAction([loadCountryMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendCountryMediasAsync.success], (state, action) => {
    const hospitalMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    hospitalMediasModel.items = newItems
    hospitalMediasModel.metaData = action.payload.metaData

    return hospitalMediasModel
  })

export const isLoadingCountryMedia = createReducer<boolean, CountryMediasActionTypes>(false as boolean)
  .handleAction(
    [resetCountryMediaState, loadCountryMediaAsync.success, loadCountryMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadCountryMediaAsync.request], (state, action) => true)

export const loadCountryMediaErrors = createReducer<RestException | null, CountryMediasActionTypes>(null)
  .handleAction(
    [resetCountryMediaState, loadCountryMediaAsync.request, loadCountryMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadCountryMediaAsync.failure], (state, action) => action.payload)

export const countryMedia = createReducer<MediaModel | null, CountryMediasActionTypes>(null)
  .handleAction([resetCountryMediaState, loadCountryMediaAsync.failure], (state, action) => null)
  .handleAction([loadCountryMediaAsync.success], (state, action) => action.payload)
// #endregion CountryMedias

const countryMediasState = combineReducers({
  isLoadingCountryMedias,
  loadCountryMediasErrors,
  countryMedias,

  isLoadingCountryMedia,
  loadCountryMediaErrors,
  countryMedia
})

export default countryMediasState
export type CountryMediasState = ReturnType<typeof countryMediasState>
