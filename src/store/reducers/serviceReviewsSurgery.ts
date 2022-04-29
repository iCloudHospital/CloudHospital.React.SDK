import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { ServiceReviewsModel, ServiceReviewModel } from 'ch-api-client-typescript2/lib'

import {
  appendServiceReviewsSurgeryAsync,
  deleteServiceReviewSurgeryAsync,
  loadServiceReviewsSurgeryAsync,
  loadServiceReviewSurgeryAsync,
  postServiceReviewSurgeryAsync,
  putServiceReviewSurgeryAsync,
  resetServiceReviewsSurgeryState,
  resetServiceReviewSurgeryState,
  ServiceReviewsSurgeryActionType
} from '../actions/serviceReviewsSurgery'

// #region ServiceReviews
export const isLoadingServiceReviewsSurgery = createReducer<boolean, ServiceReviewsSurgeryActionType>(false as boolean)
  .handleAction(
    [
      resetServiceReviewsSurgeryState,
      loadServiceReviewsSurgeryAsync.success,
      loadServiceReviewsSurgeryAsync.failure,
      appendServiceReviewsSurgeryAsync.success,
      appendServiceReviewsSurgeryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadServiceReviewsSurgeryAsync.request, appendServiceReviewsSurgeryAsync.request],
    (state, action) => true
  )

export const loadServiceReviewsSurgeryErrors = createReducer<RestException | null, ServiceReviewsSurgeryActionType>(
  null
)
  .handleAction(
    [
      resetServiceReviewsSurgeryState,
      loadServiceReviewsSurgeryAsync.request,
      loadServiceReviewsSurgeryAsync.success,
      appendServiceReviewsSurgeryAsync.request,
      appendServiceReviewsSurgeryAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadServiceReviewsSurgeryAsync.failure, loadServiceReviewsSurgeryAsync.failure],
    (state, action) => action.payload
  )

export const serviceReviewsSurgery = createReducer<ServiceReviewsModel | null, ServiceReviewsSurgeryActionType>(null)
  .handleAction(
    [resetServiceReviewsSurgeryState, loadServiceReviewsSurgeryAsync.failure, appendServiceReviewsSurgeryAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewsSurgeryAsync.success], (state, action) => action.payload)
  .handleAction([appendServiceReviewsSurgeryAsync.success], (state, action) => {
    const serviceReviewsSurgeryModel = {
      items: {},
      metaData: {}
    } as ServiceReviewsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    serviceReviewsSurgeryModel.items = newItems
    serviceReviewsSurgeryModel.metaData = action.payload.metaData

    return serviceReviewsSurgeryModel
  })

export const isLoadingServiceReviewSurgery = createReducer<boolean, ServiceReviewsSurgeryActionType>(false as boolean)
  .handleAction(
    [resetServiceReviewSurgeryState, loadServiceReviewSurgeryAsync.success, loadServiceReviewSurgeryAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServiceReviewSurgeryAsync.request], (state, action) => true)

export const loadServiceReviewSurgeryErrors = createReducer<RestException | null, ServiceReviewsSurgeryActionType>(null)
  .handleAction(
    [resetServiceReviewSurgeryState, loadServiceReviewSurgeryAsync.request, loadServiceReviewSurgeryAsync.success],
    (state, action) => null
  )
  .handleAction([loadServiceReviewSurgeryAsync.failure], (state, action) => action.payload)

export const serviceReviewSurgery = createReducer<ServiceReviewModel | null, ServiceReviewsSurgeryActionType>(null)
  .handleAction(
    [resetServiceReviewSurgeryState, loadServiceReviewSurgeryAsync.request, loadServiceReviewSurgeryAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewSurgeryAsync.success], (state, action) => action.payload)

export const isUpdatingServiceReviewSurgery = createReducer<boolean, ServiceReviewsSurgeryActionType>(false as boolean)
  .handleAction(
    [
      resetServiceReviewSurgeryState,
      postServiceReviewSurgeryAsync.success,
      postServiceReviewSurgeryAsync.failure,
      putServiceReviewSurgeryAsync.success,
      putServiceReviewSurgeryAsync.failure,
      deleteServiceReviewSurgeryAsync.success,
      deleteServiceReviewSurgeryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [
      postServiceReviewSurgeryAsync.request,
      putServiceReviewSurgeryAsync.request,
      deleteServiceReviewSurgeryAsync.request
    ],
    (state, action) => true
  )

export const postServiceReviewSurgeryErrors = createReducer<RestException | null, ServiceReviewsSurgeryActionType>(null)
  .handleAction(
    [resetServiceReviewSurgeryState, postServiceReviewSurgeryAsync.request, postServiceReviewSurgeryAsync.success],
    (state, action) => null
  )
  .handleAction([postServiceReviewSurgeryAsync.failure], (state, action) => action.payload)

export const postServiceReviewSurgerySuccess = createReducer<
  ServiceReviewModel | null,
  ServiceReviewsSurgeryActionType
>(null)
  .handleAction(
    [resetServiceReviewSurgeryState, postServiceReviewSurgeryAsync.request, postServiceReviewSurgeryAsync.failure],
    (state, action) => null
  )
  .handleAction([postServiceReviewSurgeryAsync.success], (state, action) => action.payload)

export const putServiceReviewSurgeryErrors = createReducer<RestException | null, ServiceReviewsSurgeryActionType>(null)
  .handleAction(
    [resetServiceReviewSurgeryState, putServiceReviewSurgeryAsync.request, putServiceReviewSurgeryAsync.success],
    (state, action) => null
  )
  .handleAction([putServiceReviewSurgeryAsync.failure], (state, action) => action.payload)

export const putServiceReviewSurgerySuccess = createReducer<ServiceReviewModel | null, ServiceReviewsSurgeryActionType>(
  null
)
  .handleAction(
    [resetServiceReviewSurgeryState, putServiceReviewSurgeryAsync.request, putServiceReviewSurgeryAsync.failure],
    (state, action) => null
  )
  .handleAction([putServiceReviewSurgeryAsync.success], (state, action) => action.payload)

export const deleteServiceReviewSurgeryErrors = createReducer<RestException | null, ServiceReviewsSurgeryActionType>(
  null
)
  .handleAction(
    [resetServiceReviewSurgeryState, deleteServiceReviewSurgeryAsync.request, deleteServiceReviewSurgeryAsync.success],
    (state, action) => null
  )
  .handleAction([deleteServiceReviewSurgeryAsync.failure], (state, action) => action.payload)

export const deleteServiceReviewSurgerySuccess = createReducer<boolean, ServiceReviewsSurgeryActionType>(
  false as boolean
)
  .handleAction(
    [resetServiceReviewSurgeryState, deleteServiceReviewSurgeryAsync.request, deleteServiceReviewSurgeryAsync.failure],
    (state, action) => false
  )
  .handleAction([deleteServiceReviewSurgeryAsync.success], (state, action) => true)
// #endregion ServiceReviews

const serviceReviewsSurgeryState = combineReducers({
  isLoadingServiceReviewSurgery,
  isLoadingServiceReviewsSurgery,
  serviceReviewSurgery,
  serviceReviewsSurgery,
  loadServiceReviewSurgeryErrors,
  loadServiceReviewsSurgeryErrors,
  isUpdatingServiceReviewSurgery,
  putServiceReviewSurgeryErrors,
  postServiceReviewSurgeryErrors,
  deleteServiceReviewSurgeryErrors,
  putServiceReviewSurgerySuccess,
  postServiceReviewSurgerySuccess,
  deleteServiceReviewSurgerySuccess
})

export default serviceReviewsSurgeryState
export type ServiceReviewsSurgeryState = ReturnType<typeof serviceReviewsSurgeryState>
