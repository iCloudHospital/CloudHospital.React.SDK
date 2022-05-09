import { UpdateProfileCommand, UserModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ChangeEmailModel } from '../../models/users'

export const loadProfileAsync = createAsyncAction(
  'LOAD_PROFILE_REQUEST',
  'LOAD_PROFILE_SUCCESS',
  'LOAD_PROFILE_FAILURE'
)<undefined, UserModel | null, RestException>()

export const changeEmailAsync = createAsyncAction(
  'CHANGE_EMAIL_REQUEST',
  'CHANGE_EMAIL_SUCCESS',
  'CHANGE_EMAIL_FAILURE'
)<ChangeEmailModel, boolean, RestException>()

export const updateProfileAsync = createAsyncAction(
  'UPDATE_PROFILE_REQUEST',
  'UPDATE_PROFILE_SUCCESS',
  'UPDATE_PROFILE_FAILURE'
)<UpdateProfileCommand, UserModel, RestException>()

export const resetProfileState = createAction('RESET_PROFILE_STATE')()
export const resetUpdateProfileErrors = createAction('RESET_UPDATE_PROFILE_ERRORS')()
export const resetChangeEmailSuccessState = createAction('RESET_CHANGE_EMAIL_SUCCESS_STATE')()

export type ProfilesActionTypes =
  | ActionType<typeof loadProfileAsync>
  | ActionType<typeof changeEmailAsync>
  | ActionType<typeof updateProfileAsync>
  | ActionType<typeof resetProfileState>
  | ActionType<typeof resetUpdateProfileErrors>
  | ActionType<typeof resetChangeEmailSuccessState>
