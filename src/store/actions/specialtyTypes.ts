import { SpecialtyTypesModel, SpecialtyTypeModel, MediaModel, MediasModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  SpecialtyTypeMediasSearchOption,
  SpecialtyTypeSearchOption,
  SpecialtyTypesSearchOption
} from '../../models/specialtyTypes'

// #region SpecialtyTypes
export const loadSpecialtyTypesAsync = createAsyncAction(
  'LOAD_SPECIALTYTYPES_REQUEST',
  'LOAD_SPECIALTYTYPES_SUCCESS',
  'LOAD_SPECIALTYTYPES_FAILURE'
)<SpecialtyTypesSearchOption, SpecialtyTypesModel, RestException>()

export const appendSpecialtyTypesAsync = createAsyncAction(
  'APPEND_SPECIALTYTYPES_REQUEST',
  'APPEND_SPECIALTYTYPES_SUCCESS',
  'APPEND_SPECIALTYTYPES_FAILURE'
)<SpecialtyTypesSearchOption, SpecialtyTypesModel, RestException>()

export const loadSpecialtyTypeAsync = createAsyncAction(
  'LOAD_SPECIALTYTYPE_REQUEST',
  'LOAD_SPECIALTYTYPE_SUCCESS',
  'LOAD_SPECIALTYTYPE_FAILURE'
)<SpecialtyTypeSearchOption, SpecialtyTypeModel, RestException>()

export const loadTranslatedSpecialtyTypeAsync = createAsyncAction(
  'LOAD_TRANSLATED_SPECIALTYTYPE_REQUEST',
  'LOAD_TRANSLATED_SPECIALTYTYPE_SUCCESS',
  'LOAD_TRANSLATED_SPECIALTYTYPE_FAILURE'
)<SpecialtyTypeSearchOption, SpecialtyTypeModel, RestException>()
// #endregion SpecialtyTypes

// #region SpecialtyTypeMedias
export const loadSpecialtyTypeMediasAsync = createAsyncAction(
  'LOAD_SPECIALTYTYPE_MEDIAS_REQUEST',
  'LOAD_SPECIALTYTYPE_MEDIAS_SUCCESS',
  'LOAD_SPECIALTYTYPE_MEDIAS_FAILURE'
)<SpecialtyTypeMediasSearchOption, MediasModel, RestException>()

export const appendSpecialtyTypeMediasAsync = createAsyncAction(
  'APPEND_SPECIALTYTYPE_MEDIAS_REQUEST',
  'APPEND_SPECIALTYTYPE_MEDIAS_SUCCESS',
  'APPEND_SPECIALTYTYPE_MEDIAS_FAILURE'
)<SpecialtyTypeMediasSearchOption, SpecialtyTypesModel, RestException>()

export const loadSpecialtyTypeMediaAsync = createAsyncAction(
  'LOAD_SPECIALTYTYPE_MEDIA_REQUEST',
  'LOAD_SPECIALTYTYPE_MEDIA_SUCCESS',
  'LOAD_SPECIALTYTYPE_MEDIA_FAILURE'
)<{ specialtyTypeId: string; mediaId: string }, SpecialtyTypeModel, RestException>()
// #endregion SpecialtyTypeMedias

export const resetSpecialtyTypesState = createAction('RESET_SPECIALTYTYPES_STATE')<undefined>()

export const resetSpecialtyTypeState = createAction('RESET_SPECIALTYTYPE_STATE')<undefined>()

export type SpecialtyTypesActionTypes =
  | ActionType<typeof loadSpecialtyTypesAsync>
  | ActionType<typeof appendSpecialtyTypesAsync>
  | ActionType<typeof loadSpecialtyTypeAsync>
  | ActionType<typeof loadTranslatedSpecialtyTypeAsync>
  | ActionType<typeof loadSpecialtyTypeMediasAsync>
  | ActionType<typeof appendSpecialtyTypeMediasAsync>
  | ActionType<typeof loadSpecialtyTypeMediaAsync>
  | ActionType<typeof resetSpecialtyTypesState>
  | ActionType<typeof resetSpecialtyTypeState>
