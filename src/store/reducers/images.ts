import { MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ImagesActionTypes, postImagesAsync, resetImageState } from '../actions/images'

export const isLoadingImage = createReducer<boolean, ImagesActionTypes>(false as boolean)
  .handleAction([resetImageState, postImagesAsync.success, postImagesAsync.failure], (state, action) => false)
  .handleAction([postImagesAsync.request], (state, action) => true)

export const postImagesErrors = createReducer<RestException | null, ImagesActionTypes>(null)
  .handleAction([resetImageState, postImagesAsync.request, postImagesAsync.success], (state, action) => null)
  .handleAction([postImagesAsync.failure], (state, action) => action.payload)

export const postImagesResult = createReducer<MediaModel[] | null, ImagesActionTypes>(null)
  .handleAction([resetImageState, postImagesAsync.request, postImagesAsync.failure], (state, action) => null)
  .handleAction([postImagesAsync.success], (state, action) => action.payload)

const imagesState = combineReducers({
  isLoadingImage,
  postImagesErrors,
  postImagesResult
})

export default imagesState
export type ImagesState = ReturnType<typeof imagesState>
