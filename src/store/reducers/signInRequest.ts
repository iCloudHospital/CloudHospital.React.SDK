import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { SignInRequestActionTypes, setSignInRequest, resetSignInRequest } from '../actions/signInRequest'

const signInRequest = createReducer<string | null, SignInRequestActionTypes>(null)
  .handleAction([setSignInRequest], (state, action) => action.payload)
  .handleAction([resetSignInRequest], (state, action) => null)

const signInRequestState = combineReducers({
  signInRequest
})

export default signInRequestState
export type SignInState = ReturnType<typeof signInRequestState>
