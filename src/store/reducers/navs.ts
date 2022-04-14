import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { NavigationItem } from '../../models'
import { loadNavs, NavsActionType, resetNavsState } from '../actions/navs'

export const navs = createReducer<NavigationItem[] | null, NavsActionType>(null)
  .handleAction([loadNavs], (state, action) => action.payload)
  .handleAction([resetNavsState], (state, action) => null)

const navsState = combineReducers({
  navs
})

export default navsState
export type NavsStae = ReturnType<typeof navsState>
