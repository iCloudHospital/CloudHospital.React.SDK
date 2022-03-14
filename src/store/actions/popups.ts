import { ActionType, createAction } from 'typesafe-actions'
import { CustomPopupChildren } from '../reducers/popups'
// import { Message } from '../reducers/toastMessages'

export const setCustomPopup = createAction('SET_CUSTOM_POPUP')<CustomPopupChildren>()
export const setCustomPopupIsOpen = createAction('SET_CUSTOM_POPUP_IS_OPEN')<Boolean>()
export type PopupsActionType = ActionType<typeof setCustomPopup> | ActionType<typeof setCustomPopupIsOpen>
