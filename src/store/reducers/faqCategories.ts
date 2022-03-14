import { FaqCategoriesModel, FaqCategoryModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadFaqCategoriesAsync,
  loadFaqCategoryAsync,
  resetFaqCategoryState,
  resetFaqCategoriesState,
  FaqCategoriesActionTypes
} from '../actions/faqCategories'

export const isLoadingFaqCategories = createReducer<boolean, FaqCategoriesActionTypes>(false as boolean)
  .handleAction(
    [resetFaqCategoriesState, loadFaqCategoriesAsync.success, loadFaqCategoriesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadFaqCategoriesAsync.request], (state, action) => true)

export const loadFaqCategoriesErrors = createReducer<RestException | null, FaqCategoriesActionTypes>(null)
  .handleAction(
    [resetFaqCategoriesState, loadFaqCategoriesAsync.request, loadFaqCategoriesAsync.success],
    (state, action) => null
  )
  .handleAction([loadFaqCategoriesAsync.failure], (state, action) => action.payload)

export const faqCategories = createReducer<FaqCategoriesModel | null, FaqCategoriesActionTypes>(null)
  .handleAction([resetFaqCategoriesState, loadFaqCategoriesAsync.failure], (state, action) => null)
  .handleAction([loadFaqCategoriesAsync.success], (state, action) => action.payload)

export const isLoadingFaqCategory = createReducer<boolean, FaqCategoriesActionTypes>(false as boolean)
  .handleAction(
    [resetFaqCategoryState, loadFaqCategoryAsync.success, loadFaqCategoryAsync.failure],
    (state, action) => false
  )
  .handleAction([loadFaqCategoryAsync.request], (state, action) => true)

export const loadFaqCategoryErrors = createReducer<RestException | null, FaqCategoriesActionTypes>(null)
  .handleAction(
    [resetFaqCategoryState, loadFaqCategoryAsync.request, loadFaqCategoryAsync.success],
    (state, action) => null
  )
  .handleAction([loadFaqCategoryAsync.failure], (state, action) => action.payload)

export const faqCategory = createReducer<FaqCategoryModel | null, FaqCategoriesActionTypes>(null)
  .handleAction([resetFaqCategoryState, loadFaqCategoryAsync.failure], (state, action) => null)
  .handleAction([loadFaqCategoryAsync.success], (state, action) => action.payload)

const faqCategoriesState = combineReducers({
  isLoadingFaqCategories,
  loadFaqCategoriesErrors,
  faqCategories,

  isLoadingFaqCategory,
  loadFaqCategoryErrors,
  faqCategory
})

export default faqCategoriesState
export type FaqCategoriesState = ReturnType<typeof faqCategoriesState>
