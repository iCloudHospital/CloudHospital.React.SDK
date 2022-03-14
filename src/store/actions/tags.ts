import { TagsModel, TagModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { TagsSearchOption } from '../../models/tags'

export const loadTagsAsync = createAsyncAction('LOAD_TAGS_REQUEST', 'LOAD_TAGS_SUCCESS', 'LOAD_TAGS_FAILURE')<
  TagsSearchOption,
  TagsModel,
  RestException
>()

export const appendTagsAsync = createAsyncAction('APPEND_TAGS_REQUEST', 'APPEND_TAGS_SUCCESS', 'APPEND_TAGS_FAILURE')<
  TagsSearchOption,
  TagsModel,
  RestException
>()

export const loadTagAsync = createAsyncAction('LOAD_TAG_REQUEST', 'LOAD_TAG_SUCCESS', 'LOAD_TAG_FAILURE')<
  string,
  TagModel,
  RestException
>()

export const resetTagsState = createAction('RESET_TAGS_STATE')<undefined>()

export const resetTagState = createAction('RESET_TAG_STATE')<undefined>()

export type TagsActionTypes =
  | ActionType<typeof loadTagsAsync>
  | ActionType<typeof appendTagsAsync>
  | ActionType<typeof loadTagAsync>
  | ActionType<typeof resetTagsState>
  | ActionType<typeof resetTagState>
