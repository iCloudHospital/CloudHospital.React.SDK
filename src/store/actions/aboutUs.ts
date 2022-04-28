import { AboutUsPagesModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models'
import { AboutUsSearchOption } from '../../models/aboutUs'

export const loadAboutUsAsync = createAsyncAction(
  'LOAD_ABOUT_US_REQUST',
  'LOAD_ABOUT_US_SUCCESS',
  'LOAD_ABOUT_US_FAILURE'
)<AboutUsSearchOption, AboutUsPagesModel, RestException>()

export type AboutUsActionTypes = ActionType<typeof loadAboutUsAsync>
