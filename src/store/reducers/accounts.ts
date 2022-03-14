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
  resetConfirmAccountErrors
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
    (state, action) => false
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
    (state, action) => true
  )

export const postAccountErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, postAccountAsync.request, postAccountAsync.success], (state, action) => null)
  .handleAction([postAccountAsync.failure], (state, action) => action.payload)

export const postAccountSuccess = createReducer<boolean, AccountsActionTypes>(false)
  .handleAction([initializeAccount, postAccountAsync.request, postAccountAsync.failure], (state, action) => false)
  .handleAction([postAccountAsync.success], (state, action) => true)

export const loadAccountError = createReducer<IdentityError | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, loadAccountAsync.request, loadAccountAsync.success], (state, action) => null)
  .handleAction([loadAccountAsync.failure], (state, action) => action.payload)

export const account = createReducer<AccountModel | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, loadAccountAsync.request, loadAccountAsync.failure], (state, action) => null)
  .handleAction([loadAccountAsync.success], (state, action) => action.payload)

export const sendVerificationEmailError = createReducer<IdentityError | null, AccountsActionTypes>(null)
  .handleAction(
    [initializeAccount, sendVerificationEmailAsync.request, sendVerificationEmailAsync.success],
    (state, action) => null
  )
  .handleAction([sendVerificationEmailAsync.failure], (state, action) => action.payload)

export const sendVerificationEmailSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction(
    [initializeAccount, sendVerificationEmailAsync.request, sendVerificationEmailAsync.failure],
    (state, action) => false
  )
  .handleAction([sendVerificationEmailAsync.success], (state, action) => true)

export const confirmAccountErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction(
    [initializeAccount, confirmAccountAsync.request, confirmAccountAsync.success, resetConfirmAccountErrors],
    (state, action) => null
  )
  .handleAction([confirmAccountAsync.failure], (state, action) => action.payload)

export const confirmAccountSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, confirmAccountAsync.request, confirmAccountAsync.failure], (state, action) => false)
  .handleAction([confirmAccountAsync.success], (state, action) => true)

export const changePasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, changePasswordAsync.request, changePasswordAsync.success], (state, action) => null)
  .handleAction([changePasswordAsync.failure], (state, action) => action.payload)

export const changePasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, changePasswordAsync.request, changePasswordAsync.failure], (state, action) => false)
  .handleAction([changePasswordAsync.success], (state, action) => true)

export const forgotPasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, forgotPasswordAsync.request, forgotPasswordAsync.success], (state, action) => null)
  .handleAction([forgotPasswordAsync.failure], (state, action) => action.payload)

export const forgotPasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, forgotPasswordAsync.request, forgotPasswordAsync.failure], (state, action) => false)
  .handleAction([forgotPasswordAsync.success], (state, action) => true)

export const resetPasswordErrors = createReducer<IdentityError[] | null, AccountsActionTypes>(null)
  .handleAction([initializeAccount, resetPasswordAsync.request, resetPasswordAsync.success], (state, action) => null)
  .handleAction([resetPasswordAsync.failure], (state, action) => action.payload)

export const resetPasswordSuccess = createReducer<boolean, AccountsActionTypes>(false as boolean)
  .handleAction([initializeAccount, resetPasswordAsync.request, resetPasswordAsync.failure], (state, action) => false)
  .handleAction([resetPasswordAsync.success], (state, action) => true)

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
