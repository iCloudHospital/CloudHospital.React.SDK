import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { ExternalLogins } from '../../models/auths'
import { IdentityError } from '../../models/exceptions'
import {
  deleteExternalLoginAsync,
  ExternalLoginsActionTypes,
  loadExternalLoginsAsync,
  postExternalLoginAsync
} from '../actions/externalLogins'

export const isLoadingExternalLogins = createReducer<boolean, ExternalLoginsActionTypes>(false as boolean)
  .handleAction(
    [
      loadExternalLoginsAsync.success,
      loadExternalLoginsAsync.failure,
      postExternalLoginAsync.success,
      postExternalLoginAsync.failure,
      deleteExternalLoginAsync.success,
      deleteExternalLoginAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadExternalLoginsAsync.request, postExternalLoginAsync.request, deleteExternalLoginAsync.request],
    (state, action) => true
  )

export const externalLoginErrors = createReducer<IdentityError[] | null, ExternalLoginsActionTypes>(null)
  .handleAction(
    [
      postExternalLoginAsync.request,
      postExternalLoginAsync.success,
      deleteExternalLoginAsync.request,
      deleteExternalLoginAsync.success
    ],
    (state, action) => null
  )
  .handleAction([postExternalLoginAsync.failure, deleteExternalLoginAsync.failure], (state, action) => action.payload)

export const externalLogins = createReducer<ExternalLogins | null, ExternalLoginsActionTypes>(null)
  .handleAction([loadExternalLoginsAsync.request, loadExternalLoginsAsync.failure], (satate, action) => null)
  .handleAction([loadExternalLoginsAsync.success], (satate, action) => action.payload)

export const postExternalLoginSuccess = createReducer<boolean, ExternalLoginsActionTypes>(false)
  .handleAction([loadExternalLoginsAsync.request, loadExternalLoginsAsync.failure], (state, action) => false)
  .handleAction([postExternalLoginAsync.success], (state, action) => true)

export const deleteExternalLoginSuccess = createReducer<boolean, ExternalLoginsActionTypes>(false)
  .handleAction([loadExternalLoginsAsync.request, loadExternalLoginsAsync.failure], (state, action) => false)
  .handleAction([deleteExternalLoginAsync.success], (state, action) => true)

const externalLoginsState = combineReducers({
  isLoadingExternalLogins,
  externalLogins,
  externalLoginErrors,
  postExternalLoginSuccess,
  deleteExternalLoginSuccess
})

export default externalLoginsState
export type ExternalLoginsState = ReturnType<typeof externalLoginsState>
