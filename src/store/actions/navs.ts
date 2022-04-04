import { ActionType, createAction } from 'typesafe-actions'
import { NavigationItem } from '../../models'

export const loadNavs = createAction('LOAD_NAVS_SUCCESS')<NavigationItem>()

export type NavsActionType = ActionType<typeof loadNavs>
