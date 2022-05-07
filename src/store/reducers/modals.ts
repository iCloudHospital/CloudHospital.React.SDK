import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { ModalContents } from '../../models/modals'
import { showModal } from '../actions/modals'
import { ModalActionType, setModalConfirm } from '../actions/modals'

export const modalConfirmContents = createReducer<ModalContents | null, ModalActionType>(null).handleAction(
  [setModalConfirm],
  (state, action) => action.payload
)

export const isModalOpened = createReducer<boolean, ModalActionType>(false as boolean).handleAction([showModal], (state, action) => action.payload)

const modalState = combineReducers({
  modalConfirmContents,
  isModalOpened
})

export type ModalState = ReturnType<typeof modalState>
export default modalState
