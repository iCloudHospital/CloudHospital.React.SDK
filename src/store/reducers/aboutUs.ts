import { AboutUsPageModel, AboutUsPagesModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models'
import {
  AboutUsActionTypes,
  loadAboutUsPageAsync,
  loadAboutUsPagesAsync,
  resetAboutUsPagesState,
  resetAboutUsPageState
} from '../actions/aboutUs'

export const isLoadingAboutUsPages = createReducer<boolean, AboutUsActionTypes>(false as boolean)
  .handleAction(
    [resetAboutUsPagesState, loadAboutUsPagesAsync.success, loadAboutUsPagesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadAboutUsPagesAsync.request], (state, action) => true)

export const loadAboutUsPagesError = createReducer<RestException | null, AboutUsActionTypes>(null)
  .handleAction([loadAboutUsPagesAsync.failure], (state, action) => action.payload)
  .handleAction(
    [loadAboutUsPagesAsync.request, loadAboutUsPagesAsync.success, resetAboutUsPagesState],
    (state, action) => null
  )

export const aboutUsPages = createReducer<AboutUsPagesModel | null, AboutUsActionTypes>(null)
  .handleAction([loadAboutUsPagesAsync.success], (state, action) => action.payload)
  .handleAction([resetAboutUsPagesState], (state, action) => null)

export const isLoadingAboutUsPage = createReducer<boolean | null, AboutUsActionTypes>(false as boolean)
  .handleAction([loadAboutUsPageAsync.request], (state, action) => true)
  .handleAction(
    [loadAboutUsPageAsync.failure, loadAboutUsPageAsync.success, resetAboutUsPageState],
    (state, action) => null
  )

export const loadAboutUsPageError = createReducer<RestException | null, AboutUsActionTypes>(null)
  .handleAction([loadAboutUsPageAsync.failure], (state, action) => action.payload)
  .handleAction(
    [loadAboutUsPageAsync.request, loadAboutUsPageAsync.success, resetAboutUsPageState],
    (state, action) => null
  )

export const aboutUsPage = createReducer<AboutUsPageModel | null, AboutUsActionTypes>(null)
  .handleAction([loadAboutUsPageAsync.success], (state, action) => action.payload)
  .handleAction([resetAboutUsPageState], (state, action) => null)

const aboutUsState = combineReducers({
  isLoadingAboutUsPages,
  loadAboutUsPagesError,
  aboutUsPages,

  isLoadingAboutUsPage,
  loadAboutUsPageError,
  aboutUsPage
})

export default aboutUsState
export type AboutUsState = ReturnType<typeof aboutUsState>
