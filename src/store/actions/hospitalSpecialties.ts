import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  HospitalSpecialtiesModel,
  HospitalSpecialtiesSimpleModel,
  HospitalSpecialtyModel
} from 'ch-api-client-typescript2/lib'
import {
  HospitalSpecialtiesSearchOption,
  HospitalSpecialtiesSimpleSearchOption,
  HospitalSpecialtySearchOption
} from '../../models/hospitalSpecialties'

// #region HospitalSpecialties
export const loadHospitalSpecialtiesAsync = createAsyncAction(
  'LOAD_HOSPITAL_SPECIALTIES_REQUEST',
  'LOAD_HOSPITAL_SPECIALTIES_SUCCESS',
  'LOAD_HOSPITAL_SPECIALTIES_FAILURE'
)<HospitalSpecialtiesSearchOption, HospitalSpecialtiesModel, RestException>()

export const appendHospitalSpecialtiesAsync = createAsyncAction(
  'APPEND_HOSPITAL_SPECIALTIES_REQUEST',
  'APPEND_HOSPITAL_SPECIALTIES_SUCCESS',
  'APPEND_HOSPITAL_SPECIALTIES_FAILURE'
)<HospitalSpecialtiesSearchOption, HospitalSpecialtiesModel, RestException>()

export const loadHospitalSpecialtyAsync = createAsyncAction(
  'LOAD_HOSPITAL_SPECIALTY_REQUEST',
  'LOAD_HOSPITAL_SPECIALTY_SUCCESS',
  'LOAD_HOSPITAL_SPECIALTY_FAILURE'
)<HospitalSpecialtySearchOption, HospitalSpecialtyModel, RestException>()

export const resetHospitalSpecialtiesState = createAction('RESET_HOSPITAL_SPECIALTIES_STATE')<undefined>()

export const resetHospitalSpecialtyState = createAction('RESET_HOSPITAL_SPECIALTY_STATE')()

export const resetHospitalSpecialtiesSimpleState = createAction('RESET_HOSPITAL_SPECIALTIES_SIMPLE_STATE')<undefined>()

export const loadHospitalSpecialtiesSimpleAsync = createAsyncAction(
  'LOAD_HOSPITAL_SPECIALTIES_SIMPLE_REQUEST',
  'LOAD_HOSPITAL_SPECIALTIES_SIMPLE_SUCCESS',
  'LOAD_HOSPITAL_SPECIALTIES_SIMPLE_FAILURE'
)<HospitalSpecialtiesSimpleSearchOption, HospitalSpecialtiesSimpleModel, RestException>()

export const appendHospitalSpecialtiesSimpleAsync = createAsyncAction(
  'APPEND_HOSPITAL_SPECIALTIES_SIMPLE_REQUEST',
  'APPEND_HOSPITAL_SPECIALTIES_SIMPLE_SUCCESS',
  'APPEND_HOSPITAL_SPECIALTIES_SIMPLE_FAILURE'
)<HospitalSpecialtiesSimpleSearchOption, HospitalSpecialtiesSimpleModel, RestException>()
// #endregion HospitalSpecialties

export type HospitalSpecialtiesActionTypes =
  | ActionType<typeof loadHospitalSpecialtiesAsync>
  | ActionType<typeof appendHospitalSpecialtiesAsync>
  | ActionType<typeof loadHospitalSpecialtiesSimpleAsync>
  | ActionType<typeof appendHospitalSpecialtiesSimpleAsync>
  | ActionType<typeof loadHospitalSpecialtyAsync>
  | ActionType<typeof resetHospitalSpecialtiesState>
  | ActionType<typeof resetHospitalSpecialtyState>
  | ActionType<typeof resetHospitalSpecialtiesSimpleState>
