import { SpecialtiesModel, SpecialtyModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { SpecialtiesSearchOption, SpecialtySearchOption } from '../../models/specialties'

export const loadSpecialtiesAsync = createAsyncAction(
  'LOAD_SPECIALTIES_REQUEST',
  'LOAD_SPECIALTIES_SUCCESS',
  'LOAD_SPECIALTIES_FAILURE'
)<SpecialtiesSearchOption, SpecialtiesModel, RestException>()

export const appendSpecialtiesAsync = createAsyncAction(
  'APPEND_SPECIALTIES_REQUEST',
  'APPEND_SPECIALTIES_SUCCESS',
  'APPEND_SPECIALTIES_FAILURE'
)<SpecialtiesSearchOption, SpecialtiesModel, RestException>()

export const loadSpecialtyAsync = createAsyncAction(
  'LOAD_SPECIALTY_REQUEST',
  'LOAD_SPECIALTY_SUCCESS',
  'LOAD_SPECIALTY_FAILURE'
)<SpecialtySearchOption, SpecialtyModel, RestException>()

export const loadTranslatedSpecialtyAsync = createAsyncAction(
  'LOAD_TRANSLATED_SPECIALTY_REQUEST',
  'LOAD_TRANSLATED_SPECIALTY_SUCCESS',
  'LOAD_TRANSLATED_SPECIALTY_FAILURE'
)<SpecialtySearchOption, SpecialtyModel, RestException>()

export const resetSpecialtiesState = createAction('RESET_SPECIALTIES_STATE')<undefined>()

export const resetSpecialtyState = createAction('RESET_SPECIALTY_STATE')<undefined>()

export type SpecialtiesActionTypes =
  | ActionType<typeof loadSpecialtiesAsync>
  | ActionType<typeof appendSpecialtiesAsync>
  | ActionType<typeof loadSpecialtyAsync>
  | ActionType<typeof loadTranslatedSpecialtyAsync>
  | ActionType<typeof resetSpecialtiesState>
  | ActionType<typeof resetSpecialtyState>
