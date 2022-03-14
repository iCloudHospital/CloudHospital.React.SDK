import { FaqCategoriesModel, FaqCategoryModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { FaqCategoriesSearchOption, FaqCategorySearchOption } from '../../models/faqCategories'

export const loadFaqCategoriesAsync = createAsyncAction(
  'LOAD_FAQ_CATEGORIES_REQUEST',
  'LOAD_FAQ_CATEGORIES_SUCCESS',
  'LOAD_FAQ_CATEGORIES_FAILURE'
)<FaqCategoriesSearchOption, FaqCategoriesModel, RestException>()

export const loadFaqCategoryAsync = createAsyncAction(
  'LOAD_FAQ_CATEGORY_REQUEST',
  'LOAD_FAQ_CATEGORY_SUCCESS',
  'LOAD_FAQ_CATEGORY_FAILURE'
)<FaqCategorySearchOption, FaqCategoryModel, RestException>()

export const resetFaqCategoriesState = createAction('RESET_FAQ_CATEGORIES_STATE')<undefined>()

export const resetFaqCategoryState = createAction('RESET_FAQ_CATEGORY_STATE')<undefined>()

export type FaqCategoriesActionTypes =
  | ActionType<typeof loadFaqCategoriesAsync>
  | ActionType<typeof loadFaqCategoryAsync>
  | ActionType<typeof resetFaqCategoriesState>
  | ActionType<typeof resetFaqCategoryState>
