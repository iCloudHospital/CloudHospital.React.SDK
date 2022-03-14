import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { DoctorMediasSearchOption } from '../../models/doctorMedias'
import { RestException } from '../../models/exceptions'

// #region DoctorMedias
export const loadDoctorMediasAsync = createAsyncAction(
  'LOAD_DOCTOR_MEDIAS_REQUEST',
  'LOAD_DOCTOR_MEDIAS_SUCCESS',
  'LOAD_DOCTOR_MEDIAS_FAILURE'
)<DoctorMediasSearchOption, MediasModel, RestException>()

export const appendDoctorMediasAsync = createAsyncAction(
  'APPEND_DOCTOR_MEDIAS_REQUEST',
  'APPEND_DOCTOR_MEDIAS_SUCCESS',
  'APPEND_DOCTOR_MEDIAS_FAILURE'
)<DoctorMediasSearchOption, MediasModel, RestException>()

export const loadDoctorMediaAsync = createAsyncAction(
  'LOAD_DOCTOR_MEDIA_REQUEST',
  'LOAD_DOCTOR_MEDIA_SUCCESS',
  'LOAD_DOCTOR_MEDIA_FAILURE'
)<{ doctorId: string; mediaId: string }, MediaModel, RestException>()

export const resetDoctorMediasState = createAction('RESETDOCTOR_MEDIAS')<undefined>()

export const resetDoctorMediaState = createAction('RESETDOCTOR_MEDIA')<undefined>()
// #endregion DoctorMedias

export type DoctorMediasActionTypes =
  | ActionType<typeof loadDoctorMediasAsync>
  | ActionType<typeof appendDoctorMediasAsync>
  | ActionType<typeof loadDoctorMediaAsync>
  | ActionType<typeof resetDoctorMediasState>
  | ActionType<typeof resetDoctorMediaState>
