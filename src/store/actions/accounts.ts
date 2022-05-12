import { ActionType, createAsyncAction, createAction } from 'typesafe-actions'
import {
  AccountModel,
  ChangePasswordModel,
  ForgotPasswordModel,
  PostAccountModel,
  ResetPasswordModel,
  ConfirmAccountModel
} from '../../models/accounts'
import { IdentityError } from '../../models/exceptions'

export const postAccountAsync = createAsyncAction(
  'POST_ACCOUNT_REQUEST',
  'POST_ACCOUNT_SUCCESS',
  'POST_ACCOUNT_FAILURE'
)<PostAccountModel, boolean, IdentityError[]>()

export const loadAccountAsync = createAsyncAction(
  'LOAD_ACCOUNT_REQUEST',
  'LOAD_ACCOUNT_SUCCESS',
  'LOAD_ACCOUNT_FAILURE'
)<undefined, AccountModel, IdentityError>()

export const sendVerificationEmailAsync = createAsyncAction(
  'SEND_VERIFICATION_EMAIL_REQUEST',
  'SEND_VERIFICATION_EMAIL_SUCCESS',
  'SEND_VERIFICATION_EMAIL_FAILURE'
)<undefined, boolean, IdentityError>()

export const confirmAccountAsync = createAsyncAction(
  'CONFIRM_ACCOUNT_REQUEST',
  'CONFIRM_ACCOUNT_SUCCESS',
  'CONFIRM_ACCOUNT_FAILURE'
)<ConfirmAccountModel, boolean, IdentityError[]>()

export const changePasswordAsync = createAsyncAction(
  'CHANGE_PASSWORD_REQUEST',
  'CHANGE_PASSWORD_SUCCESS',
  'CHANGE_PASSWORD_FAILURE'
)<ChangePasswordModel, boolean, IdentityError[]>()

export const forgotPasswordAsync = createAsyncAction(
  'FORGOT_PASSWORD_REQUEST',
  'FORGOT_PASSWORD_SUCCESS',
  'FORGOT_PASSWORD_FAILURE'
)<ForgotPasswordModel, boolean, IdentityError[]>()

export const resetPasswordAsync = createAsyncAction(
  'RESET_PASSWORD_REQUEST',
  'RESET_PASSWORD_SUCCESS',
  'RESET_PASSWORD_FAILURE'
)<ResetPasswordModel, boolean, IdentityError[]>()

export const initializeAccount = createAction('INITIALIZE_ACCOUNT')<undefined>()
export const resetChangePasswordErrors = createAction('RESET_CHANGE_PASSWORD_ERRORS')()
export const resetConfirmAccountErrors = createAction('RESET_CONFIRM_ACCOUNT_ERRORS')()
export const resetConfirmAccountSuccess = createAction('RESET_CONFIRM_ACCOUNT_SUCCESS')()
export const resetChangePasswordSuccessState = createAction('RESET_CHANGE_PASSWORD_SUCCESS_STATE')()
export const resetPostAccountErrors = createAction('RESET_POST_ACCOUNT_ERRORS')()

export type AccountsActionTypes =
  | ActionType<typeof postAccountAsync>
  | ActionType<typeof loadAccountAsync>
  | ActionType<typeof sendVerificationEmailAsync>
  | ActionType<typeof confirmAccountAsync>
  | ActionType<typeof changePasswordAsync>
  | ActionType<typeof forgotPasswordAsync>
  | ActionType<typeof resetPasswordAsync>
  | ActionType<typeof initializeAccount>
  | ActionType<typeof resetChangePasswordErrors>
  | ActionType<typeof resetConfirmAccountErrors>
  | ActionType<typeof resetConfirmAccountSuccess>
  | ActionType<typeof resetChangePasswordSuccessState>
  | ActionType<typeof resetPostAccountErrors>
