import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { ServiceReviewsModel, ServiceReviewModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'

import {
  ServiceReviewsActionTypes,
  loadServiceReviewsAsync,
  appendServiceReviewsAsync,
  loadServiceReviewAsync,
  postServiceReviewAsync,
  putServiceReviewAsync,
  deleteServiceReviewAsync,
  resetServiceReviewsState,
  resetServiceReviewState,
  loadServiceReviewMediasAsync,
  appendServiceReviewMediasAsync,
  loadServiceReviewMediaAsync,
  postServiceReviewMediaAsync,
  putServiceReviewMediaAsync,
  deleteServiceReviewMediaAsync,
  resetServiceReviewMediasState,
  resetServiceReviewMediaState
} from '../actions/serviceReviews'

// #region ServiceReviews
export const isLoadingServiceReviews = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [
      resetServiceReviewsState,
      loadServiceReviewsAsync.success,
      loadServiceReviewsAsync.failure,
      appendServiceReviewsAsync.success,
      appendServiceReviewsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadServiceReviewsAsync.request, appendServiceReviewsAsync.request], (state, action) => true)

export const loadServiceReviewsErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [
      resetServiceReviewsState,
      loadServiceReviewsAsync.request,
      loadServiceReviewsAsync.success,
      appendServiceReviewsAsync.request,
      appendServiceReviewsAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadServiceReviewsAsync.failure, appendServiceReviewsAsync.failure], (state, action) => action.payload)

export const serviceReviews = createReducer<ServiceReviewsModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewsState, loadServiceReviewsAsync.failure, appendServiceReviewsAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewsAsync.success], (state, action) => action.payload)
  .handleAction([appendServiceReviewsAsync.success], (state, action) => {
    const serviceReviewsModel = {
      items: {},
      metaData: {}
    } as ServiceReviewsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    serviceReviewsModel.items = newItems
    serviceReviewsModel.metaData = action.payload.metaData

    return serviceReviewsModel
  })

export const isLoadingServiceReview = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [resetServiceReviewState, loadServiceReviewAsync.success, loadServiceReviewAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServiceReviewAsync.request], (state, action) => true)

export const loadServiceReviewErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, loadServiceReviewAsync.request, loadServiceReviewAsync.success],
    (state, action) => null
  )
  .handleAction([loadServiceReviewAsync.failure], (state, action) => action.payload)

export const serviceReview = createReducer<ServiceReviewModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, loadServiceReviewAsync.request, loadServiceReviewAsync.failure],
    (state, action) => null
  )
  .handleAction([loadServiceReviewAsync.success], (state, action) => action.payload)

export const isUpdatingServiceReview = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [
      resetServiceReviewState,
      postServiceReviewAsync.success,
      postServiceReviewAsync.failure,
      putServiceReviewAsync.success,
      putServiceReviewAsync.failure,
      deleteServiceReviewAsync.success,
      deleteServiceReviewAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [postServiceReviewAsync.request, putServiceReviewAsync.request, deleteServiceReviewAsync.request],
    (state, action) => true
  )

export const postServiceReviewErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, postServiceReviewAsync.request, postServiceReviewAsync.success],
    (state, action) => null
  )
  .handleAction([postServiceReviewAsync.failure], (state, action) => action.payload)

export const postServiceReviewSuccess = createReducer<ServiceReviewModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, postServiceReviewAsync.request, postServiceReviewAsync.failure],
    (state, action) => null
  )
  .handleAction([postServiceReviewAsync.success], (state, action) => action.payload)

export const putServiceReviewErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, putServiceReviewAsync.request, putServiceReviewAsync.success],
    (state, action) => null
  )
  .handleAction([putServiceReviewAsync.failure], (state, action) => action.payload)

export const putServiceReviewSuccess = createReducer<ServiceReviewModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, putServiceReviewAsync.request, putServiceReviewAsync.failure],
    (state, action) => null
  )
  .handleAction([putServiceReviewAsync.success], (state, action) => action.payload)

export const deleteServiceReviewErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewState, deleteServiceReviewAsync.request, deleteServiceReviewAsync.success],
    (state, action) => null
  )
  .handleAction([deleteServiceReviewAsync.failure], (state, action) => action.payload)

export const deleteServiceReviewSuccess = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [resetServiceReviewState, deleteServiceReviewAsync.request, deleteServiceReviewAsync.failure],
    (state, action) => false
  )
  .handleAction([deleteServiceReviewAsync.success], (state, action) => true)
// #endregion ServiceReviews

// #region ServiceReviewMedias
export const isLoadingServiceReviewMedias = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [
      resetServiceReviewMediasState,
      loadServiceReviewMediasAsync.success,
      loadServiceReviewMediasAsync.failure,
      appendServiceReviewMediasAsync.success,
      appendServiceReviewMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadServiceReviewMediasAsync.request, appendServiceReviewMediasAsync.request], (state, action) => true)

export const loadServiceReviewMediasErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [
      resetServiceReviewMediasState,
      loadServiceReviewMediasAsync.request,
      loadServiceReviewMediasAsync.success,
      appendServiceReviewMediasAsync.request,
      appendServiceReviewMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadServiceReviewMediasAsync.failure, appendServiceReviewMediasAsync.failure],
    (state, action) => action.payload
  )

export const serviceReviewMedias = createReducer<MediasModel | null, ServiceReviewsActionTypes>(null)
  .handleAction([resetServiceReviewMediasState, loadServiceReviewMediasAsync.failure], (state, action) => null)
  .handleAction([loadServiceReviewMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendServiceReviewMediasAsync.success], (state, action) => {
    const serviceReviewMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    serviceReviewMediasModel.items = newItems
    serviceReviewMediasModel.metaData = action.payload.metaData

    return serviceReviewMediasModel
  })

export const isLoadingServiceReviewMedia = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [resetServiceReviewMediaState, loadServiceReviewMediaAsync.success, loadServiceReviewMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadServiceReviewMediaAsync.request], (state, action) => true)

export const loadServiceReviewMediaErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewMediaState, loadServiceReviewMediaAsync.request, loadServiceReviewMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadServiceReviewMediaAsync.failure], (state, action) => action.payload)

export const serviceReviewMedia = createReducer<MediaModel | null, ServiceReviewsActionTypes>(null)
  .handleAction([resetServiceReviewMediaState, loadServiceReviewMediaAsync.failure], (state, action) => null)
  .handleAction([loadServiceReviewMediaAsync.success], (state, action) => action.payload)

export const isUpdatingServiceReviewMedia = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [
      resetServiceReviewMediaState,
      postServiceReviewMediaAsync.success,
      postServiceReviewMediaAsync.failure,
      putServiceReviewMediaAsync.success,
      putServiceReviewMediaAsync.failure,
      deleteServiceReviewMediaAsync.success,
      deleteServiceReviewMediaAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [postServiceReviewMediaAsync.request, putServiceReviewMediaAsync.request, deleteServiceReviewMediaAsync.request],
    (state, action) => true
  )

export const postServiceReviewMediaErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewMediaState, postServiceReviewMediaAsync.request, postServiceReviewMediaAsync.success],
    (state, action) => null
  )
  .handleAction([postServiceReviewMediaAsync.failure], (state, action) => action.payload)

export const postServiceReviewMediaResult = createReducer<MediaModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewMediaState, postServiceReviewMediaAsync.request, postServiceReviewMediaAsync.failure],
    (state, action) => null
  )
  .handleAction([postServiceReviewMediaAsync.success], (state, action) => action.payload)

export const putServiceReviewMediaErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewMediaState, putServiceReviewMediaAsync.request, putServiceReviewMediaAsync.success],
    (state, action) => null
  )
  .handleAction([putServiceReviewMediaAsync.failure], (state, action) => action.payload)

export const putServiceReviewMediaSuccess = createReducer<MediaModel | null, ServiceReviewsActionTypes>(null)
  .handleAction(
    [resetServiceReviewMediaState, putServiceReviewMediaAsync.request, putServiceReviewMediaAsync.failure],
    (state, action) => null
  )
  .handleAction([putServiceReviewMediaAsync.success], (state, action) => action.payload)

export const deleteServiceReviewMediaErrors = createReducer<RestException | null, ServiceReviewsActionTypes>(null)
  .handleAction([deleteServiceReviewMediaAsync.request, deleteServiceReviewMediaAsync.success], (state, action) => null)
  .handleAction([deleteServiceReviewMediaAsync.failure], (state, action) => action.payload)

export const deleteServiceReviewMediaSuccess = createReducer<boolean, ServiceReviewsActionTypes>(false as boolean)
  .handleAction(
    [deleteServiceReviewMediaAsync.request, deleteServiceReviewMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([deleteServiceReviewMediaAsync.success], (state, action) => action.payload)
// #endregion ServiceReviewMedias

const serviceReviewsState = combineReducers({
  isLoadingServiceReviews,
  loadServiceReviewsErrors,
  serviceReviews,

  isLoadingServiceReview,
  loadServiceReviewErrors,
  serviceReview,

  isUpdatingServiceReview,
  postServiceReviewErrors,
  postServiceReviewSuccess,
  putServiceReviewErrors,
  putServiceReviewSuccess,
  deleteServiceReviewErrors,
  deleteServiceReviewSuccess,

  isLoadingServiceReviewMedias,
  loadServiceReviewMediasErrors,
  serviceReviewMedias,

  isLoadingServiceReviewMedia,
  loadServiceReviewMediaErrors,
  serviceReviewMedia,

  isUpdatingServiceReviewMedia,
  postServiceReviewMediaErrors,
  postServiceReviewMediaResult,
  putServiceReviewMediaErrors,
  putServiceReviewMediaSuccess,
  deleteServiceReviewMediaErrors,
  deleteServiceReviewMediaSuccess
})

export default serviceReviewsState
export type ServiceReviewsState = ReturnType<typeof serviceReviewsState>
