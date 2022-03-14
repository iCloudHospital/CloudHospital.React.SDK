import { ActionType, createAction } from 'typesafe-actions'

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV'
export const GROW_SIDE_NAV = 'GROW_SIDE_NAV'
export const SHRINK_SIDE_NAV = 'SHRINK_SIDE_NAV'
export const CURRENT_OPEND_MENU = 'CURRENT_OPEND_MENU'

export const setOpenedMenu = createAction('SET_OPENED_MENU')<string>()
export const setIsShirink = createAction('SET_IS_SHRINK')<boolean>()

export type SideNavActionTypes = ActionType<typeof setOpenedMenu> | ActionType<typeof setIsShirink>
