import { AccreditationsModel, AccreditationModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { AccreditationSearchOption, AccreditationsSearchOption } from '../../models/accreditations'
import { RestException } from '../../models/exceptions'

export const loadAccreditationsAsync = createAsyncAction(
  'LOAD_ACCREDITATIONS_REQUEST',
  'LOAD_ACCREDITATIONS_SUCCESS',
  'LOAD_ACCREDITATIONS_FAILURE'
)<AccreditationsSearchOption, AccreditationsModel, RestException>()

export const appendAccreditationsAsync = createAsyncAction(
  'APPEND_ACCREDITATIONS_REQUEST',
  'APPEND_ACCREDITATIONS_SUCCESS',
  'APPEND_ACCREDITATIONS_FAILURE'
)<AccreditationsSearchOption, AccreditationsModel, RestException>()

export const loadAccreditationAsync = createAsyncAction(
  'LOAD_ACCREDITATION_REQUEST',
  'LOAD_ACCREDITATION_SUCCESS',
  'LOAD_ACCREDITATION_FAILURE'
)<AccreditationSearchOption, AccreditationModel, RestException>()

export const resetAccreditationsState = createAction('RESET_ACCREDITATIONS_STATE')<undefined>()

export const resetAccreditationState = createAction('RESET_ACCREDITATION_STATE')<undefined>()

export type AccreditationsActionTypes =
  | ActionType<typeof loadAccreditationsAsync>
  | ActionType<typeof appendAccreditationsAsync>
  | ActionType<typeof loadAccreditationAsync>
  | ActionType<typeof resetAccreditationsState>
  | ActionType<typeof resetAccreditationState>
