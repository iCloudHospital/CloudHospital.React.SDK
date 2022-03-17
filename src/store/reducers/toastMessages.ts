import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { MessageActionType, setMessage } from '../actions/toastMessages'

export type SuccessMessage = {
  text: string
  status?: number | null
}

export type Message = RestException | SuccessMessage
export const message = createReducer<Message, MessageActionType>({
  text: ''
}).handleAction([setMessage], (state, action) => action.payload)

const toastMessageState = combineReducers({
  message
})

export type ToastMessageState = ReturnType<typeof toastMessageState>
export default toastMessageState
