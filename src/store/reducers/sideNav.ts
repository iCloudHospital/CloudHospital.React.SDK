import { combineReducers } from 'redux'
import { Action, action, createReducer, Reducer } from 'typesafe-actions'
import { setIsShirink, setOpenedMenu, SideNavActionTypes } from '../actions/sideNav'

export const isShrink = createReducer<boolean, SideNavActionTypes>(false).handleAction(
  [setIsShirink],
  (state, action) => action.payload
)

export const selectedMenu = createReducer<string, SideNavActionTypes>('').handleAction(
  [setOpenedMenu],
  (state, action) => action.payload
)

const sideMenuState = combineReducers({
  isShrink,
  selectedMenu
})

export default sideMenuState
export type SideMenuState = ReturnType<typeof sideMenuState>
