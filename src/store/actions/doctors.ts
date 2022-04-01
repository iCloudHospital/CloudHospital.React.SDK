import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import {
  DoctorsModel,
  DoctorModel,
  DoctorAffiliationsModel,
  DoctorAffiliationModel,
  DoctorsSimpleModel
} from 'ch-api-client-typescript2/lib'
import {
  DoctorAffiliationSearchOption,
  DoctorAffiliationsSearchOption,
  DoctorSearchOption,
  DoctorsSearchOption,
  DoctorsSimpleSearchOption
} from '../../models/doctors'
import { RestException } from '../../models/exceptions'

// #region Doctors
export const loadDoctorsAsync = createAsyncAction(
  'LOAD_DOCTORS_REQUEST',
  'LOAD_DOCTORS_SUCCESS',
  'LOAD_DOCTORS_FAILURE'
)<DoctorsSearchOption, DoctorsModel, RestException>()

export const appendDoctorsAsync = createAsyncAction(
  'APPEND_DOCTORS_REQUEST',
  'APPEND_DOCTORS_SUCCESS',
  'APPEND_DOCTORS_FAILURE'
)<DoctorsSearchOption, DoctorsModel, RestException>()

export const loadDoctorAsync = createAsyncAction('LOAD_DOCTOR_REQUEST', 'LOAD_DOCTOR_SUCCESS', 'LOAD_DOCTOR_FAILURE')<
  DoctorSearchOption,
  DoctorModel,
  RestException
>()

export const loadDoctorsSimpleAsync = createAsyncAction(
  'LOAD_DOCTORS_SIMPLE_REQUEST',
  'LOAD_DOCTORS_SIMPLE_SUCCESS',
  'LOAD_DOCTROS_SIMPLE_FAILURE'
)<DoctorsSimpleSearchOption, DoctorsSimpleModel, RestException>()

export const appendDoctorsSimpleAsync = createAsyncAction(
  'APPEND_DOCTORS_SIMPLE_SUCCESS',
  'APPEND_DOCTORS_SIMPLE_REQUEST',
  'APPEND_DOCTROS_SIMPLE_FAILURE'
)<DoctorsSimpleSearchOption, DoctorsSimpleModel, RestException>()

export const loadTranslatedDoctorAsync = createAsyncAction(
  'LOAD_TRANSLATED_DOCTOR_REQUEST',
  'LOAD_TRANSLATED_DOCTOR_SUCCESS',
  'LOAD_TRANSLATED_DOCTOR_FAILURE'
)<DoctorSearchOption, DoctorModel, RestException>()

export const resetDoctorsState = createAction('RESET_DOCTORS_STATE')<undefined>()

export const resetDoctorState = createAction('RESET_DOCTOR_STATE')<undefined>()

export const resetDoctorsSimpleState = createAction('RESET_DOCTORS_SIMPLE_STATE')<undefined>()
// #endregion Doctors

// #region Doctor Affiliations
export const loadDoctorAffiliationsAsync = createAsyncAction(
  'LOAD_DOCTOR_AFFILIATIONS_REQUEST',
  'LOAD_DOCTOR_AFFILIATIONS_SUCCESS',
  'LOAD_DOCTOR_AFFILIATIONS_FAILURE'
)<DoctorAffiliationsSearchOption, DoctorAffiliationsModel, RestException>()

export const loadDoctorAffiliationAsync = createAsyncAction(
  'LOAD_DOCTOR_AFFILIATION_REQUEST',
  'LOAD_DOCTOR_AFFILIATION_SUCCESS',
  'LOAD_DOCTOR_AFFILIATION_FAILURE'
)<DoctorAffiliationSearchOption, DoctorAffiliationModel, RestException>()

export const resetDoctorAffiliationsState = createAction('RESET_DOCTOR_AFFILIATIONS_STATE')<undefined>()

export const resetDoctorAffiliationState = createAction('RESET_DOCTOR_AFFILIATION_STATE')<undefined>()

// #endregion Doctor Affiliations

export type DoctorsActionTypes =
  | ActionType<typeof loadDoctorsAsync>
  | ActionType<typeof appendDoctorsAsync>
  | ActionType<typeof loadDoctorAsync>
  | ActionType<typeof loadTranslatedDoctorAsync>
  | ActionType<typeof resetDoctorsState>
  | ActionType<typeof resetDoctorState>
  | ActionType<typeof loadDoctorAffiliationsAsync>
  | ActionType<typeof loadDoctorAffiliationAsync>
  | ActionType<typeof resetDoctorAffiliationsState>
  | ActionType<typeof resetDoctorAffiliationState>
  | ActionType<typeof loadDoctorsSimpleAsync>
  | ActionType<typeof appendDoctorsSimpleAsync>
  | ActionType<typeof resetDoctorsSimpleState>
