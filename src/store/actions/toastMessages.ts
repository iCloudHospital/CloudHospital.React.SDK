import { ActionType, createAction } from 'typesafe-actions'
import { ToastMessageModel } from '../../models/toastMessage'

export const setToastMessage = createAction('SET_TOAST_MESSAGE')<ToastMessageModel>()
export const resetToastMessage = createAction('RESET_TOAST_MESSAGE')<ToastMessageModel>()

export type ToastMessageActionType = ActionType<typeof setToastMessage> | ActionType<typeof resetToastMessage>
