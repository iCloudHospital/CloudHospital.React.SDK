import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { ServiceReviewsModel, ServiceReviewModel } from 'ch-api-client-typescript2/lib'

import {
  appendServiceReviewsPhotoAsync,
  deleteServiceReviewPhotoAsync,
  loadServiceReviewsPhotoAsync,
  loadServiceReviewPhotoAsync,
  postServiceReviewPhotoAsync,
  putServiceReviewPhotoAsync,
  resetServiceReviewsPhotoState,
  resetServiceReviewPhotoState,
  ServiceReviewsPhotoActionType
} from '../actions/serviceReviewsPhoto'

// #region ServiceReviews
export const isLoadingServiceReviewsPhoto = createReducer<boolean, ServiceReviewsPhotoActionType>(false as boolean)
  .handleAction(
    [
      resetServiceReviewsPhotoState,
      loadServiceReviewsPhotoAsync.success,
      loadServiceReviewsPhotoAsync.failure,
      appendServiceReviewsPhotoAsync.success,
      appendServiceReviewsPhotoAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadServiceReviewsPhotoAsync.request, appendServiceReviewsPhotoAsync.request], (state, action) => true)

export const loadServiceReviewsPhotoErrors = createReducer<RestException | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [
      resetServiceReviewsPhotoState,
      loadServiceReviewsPhotoAsync.request,
      loadServiceReviewsPhotoAsync.success,
      appendServiceReviewsPhotoAsync.request,
      appendServiceReviewsPhotoAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadServiceReviewsPhotoAsync.failure, loadServiceReviewsPhotoAsync.failure],
    (state, action) => action.payload
  )

export const serviceReviewsPhoto = createReducer<ServiceReviewsModel | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewsPhotoState, loadServiceReviewsPhotoAsync.failure, appendServiceReviewsPhotoAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewsPhotoAsync.success], (state, action) => action.payload)
  .handleAction([appendServiceReviewsPhotoAsync.success], (state, action) => {
    const serviceReviewsPhotoModel = {
      items: {},
      metaData: {}
    } as ServiceReviewsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    serviceReviewsPhotoModel.items = newItems
    serviceReviewsPhotoModel.metaData = action.payload.metaData

    return serviceReviewsPhotoModel
  })

export const isLoadingServiceReviewPhoto = createReducer<boolean, ServiceReviewsPhotoActionType>(false as boolean)
  .handleAction(
    [resetServiceReviewPhotoState, loadServiceReviewPhotoAsync.success, loadServiceReviewPhotoAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServiceReviewPhotoAsync.request], (state, action) => true)

export const loadServiceReviewPhotoErrors = createReducer<RestException | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewPhotoState, loadServiceReviewPhotoAsync.request, loadServiceReviewPhotoAsync.success],
    (state, action) => null
  )
  .handleAction([loadServiceReviewPhotoAsync.failure], (state, action) => action.payload)

export const serviceReviewPhoto = createReducer<ServiceReviewModel | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewPhotoState, loadServiceReviewPhotoAsync.request, loadServiceReviewPhotoAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewPhotoAsync.success], (state, action) => action.payload)

export const isUpdatingServiceReviewPhoto = createReducer<boolean, ServiceReviewsPhotoActionType>(false as boolean)
  .handleAction(
    [
      resetServiceReviewPhotoState,
      postServiceReviewPhotoAsync.success,
      postServiceReviewPhotoAsync.failure,
      putServiceReviewPhotoAsync.success,
      putServiceReviewPhotoAsync.failure,
      deleteServiceReviewPhotoAsync.success,
      deleteServiceReviewPhotoAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [postServiceReviewPhotoAsync.request, putServiceReviewPhotoAsync.request, deleteServiceReviewPhotoAsync.request],
    (state, action) => true
  )

export const postServiceReviewPhotoErrors = createReducer<RestException | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewPhotoState, postServiceReviewPhotoAsync.request, postServiceReviewPhotoAsync.success],
    (state, action) => null
  )
  .handleAction([postServiceReviewPhotoAsync.failure], (state, action) => action.payload)

export const postServiceReviewPhotoSuccess = createReducer<ServiceReviewModel | null, ServiceReviewsPhotoActionType>(
  null
)
  .handleAction(
    [resetServiceReviewPhotoState, postServiceReviewPhotoAsync.request, postServiceReviewPhotoAsync.failure],
    (state, action) => null
  )
  .handleAction([postServiceReviewPhotoAsync.success], (state, action) => action.payload)

export const putServiceReviewPhotoErrors = createReducer<RestException | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewPhotoState, putServiceReviewPhotoAsync.request, putServiceReviewPhotoAsync.success],
    (state, action) => null
  )
  .handleAction([putServiceReviewPhotoAsync.failure], (state, action) => action.payload)

export const putServiceReviewPhotoSuccess = createReducer<ServiceReviewModel | null, ServiceReviewsPhotoActionType>(
  null
)
  .handleAction(
    [resetServiceReviewPhotoState, putServiceReviewPhotoAsync.request, putServiceReviewPhotoAsync.failure],
    (state, action) => null
  )
  .handleAction([putServiceReviewPhotoAsync.success], (state, action) => action.payload)

export const deleteServiceReviewPhotoErrors = createReducer<RestException | null, ServiceReviewsPhotoActionType>(null)
  .handleAction(
    [resetServiceReviewPhotoState, deleteServiceReviewPhotoAsync.request, deleteServiceReviewPhotoAsync.success],
    (state, action) => null
  )
  .handleAction([deleteServiceReviewPhotoAsync.failure], (state, action) => action.payload)

export const deleteServiceReviewPhotoSuccess = createReducer<boolean, ServiceReviewsPhotoActionType>(false as boolean)
  .handleAction(
    [resetServiceReviewPhotoState, deleteServiceReviewPhotoAsync.request, deleteServiceReviewPhotoAsync.failure],
    (state, action) => false
  )
  .handleAction([deleteServiceReviewPhotoAsync.success], (state, action) => true)
// #endregion ServiceReviews

const serviceReviewsPhotoState = combineReducers({
  isLoadingServiceReviewPhoto,
  isLoadingServiceReviewsPhoto,
  serviceReviewPhoto,
  serviceReviewsPhoto,
  loadServiceReviewPhotoErrors,
  loadServiceReviewsPhotoErrors,
  isUpdatingServiceReviewPhoto,
  putServiceReviewPhotoErrors,
  postServiceReviewPhotoErrors,
  deleteServiceReviewPhotoErrors,
  putServiceReviewPhotoSuccess,
  postServiceReviewPhotoSuccess,
  deleteServiceReviewPhotoSuccess
})

export default serviceReviewsPhotoState
export type ServiceReviewsPhotoState = ReturnType<typeof serviceReviewsPhotoState>
