import { ActionType, createAction } from 'typesafe-actions'

export const setSignInRequest = createAction('SET_SIGNIN_REQUEST')<string | null>()

export type SignInRequestActionTypes = ActionType<typeof setSignInRequest>
