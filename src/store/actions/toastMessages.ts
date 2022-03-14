import { ActionType, createAction } from 'typesafe-actions'
import { Message } from '../reducers/toastMessages'

export const setMessage = createAction('SET_TOAST_MESSAGE')<Message>()

export type MessageActionType = ActionType<typeof setMessage>
