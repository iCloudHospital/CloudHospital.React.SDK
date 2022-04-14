import { ActionType, createAction } from 'typesafe-actions'
import { NavigationItem } from '../../models'

export const loadNavs = createAction('LOAD_NAVS_SUCCESS')<NavigationItem[]>()

export const resetNavsState = createAction('RESET_NAVS_STATE')<undefined>()

export type NavsActionType = ActionType<typeof loadNavs> | ActionType<typeof resetNavsState>
