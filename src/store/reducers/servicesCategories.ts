import { ServiceCategoriesModel, ServiceCategoryModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadServicesCategoriesAsync,
  loadServicesCategoryAsync,
  resetServicesCategoryState,
  resetServicesCategoriesState,
  ServicesCategoriesActionTypes
} from '../actions/servicesCategories'

export const isLoadingServicesCategories = createReducer<boolean, ServicesCategoriesActionTypes>(false as boolean)
  .handleAction(
    [resetServicesCategoriesState, loadServicesCategoriesAsync.success, loadServicesCategoriesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServicesCategoriesAsync.request], (state, action) => true)

export const loadServicesCategoriesErrors = createReducer<RestException | null, ServicesCategoriesActionTypes>(null)
  .handleAction(
    [resetServicesCategoriesState, loadServicesCategoriesAsync.request, loadServicesCategoriesAsync.success],
    (state, action) => null
  )
  .handleAction([loadServicesCategoriesAsync.failure], (state, action) => action.payload)

export const servicesCategories = createReducer<ServiceCategoriesModel | null, ServicesCategoriesActionTypes>(null)
  .handleAction([resetServicesCategoriesState, loadServicesCategoriesAsync.failure], (state, action) => null)
  .handleAction([loadServicesCategoriesAsync.success], (state, action) => action.payload)

export const isLoadingServicesCategory = createReducer<boolean, ServicesCategoriesActionTypes>(false as boolean)
  .handleAction(
    [resetServicesCategoryState, loadServicesCategoryAsync.success, loadServicesCategoryAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServicesCategoryAsync.request], (state, action) => true)

export const loadServicesCategoryErrors = createReducer<RestException | null, ServicesCategoriesActionTypes>(null)
  .handleAction(
    [resetServicesCategoryState, loadServicesCategoryAsync.request, loadServicesCategoryAsync.success],
    (state, action) => null
  )
  .handleAction([loadServicesCategoryAsync.failure], (state, action) => action.payload)

export const servicesCategory = createReducer<ServiceCategoryModel | null, ServicesCategoriesActionTypes>(null)
  .handleAction([resetServicesCategoryState, loadServicesCategoryAsync.failure], (state, action) => null)
  .handleAction([loadServicesCategoryAsync.success], (state, action) => action.payload)

const servicesCategoriesState = combineReducers({
  isLoadingServicesCategories,
  loadServicesCategoriesErrors,
  servicesCategories,

  isLoadingServicesCategory,
  loadServicesCategoryErrors,
  servicesCategory
})

export default servicesCategoriesState
export type ServicesCategoriesState = ReturnType<typeof servicesCategoriesState>
