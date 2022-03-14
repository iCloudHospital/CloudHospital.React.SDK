import React, { ReactNode } from 'react'
import { combineReducers } from 'redux'
import { Action, action, createReducer, Reducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ModalActionType, setModalConfirm } from '../actions/modals'

export type ModalContents = {
  title?: string
  message: string | ReactNode
  nextButtonMessage?: string
  cancelButtonMessage?: string
  selectAgreeCallbackFunction?: Function
  selectCencleCallbackFunction?: Function
}

export const modalConfirmContents = createReducer<ModalContents | null, ModalActionType>(null).handleAction(
  [setModalConfirm],
  (state, action) => action.payload
)

const modalState = combineReducers({
  modalConfirmContents
})

export type ModalState = ReturnType<typeof modalState>
export default modalState
