import { ServiceCategoriesModel, ServiceCategoryModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ServicesCategoriesSearchOption, ServicesCategorySearchOption } from '../../models/servicesCategories'

export const loadServicesCategoriesAsync = createAsyncAction(
  'LOAD_SERVICES_CATEGORIES_REQUEST',
  'LOAD_SERVICES_CATEGORIES_SUCCESS',
  'LOAD_SERVICES_CATEGORIES_FAILURE'
)<ServicesCategoriesSearchOption, ServiceCategoriesModel, RestException>()

export const loadServicesCategoryAsync = createAsyncAction(
  'LOAD_SERVICES_CATEGORY_REQUEST',
  'LOAD_SERVICES_CATEGORY_SUCCESS',
  'LOAD_SERVICES_CATEGORY_FAILURE'
)<ServicesCategorySearchOption, ServiceCategoryModel, RestException>()

export const resetServicesCategoriesState = createAction('RESET_SERVICES_CATEGORIES_STATE')<undefined>()

export const resetServicesCategoryState = createAction('RESET_SERVICES_CATEGORY_STATE')<undefined>()

export type ServicesCategoriesActionTypes =
  | ActionType<typeof loadServicesCategoriesAsync>
  | ActionType<typeof loadServicesCategoryAsync>
  | ActionType<typeof resetServicesCategoriesState>
  | ActionType<typeof resetServicesCategoryState>
