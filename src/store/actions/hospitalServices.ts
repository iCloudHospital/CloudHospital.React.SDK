import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { HospitalServicesModel, HospitalServiceModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import {
  HospitalServiceSearchOption,
  HospitalServicesSearchOption,
  HospitalServiceMediasSearchOption,
  HospitalServiceMediaSearchOption
} from '../../models/hospitalServices'

// #region HospitalServices
export const loadHospitalServicesAsync = createAsyncAction(
  'LOAD_HOSPITAL_SERVICES_REQUEST',
  'LOAD_HOSPITAL_SERVICES_SUCCESS',
  'LOAD_HOSPITAL_SERVICES_FAILURE'
)<HospitalServicesSearchOption, HospitalServicesModel, RestException>()

export const appendHospitalServicesAsync = createAsyncAction(
  'APPEND_HOSPITAL_SERVICES_REQUEST',
  'APPEND_HOSPITAL_SERVICES_SUCCESS',
  'APPEND_HOSPITAL_SERVICES_FAILURE'
)<HospitalServicesSearchOption, HospitalServicesModel, RestException>()

export const loadHospitalServiceAsync = createAsyncAction(
  'LOAD_HOSPITAL_SERVICE_REQUEST',
  'LOAD_HOSPITAL_SERVICE_SUCCESS',
  'LOAD_HOSPITAL_SERVICE_FAILURE'
)<HospitalServiceSearchOption, HospitalServiceModel, RestException>()

export const resetHospitalServicesState = createAction('RESET_HOSPITAL_SERVICES_STATE')()

export const resetHospitalServiceState = createAction('RESET_HOSPITAL_SERVICE_STATE')<undefined>()
// #endregion HospitalServices

// #region HospitalServiceMedias
export const loadHospitalServiceMediasAsync = createAsyncAction(
  'LOAD_HOSPITAL_SERVICE_MEDIAS_REQUEST',
  'LOAD_HOSPITAL_SERVICE_MEDIAS_SUCCESS',
  'LOAD_HOSPITAL_SERVICE_MEDIAS_FAILURE'
)<HospitalServiceMediasSearchOption, MediasModel, RestException>()

export const appendHospitalServiceMediasAsync = createAsyncAction(
  'APPEND_HOSPITAL_SERVICE_MEDIAS_REQUEST',
  'APPEND_HOSPITAL_SERVICE_MEDIAS_SUCCESS',
  'APPEND_HOSPITAL_SERVICE_MEDIAS_FAILURE'
)<HospitalServiceMediasSearchOption, MediasModel, RestException>()

export const loadHospitalServiceMediaAsync = createAsyncAction(
  'LOAD_HOSPITAL_SERVICE_MEDIA_REQUEST',
  'LOAD_HOSPITAL_SERVICE_MEDIA_SUCCESS',
  'LOAD_HOSPITAL_SERVICE_MEDIA_FAILURE'
)<HospitalServiceMediaSearchOption, MediaModel, RestException>()

export const resetHospitalServiceMediasState = createAction('RESET_HOSPITAL_SERVICE_MEDIAS')<undefined>()

export const resetHospitalServiceMediaState = createAction('RESET_HOSPITAL_SERVICE_MEDIA')<undefined>()
// #endregion HospitalServiceMedias

export type HospitalServicesActionTypes =
  | ActionType<typeof loadHospitalServicesAsync>
  | ActionType<typeof appendHospitalServicesAsync>
  | ActionType<typeof loadHospitalServiceAsync>
  | ActionType<typeof resetHospitalServicesState>
  | ActionType<typeof resetHospitalServiceState>
  | ActionType<typeof loadHospitalServiceMediasAsync>
  | ActionType<typeof appendHospitalServiceMediasAsync>
  | ActionType<typeof loadHospitalServiceMediaAsync>
  | ActionType<typeof resetHospitalServiceMediasState>
  | ActionType<typeof resetHospitalServiceMediaState>
