import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { SignInRequestActionTypes, setSignInRequest } from '../actions/signInRequest'

const signInRequest = createReducer<string | null, SignInRequestActionTypes>(null).handleAction(
  [setSignInRequest],
  (state, action) => action.payload
)

const signInRequestState = combineReducers({
  signInRequest
})

export default signInRequestState
export type SignInState = ReturnType<typeof signInRequestState>
