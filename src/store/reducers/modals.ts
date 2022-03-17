import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { ModalContents } from '../../models/modals'
import { ModalActionType, setModalConfirm } from '../actions/modals'

export const modalConfirmContents = createReducer<ModalContents | null, ModalActionType>(null).handleAction(
  [setModalConfirm],
  (state, action) => action.payload
)

const modalState = combineReducers({
  modalConfirmContents
})

export type ModalState = ReturnType<typeof modalState>
export default modalState
