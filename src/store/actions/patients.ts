import { PatientModel, CreatePatientCommand, UpdatePatientCommand } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { PatientSearchOption } from '../../models/patients'

export const loadPatientAsync = createAsyncAction(
  'LOAD_PATIENT_REQUEST',
  'LOAD_PATIENT_SUCCESS',
  'LOAD_PATIENT_FAILURE'
)<PatientSearchOption, PatientModel, RestException>()

export const postPatientAsync = createAsyncAction(
  'POST_PATIENT_REQUEST',
  'POST_PATIENT_SUCCESS',
  'POST_PATIENT_FAILURE'
)<CreatePatientCommand, PatientModel, RestException>()

export const putPatientAsync = createAsyncAction('PUT_PATIENT_REQUEST', 'PUT_PATIENT_SUCCESS', 'PUT_PATIENT_FAILURE')<
  { patientId: string; updatePatientCommand?: UpdatePatientCommand },
  PatientModel,
  RestException
>()

export const deletePatientAsync = createAsyncAction(
  'DELETE_PATIENT_REQUEST',
  'DELETE_PATIENT_SUCCESS',
  'DELETE_PATIENT_FAILURE'
)<string, boolean, RestException>()

export const resetPatientState = createAction('RESET_PATIENT_STATE')<undefined>()

export type PatientsActionTypes =
  | ActionType<typeof loadPatientAsync>
  | ActionType<typeof postPatientAsync>
  | ActionType<typeof putPatientAsync>
  | ActionType<typeof deletePatientAsync>
  | ActionType<typeof resetPatientState>
