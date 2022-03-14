import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'
import { CountryMediasSearchOption } from '../../models/countryMedias'

// #region CountryMedias
export const loadCountryMediasAsync = createAsyncAction(
  'LOAD_COUNTRY_MEDIAS_REQUEST',
  'LOAD_COUNTRY_MEDIAS_SUCCESS',
  'LOAD_COUNTRY_MEDIAS_FAILURE'
)<CountryMediasSearchOption, MediasModel, RestException>()

export const appendCountryMediasAsync = createAsyncAction(
  'APPEND_COUNTRY_MEDIAS_REQUEST',
  'APPEND_COUNTRY_MEDIAS_SUCCESS',
  'APPEND_COUNTRY_MEDIAS_FAILURE'
)<CountryMediasSearchOption, MediasModel, RestException>()

export const loadCountryMediaAsync = createAsyncAction(
  'LOAD_COUNTRY_MEDIA_REQUEST',
  'LOAD_COUNTRY_MEDIA_SUCCESS',
  'LOAD_COUNTRY_MEDIA_FAILURE'
)<{ countryId: string; mediaId: string }, MediaModel, RestException>()

export const resetCountryMediasState = createAction('RESET_COUNTRY_MEDIAS_STATE')<undefined>()

export const resetCountryMediaState = createAction('RESET_COUNTRY_MEDIA_STATE')<undefined>()
// #endregion CountryMedias

export type CountryMediasActionTypes =
  | ActionType<typeof loadCountryMediasAsync>
  | ActionType<typeof appendCountryMediasAsync>
  | ActionType<typeof loadCountryMediaAsync>
  | ActionType<typeof resetCountryMediasState>
  | ActionType<typeof resetCountryMediaState>
