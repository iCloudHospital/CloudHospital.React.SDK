import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { HospitalSearchOption, HospitalsSearchOption, HospitalsSimpleSearchOption } from '../../models/hospitals'
import {
  HospitalsModel,
  HospitalModel,
  MediasModel,
  MediaModel,
  HospitalsSimpleModel
} from 'ch-api-client-typescript2/lib'
import { HospitalMediasSearchOption } from '../../models/hospitals'

// #region Hospitals
export const loadHospitalsAsync = createAsyncAction(
  'LOAD_HOSPITALS_REQUEST',
  'LOAD_HOSPITALS_SUCCESS',
  'LOAD_HOSPITALS_FAILURE'
)<HospitalsSearchOption, HospitalsModel, RestException>()

export const appendHospitalsAsync = createAsyncAction(
  'APPEND_HOSPITALS_REQUEST',
  'APPEND_HOSPITALS_SUCCESS',
  'APPEND_HOSPITALS_FAILURE'
)<HospitalsSearchOption, HospitalsModel, RestException>()

export const loadHospitalsSimpleAsync = createAsyncAction(
  'LOAD_HOSPITALS_SIMPLE_REQUEST',
  'LOAD_HOSPITALS_SIMPLE_SUCCESS',
  'LOAD_HOSPITALS_SIMPLE_FAILURE'
)<HospitalsSimpleSearchOption, HospitalsSimpleModel, RestException>()

export const appendHospitalsSimpleAsync = createAsyncAction(
  'APPEND_HOSPITALS_SIMPLE_REQUEST',
  'APPEND_HOSPITALS_SIMPLE_SUCCESS',
  'APPEND_HOSPITALS_SIMPLE_FAILURE'
)<HospitalsSimpleSearchOption, HospitalsSimpleModel, RestException>()

export const loadHospitalAsync = createAsyncAction(
  'LOAD_HOSPITAL_REQUEST',
  'LOAD_HOSPITAL_SUCCESS',
  'LOAD_HOSPITAL_FAILURE'
)<HospitalSearchOption, HospitalModel, RestException>()

export const loadTranslatedHospitalAsync = createAsyncAction(
  'LOAD_TRANSLATED_HOSPITAL_REQUEST',
  'LOAD_TRANSLATED_HOSPITAL_SUCCESS',
  'LOAD_TRANSLATED_HOSPITAL_FAILURE'
)<HospitalSearchOption, HospitalModel, RestException>()

export const resetHospitalsState = createAction('RESET_HOSPITALS_STATE')<undefined>()

export const resetHospitalState = createAction('RESET_HOSPITAL_STATE')<undefined>()

export const resetHospitalsSimpleState = createAction('RESET_HOSPITAL_SIMPLE_STATE')<undefined>()
// #endregion Hospitals

// #region HospitalMedias
export const loadHospitalMediasAsync = createAsyncAction(
  'LOAD_HOSPITAL_MEDIAS_REQUEST',
  'LOAD_HOSPITAL_MEDIAS_SUCCESS',
  'LOAD_HOSPITAL_MEDIAS_FAILURE'
)<HospitalMediasSearchOption, MediasModel, RestException>()

export const appendHospitalMediasAsync = createAsyncAction(
  'APPEND_HOSPITAL_MEDIAS_REQUEST',
  'APPEND_HOSPITAL_MEDIAS_SUCCESS',
  'APPEND_HOSPITAL_MEDIAS_FAILURE'
)<HospitalMediasSearchOption, MediasModel, RestException>()

export const loadHospitalMediaAsync = createAsyncAction(
  'LOAD_HOSPITAL_MEDIA_REQUEST',
  'LOAD_HOSPITAL_MEDIA_SUCCESS',
  'LOAD_HOSPITAL_MEDIA_FAILURE'
)<{ hospitalId: string; mediaId: string }, MediaModel, RestException>()

export const resetHospitalMediasState = createAction('RESET_HOSPITAL_MEDIAS')<undefined>()

export const resetHospitalMediaState = createAction('RESET_HOSPITAL_MEDIA')<undefined>()
// #endregion HospitalMedias

export type HospitalsActionTypes =
  | ActionType<typeof loadHospitalsAsync>
  | ActionType<typeof appendHospitalsAsync>
  | ActionType<typeof loadHospitalsSimpleAsync>
  | ActionType<typeof appendHospitalsSimpleAsync>
  | ActionType<typeof loadHospitalAsync>
  | ActionType<typeof loadTranslatedHospitalAsync>
  | ActionType<typeof resetHospitalsState>
  | ActionType<typeof resetHospitalState>
  | ActionType<typeof loadHospitalMediasAsync>
  | ActionType<typeof appendHospitalMediasAsync>
  | ActionType<typeof loadHospitalMediaAsync>
  | ActionType<typeof resetHospitalMediasState>
  | ActionType<typeof resetHospitalMediaState>
  | ActionType<typeof resetHospitalsSimpleState>

