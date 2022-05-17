import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'

import { CurrentLogin, ExternalLogins } from '../../models/auths'
import { IdentityError } from '../../models/exceptions'

export const loadExternalLoginsAsync = createAsyncAction(
  'LOAD_EXTERNAL_LOGINS_REQUEST',
  'LOAD_EXTERNAL_LOGINS_SUCCESS',
  'LOAD_EXTERNAL_LOGINS_FAILURE'
)<undefined, ExternalLogins, IdentityError[]>()

export const postExternalLoginAsync = createAsyncAction(
  'POST_EXTERNAL_LOGIN_REQUEST',
  'POST_EXTERNAL_LOGIN_SUCCESS',
  'POST_EXTERNAL_LOGIN_FAILURE'
)<CurrentLogin, boolean, IdentityError[]>()

export const deleteExternalLoginAsync = createAsyncAction(
  'DELETE_EXTERNAL_LOGIN_REQUEST',
  'DELETE_EXTERNAL_LOGIN_SUCCESS',
  'DELETE_EXTERNAL_LOGIN_FAILURE'
)<CurrentLogin, boolean, IdentityError[]>()

export const resetExternalLoginErrorsState = createAction('RESET_EXTERNAL_LOGIN_ERRORS_STATE')()

export type ExternalLoginsActionTypes =
  | ActionType<typeof loadExternalLoginsAsync>
  | ActionType<typeof postExternalLoginAsync>
  | ActionType<typeof deleteExternalLoginAsync>
  | ActionType<typeof resetExternalLoginErrorsState>
