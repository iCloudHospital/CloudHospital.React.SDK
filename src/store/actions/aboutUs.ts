import { AboutUsPageModel, AboutUsPagesModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models'
import { AboutUsPageSearchOption, AboutUsPagesSearchOption } from '../../models/aboutUs'

export const loadAboutUsPagesAsync = createAsyncAction(
  'LOAD_ABOUT_US_PAGES_REQUST',
  'LOAD_ABOUT_US_PAGES_SUCCESS',
  'LOAD_ABOUT_US_PAGES_FAILURE'
)<AboutUsPagesSearchOption, AboutUsPagesModel, RestException>()

export const loadAboutUsPageAsync = createAsyncAction(
  'LOAD_ABOUT_US_PAGE_REQUST',
  'LOAD_ABOUT_US_PAGE_SUCCESS',
  'LOAD_ABOUT_US_PAGE_FAILURE'
)<AboutUsPageSearchOption, AboutUsPageModel, RestException>()

export const resetAboutUsPagesState = createAction('RESET_ABOUT_US_PAGES_STATE')<undefined>()
export const resetAboutUsPageState = createAction('RESET_ABOUT_US_PAGE_STATE')<undefined>()

export type AboutUsActionTypes =
  | ActionType<typeof loadAboutUsPagesAsync>
  | ActionType<typeof loadAboutUsPageAsync>
  | ActionType<typeof resetAboutUsPagesState>
  | ActionType<typeof resetAboutUsPageState>
