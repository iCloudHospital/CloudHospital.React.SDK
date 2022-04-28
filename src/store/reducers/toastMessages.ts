import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { ToastMessageModel } from '../../models/toastMessage'
import { resetToastMessage, setToastMessage, ToastMessageActionType } from '../actions/toastMessages'

export const toastMessage = createReducer<ToastMessageModel | null, ToastMessageActionType>(null)
  .handleAction([setToastMessage], (state, action) => action.payload)
  .handleAction([resetToastMessage], (action, state) => null)

const toastMessageState = combineReducers({
  toastMessage
})

export type ToastMessageState = ReturnType<typeof toastMessageState>
export default toastMessageState
