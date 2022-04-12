import { ActionType, createAction } from 'typesafe-actions'

export const setSignInRequest = createAction('SET_SIGNIN_REQUEST')<string | null>()
export const resetSignInRequest = createAction('CLEAR_SIGNIN_REQUEST')()

export type SignInRequestActionTypes = ActionType<typeof setSignInRequest> | ActionType<typeof resetSignInRequest>
