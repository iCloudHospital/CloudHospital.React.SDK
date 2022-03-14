import { DoctorSpecialtiesModel, DoctorSpecialtyModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { DoctorSpecialtiesSearchOption } from '../../models/doctorSpecialties'

export const loadDoctorSpecialtiesAsync = createAsyncAction(
  'LOAD_DOCTOR_SPECIALTIES_REQUEST',
  'LOAD_DOCTOR_SPECIALTIES_SUCCESS',
  'LOAD_DOCTOR_SPECIALTIES_FAILURE'
)<DoctorSpecialtiesSearchOption, DoctorSpecialtiesModel, RestException>()

export const loadDoctorSpecialtyAsync = createAsyncAction(
  'LOAD_DOCTOR_SPECIALTY_REQUEST',
  'LOAD_DOCTOR_SPECIALTY_SUCCESS',
  'LOAD_DOCTOR_SPECIALTY_FAILURE'
)<{ doctorId: string; specialtyId: string }, DoctorSpecialtyModel, RestException>()

export const resetDoctorSpecialtiesState = createAction('RESET_DOCTOR_SPECIALTIES_STATS')<undefined>()

export const resetDoctorSpecialtyState = createAction('RESET_DOCTOR_SPECIALTY_STATS')<undefined>()

export type DoctorSpecialtiesActionTypes =
  | ActionType<typeof loadDoctorSpecialtiesAsync>
  | ActionType<typeof resetDoctorSpecialtiesState>
  | ActionType<typeof resetDoctorSpecialtyState>
