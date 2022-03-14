import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { HospitalAccreditationsSearchOption } from '../../models/hospitalAccreditations'
import { HospitalAccreditationsModel, HospitalAccreditationModel } from 'ch-api-client-typescript2/lib'

// #region HospitalAccreditations
export const loadHospitalAccreditationsAsync = createAsyncAction(
  'LOAD_HOSPITAL_ACCREDITATIONS_REQUEST',
  'LOAD_HOSPITAL_ACCREDITATIONS_SUCCESS',
  'LOAD_HOSPITAL_ACCREDITATIONS_FAILURE'
)<HospitalAccreditationsSearchOption, HospitalAccreditationsModel, RestException>()

export const appendHospitalAccreditationsAsync = createAsyncAction(
  'APPEND_HOSPITAL_ACCREDITATIONS_REQUEST',
  'APPEND_HOSPITAL_ACCREDITATIONS_SUCCESS',
  'APPEND_HOSPITAL_ACCREDITATIONS_FAILURE'
)<HospitalAccreditationsSearchOption, HospitalAccreditationsModel, RestException>()

export const loadHospitalAccreditationAsync = createAsyncAction(
  'LOAD_HOSPITAL_ACCREDITATION_REQUEST',
  'LOAD_HOSPITAL_ACCREDITATION_SUCCESS',
  'LOAD_HOSPITAL_ACCREDITATION_FAILURE'
)<{ hospitalId: string; accreditationId: string }, HospitalAccreditationModel, RestException>()

export const resetHospitalAccreditationsState = createAction('RESET_HOSPITAL_ACCREDITATIONS_STATE')<undefined>()

export const resetHospitalAccreditationState = createAction('RESET_HOSPITAL_ACCREDTIATION_STATE')<undefined>()
// #endregion HospitalAccreditations

export type HospitalAccreditationsActionTypes =
  | ActionType<typeof loadHospitalAccreditationsAsync>
  | ActionType<typeof appendHospitalAccreditationsAsync>
  | ActionType<typeof loadHospitalAccreditationAsync>
  | ActionType<typeof resetHospitalAccreditationsState>
  | ActionType<typeof resetHospitalAccreditationState>
