import { TagsModel, TagModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendTagsAsync,
  loadTagAsync,
  loadTagsAsync,
  resetTagsState,
  resetTagState,
  TagsActionTypes
} from '../actions/tags'

export const isLoadingTags = createReducer<boolean, TagsActionTypes>(false as boolean)
  .handleAction(
    [resetTagsState, loadTagsAsync.success, loadTagsAsync.failure, appendTagsAsync.success, appendTagsAsync.failure],
    (state, action) => false
  )
  .handleAction([loadTagsAsync.request, appendTagsAsync.request], (state, action) => true)

export const loadTagsErrors = createReducer<RestException | null, TagsActionTypes>(null)
  .handleAction(
    [resetTagsState, loadTagsAsync.request, loadTagsAsync.success, appendTagsAsync.request, appendTagsAsync.success],
    (state, action) => null
  )
  .handleAction([loadTagsAsync.failure, appendTagsAsync.failure], (state, action) => action.payload)

export const tags = createReducer<TagsModel | null, TagsActionTypes>(null)
  .handleAction([resetTagsState, loadTagsAsync.failure, appendTagsAsync.failure], (state, action) => null)
  .handleAction([loadTagsAsync.success, appendTagsAsync.success], (state, action) => action.payload)

export const isLoadingTag = createReducer<boolean, TagsActionTypes>(false as boolean)
  .handleAction([resetTagState, loadTagAsync.success, loadTagAsync.failure], (state, action) => false)
  .handleAction([loadTagAsync.request], (state, action) => true)

export const loadTagErrors = createReducer<RestException | null, TagsActionTypes>(null)
  .handleAction([resetTagState, loadTagAsync.request, loadTagAsync.success], (state, action) => null)
  .handleAction([loadTagAsync.failure], (state, action) => action.payload)

export const tag = createReducer<TagModel | null, TagsActionTypes>(null)
  .handleAction([resetTagState, loadTagAsync.request, loadTagAsync.failure], (state, action) => null)
  .handleAction([loadTagAsync.success], (state, action) => action.payload)

const tagsState = combineReducers({
  isLoadingTags,
  loadTagsErrors,
  tags,
  isLoadingTag,
  loadTagErrors,
  tag
})

export type TagsState = ReturnType<typeof tagsState>

export default tagsState
