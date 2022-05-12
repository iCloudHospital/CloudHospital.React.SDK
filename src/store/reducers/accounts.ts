import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  AccountsActionTypes,
  postAccountAsync,
  loadAccountAsync,
  sendVerificationEmailAsync,
  confirmAccountAsync,
  changePasswordAsync,
  forgotPasswordAsync,
  resetPasswordAsync,
  initializeAccount,
  resetConfirmAccountErrors,
  resetChangePasswordSuccessState,
  resetPostAccountErrors,
  resetConfirmAccountSuccess
} from '../actions/accounts'
import { AccountModel } from '../../models/accounts'
import { IdentityError } from '../../models/exceptions'

export const isLoadingAccount = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction(
    [
      postAccountAsync.success,
      postAccountAsync.failure,
      loadAccountAsync.success,
      loadAccountAsync.failure,
      sendVerificationEmailAsync.success,
      sendVerificationEmailAsync.failure,
      confirmAccountAsync.success,
      confirmAccountAsync.failure,
      changePasswordAsync.success,
      changePasswordAsync.failure,
      forgotPasswordAsync.success,
      forgotPasswordAsync.failure,
      resetPasswordAsync.success,
      resetPasswordAsync.failure,
      initializeAccount
    ],
    (_, __) => false
  )
  .handleAction(
    [
      postAccountAsync.request,
      loadAccountAsync.request,
      sendVerificationEmailAsync.request,
      confirmAccountAsync.request,
      changePasswordAsync.request,
      forgotPasswordAsync.request,
      resetPasswordAsync.request
    ],
    (_, __) => true
  )

export const postAccountErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction(
    [initializeAccount, resetPostAccountErrors, postAccountAsync.request, postAccountAsync.success],
    (_, __) => null
  )
  .handleAction([postAccountAsync.failure], (_, action) => action.payload)

export const postAccountSuccess = createReducer<boolean, AccountsActionTypes>(false)
  .handleAction([initializeAccount, postAccountAsync.request, postAccountAsync.failure], (_, __) => false)
  .handleAction([postAccountAsync.success], (_, __) => true)

export const loadAccountError = createReducer<IdentityError | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, loadAccountAsync.request, loadAccountAsync.success], (_, __) => null)
  .handleAction([loadAccountAsync.failure], (_, action) => action.payload)

export const account = createReducer<AccountModel | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, loadAccountAsync.request, loadAccountAsync.failure], (_, __) => null)
  .handleAction([loadAccountAsync.success], (_, action) => action.payload)

export const sendVerificationEmailError = createReducer<IdentityError | null, AccountsActionTypes>(null)
  .handleAction(
    [initializeAccount, sendVerificationEmailAsync.request, sendVerificationEmailAsync.success],
    (_, __) => null
  )
  .handleAction([sendVerificationEmailAsync.failure], (_, action) => action.payload)

export const sendVerificationEmailSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction(
    [initializeAccount, sendVerificationEmailAsync.request, sendVerificationEmailAsync.failure],
    (_, __) => false
  )
  .handleAction([sendVerificationEmailAsync.success], (_, __) => true)

export const confirmAccountErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction(
    [initializeAccount, confirmAccountAsync.request, confirmAccountAsync.success, resetConfirmAccountErrors],
    (_, __) => null
  )
  .handleAction([confirmAccountAsync.failure], (_, action) => action.payload)

export const confirmAccountSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction(
    [initializeAccount, resetConfirmAccountSuccess, confirmAccountAsync.request, confirmAccountAsync.failure],
    (_, __) => false
  )
  .handleAction([confirmAccountAsync.success], (_, __) => true)

export const changePasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, changePasswordAsync.request, changePasswordAsync.success], (_, __) => null)
  .handleAction([changePasswordAsync.failure], (_, action) => action.payload)

export const changePasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction(
    [initializeAccount, resetChangePasswordSuccessState, changePasswordAsync.request, changePasswordAsync.failure],
    (_, __) => false
  )
  .handleAction([changePasswordAsync.success], (_, __) => true)

export const forgotPasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, forgotPasswordAsync.request, forgotPasswordAsync.success], (_, __) => null)
  .handleAction([forgotPasswordAsync.failure], (_, action) => action.payload)

export const forgotPasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, forgotPasswordAsync.request, forgotPasswordAsync.failure], (_, __) => false)
  .handleAction([forgotPasswordAsync.success], (_, __) => true)

export const resetPasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, resetPasswordAsync.request, resetPasswordAsync.success], (_, __) => null)
  .handleAction([resetPasswordAsync.failure], (_, action) => action.payload)

export const resetPasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, resetPasswordAsync.request, resetPasswordAsync.failure], (_, __) => false)
  .handleAction([resetPasswordAsync.success], (_, __) => true)

const accountsState = combineReducers({
  isLoadingAccount,
  postAccountErrors,
  postAccountSuccess,
  loadAccountError,
  account,
  sendVerificationEmailError,
  sendVerificationEmailSuccess,
  confirmAccountErrors,
  confirmAccountSuccess,
  changePasswordErrors,
  changePasswordSuccess,
  forgotPasswordErrors,
  forgotPasswordSuccess,
  resetPasswordErrors,
  resetPasswordSuccess
})

export default accountsState
export type AccountsState = ReturnType<typeof accountsState>
