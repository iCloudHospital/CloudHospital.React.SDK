import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { ServiceReviewsModel, ServiceReviewModel } from 'ch-api-client-typescript2/lib'

import {
  appendServiceReviewsRealStoryAsync,
  deleteServiceReviewRealStoryAsync,
  loadServiceReviewsRealStoryAsync,
  loadServiceReviewRealStoryAsync,
  postServiceReviewRealStoryAsync,
  putServiceReviewRealStoryAsync,
  resetServiceReviewsRealStoryState,
  resetServiceReviewRealStoryState,
  ServiceReviewsRealStoryActionType
} from '../actions/serviceReviewsRealStory'

// #region ServiceReviews
export const isLoadingServiceReviewsRealStory = createReducer<boolean, ServiceReviewsRealStoryActionType>(
  false as boolean
)
  .handleAction(
    [
      resetServiceReviewsRealStoryState,
      loadServiceReviewsRealStoryAsync.success,
      loadServiceReviewsRealStoryAsync.failure,
      appendServiceReviewsRealStoryAsync.success,
      appendServiceReviewsRealStoryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadServiceReviewsRealStoryAsync.request, appendServiceReviewsRealStoryAsync.request],
    (state, action) => true
  )

export const loadServiceReviewsRealStoryErrors = createReducer<RestException | null, ServiceReviewsRealStoryActionType>(
  null
)
  .handleAction(
    [
      resetServiceReviewsRealStoryState,
      loadServiceReviewsRealStoryAsync.request,
      loadServiceReviewsRealStoryAsync.success,
      appendServiceReviewsRealStoryAsync.request,
      appendServiceReviewsRealStoryAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadServiceReviewsRealStoryAsync.failure, loadServiceReviewsRealStoryAsync.failure],
    (state, action) => action.payload
  )

export const serviceReviewsRealStory = createReducer<ServiceReviewsModel | null, ServiceReviewsRealStoryActionType>(
  null
)
  .handleAction(
    [
      resetServiceReviewsRealStoryState,
      loadServiceReviewsRealStoryAsync.failure,
      appendServiceReviewsRealStoryAsync.failure
    ],
    (state, action) => null
  )
  .handleAction([loadServiceReviewsRealStoryAsync.success], (state, action) => action.payload)
  .handleAction([appendServiceReviewsRealStoryAsync.success], (state, action) => {
    const serviceReviewsRealStoryModel = {
      items: {},
      metaData: {}
    } as ServiceReviewsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    serviceReviewsRealStoryModel.items = newItems
    serviceReviewsRealStoryModel.metaData = action.payload.metaData

    return serviceReviewsRealStoryModel
  })

export const isLoadingServiceReviewRealStory = createReducer<boolean, ServiceReviewsRealStoryActionType>(
  false as boolean
)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      loadServiceReviewRealStoryAsync.success,
      loadServiceReviewRealStoryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadServiceReviewRealStoryAsync.request], (state, action) => true)

export const loadServiceReviewRealStoryErrors = createReducer<RestException | null, ServiceReviewsRealStoryActionType>(
  null
)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      loadServiceReviewRealStoryAsync.request,
      loadServiceReviewRealStoryAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadServiceReviewRealStoryAsync.failure], (state, action) => action.payload)

export const serviceReviewRealStory = createReducer<ServiceReviewModel | null, ServiceReviewsRealStoryActionType>(null)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      loadServiceReviewRealStoryAsync.request,
      loadServiceReviewRealStoryAsync.failure
    ],
    (state, action) => null
  )
  .handleAction([loadServiceReviewRealStoryAsync.success], (state, action) => action.payload)

export const isUpdatingServiceReviewRealStory = createReducer<boolean, ServiceReviewsRealStoryActionType>(
  false as boolean
)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      postServiceReviewRealStoryAsync.success,
      postServiceReviewRealStoryAsync.failure,
      putServiceReviewRealStoryAsync.success,
      putServiceReviewRealStoryAsync.failure,
      deleteServiceReviewRealStoryAsync.success,
      deleteServiceReviewRealStoryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [
      postServiceReviewRealStoryAsync.request,
      putServiceReviewRealStoryAsync.request,
      deleteServiceReviewRealStoryAsync.request
    ],
    (state, action) => true
  )

export const postServiceReviewRealStoryErrors = createReducer<RestException | null, ServiceReviewsRealStoryActionType>(
  null
)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      postServiceReviewRealStoryAsync.request,
      postServiceReviewRealStoryAsync.success
    ],
    (state, action) => null
  )
  .handleAction([postServiceReviewRealStoryAsync.failure], (state, action) => action.payload)

export const postServiceReviewRealStorySuccess = createReducer<
  ServiceReviewModel | null,
  ServiceReviewsRealStoryActionType
>(null)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      postServiceReviewRealStoryAsync.request,
      postServiceReviewRealStoryAsync.failure
    ],
    (state, action) => null
  )
  .handleAction([postServiceReviewRealStoryAsync.success], (state, action) => action.payload)

export const putServiceReviewRealStoryErrors = createReducer<RestException | null, ServiceReviewsRealStoryActionType>(
  null
)
  .handleAction(
    [resetServiceReviewRealStoryState, putServiceReviewRealStoryAsync.request, putServiceReviewRealStoryAsync.success],
    (state, action) => null
  )
  .handleAction([putServiceReviewRealStoryAsync.failure], (state, action) => action.payload)

export const putServiceReviewRealStorySuccess = createReducer<
  ServiceReviewModel | null,
  ServiceReviewsRealStoryActionType
>(null)
  .handleAction(
    [resetServiceReviewRealStoryState, putServiceReviewRealStoryAsync.request, putServiceReviewRealStoryAsync.failure],
    (state, action) => null
  )
  .handleAction([putServiceReviewRealStoryAsync.success], (state, action) => action.payload)

export const deleteServiceReviewRealStoryErrors = createReducer<
  RestException | null,
  ServiceReviewsRealStoryActionType
>(null)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      deleteServiceReviewRealStoryAsync.request,
      deleteServiceReviewRealStoryAsync.success
    ],
    (state, action) => null
  )
  .handleAction([deleteServiceReviewRealStoryAsync.failure], (state, action) => action.payload)

export const deleteServiceReviewRealStorySuccess = createReducer<boolean, ServiceReviewsRealStoryActionType>(
  false as boolean
)
  .handleAction(
    [
      resetServiceReviewRealStoryState,
      deleteServiceReviewRealStoryAsync.request,
      deleteServiceReviewRealStoryAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([deleteServiceReviewRealStoryAsync.success], (state, action) => true)
// #endregion ServiceReviews

const serviceReviewsRealStoryState = combineReducers({
  isLoadingServiceReviewRealStory,
  isLoadingServiceReviewsRealStory,
  serviceReviewRealStory,
  serviceReviewsRealStory,
  loadServiceReviewRealStoryErrors,
  loadServiceReviewsRealStoryErrors,
  isUpdatingServiceReviewRealStory,
  putServiceReviewRealStoryErrors,
  postServiceReviewRealStoryErrors,
  deleteServiceReviewRealStoryErrors,
  putServiceReviewRealStorySuccess,
  postServiceReviewRealStorySuccess,
  deleteServiceReviewRealStorySuccess
})

export default serviceReviewsRealStoryState
export type ServiceReviewsRealStoryState = ReturnType<typeof serviceReviewsRealStoryState>
