import { Console } from 'console'
import { ReactNode } from 'react'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { PopupsActionType, setCustomPopup, setCustomPopupIsOpen } from '../actions/popups'

export type CustomPopupChildren = ReactNode
export const custopmPopup = createReducer<CustomPopupChildren | null, PopupsActionType>(null).handleAction(
  [setCustomPopup],
  (state, action) => action.payload
)
export const custopmPopupIsOpen = createReducer<Boolean, PopupsActionType>(false).handleAction(
  [setCustomPopupIsOpen],
  (state, action) => {
    console.log(action.payload)
    return action.payload
  }
)

const custopmPopupState = combineReducers({
  custopmPopup,
  custopmPopupIsOpen
})

export type CustopmPopupState = ReturnType<typeof custopmPopupState>
export default custopmPopupState
