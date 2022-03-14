import { DoctorEducationsModel, DoctorEducationModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { DoctorEducationsSearchOption } from '../../models/doctorEducations'
import { RestException } from '../../models/exceptions'

export const loadDoctorEducationsAsync = createAsyncAction(
  'LOAD_DOCTOR_EDUCATIONS_REQUEST',
  'LOAD_DOCTOR_EDUCATIONS_SUCCESS',
  'LOAD_DOCTOR_EDUCATIONS_FAILURE'
)<DoctorEducationsSearchOption, DoctorEducationsModel, RestException>()

export const loadDoctorEducationAsync = createAsyncAction(
  'LOAD_DOCTOR_EDUCATION_REQUEST',
  'LOAD_DOCTOR_EDUCATION_SUCCESS',
  'LOAD_DOCTOR_EDUCATION_FAILURE'
)<{ doctorId: string; educationId: string }, DoctorEducationModel, RestException>()

export const resetDoctorEducationsState = createAction('RESET_DOCTOR_EDUCATIONS_STATE')<undefined>()

export const resetDoctorEducationState = createAction('RESET_DOCTOR_EDUCATION_STATE')<undefined>()

export type DoctorEducationsActionTypes =
  | ActionType<typeof loadDoctorEducationsAsync>
  | ActionType<typeof loadDoctorEducationAsync>
  | ActionType<typeof resetDoctorEducationsState>
  | ActionType<typeof resetDoctorEducationState>
