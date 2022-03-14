import { ActionType, createAction } from 'typesafe-actions'
import { ModalContents } from '../reducers/modals'

export const setModalConfirm = createAction('SET_MODAL_CONFIRM')<ModalContents | null>()
export type ModalActionType = ActionType<typeof setModalConfirm>
