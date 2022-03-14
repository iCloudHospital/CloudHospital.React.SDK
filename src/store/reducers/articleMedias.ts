import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendArticleMediasAsync,
  ArticleMediasActionTypes,
  loadArticleMediaAsync,
  loadArticleMediasAsync,
  resetArticleMediasState,
  resetArticleMediaState
} from '../actions/articleMedias'

// #region ArticleMedias
export const isLoadingArticleMedias = createReducer<boolean, ArticleMediasActionTypes>(false as boolean)
  .handleAction(
    [
      resetArticleMediasState,
      loadArticleMediasAsync.success,
      loadArticleMediasAsync.failure,
      appendArticleMediasAsync.success,
      appendArticleMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadArticleMediasAsync.request, appendArticleMediasAsync.request], (state, action) => true)

export const loadArticleMediasErrors = createReducer<RestException | null, ArticleMediasActionTypes>(null)
  .handleAction(
    [
      resetArticleMediasState,
      loadArticleMediasAsync.request,
      loadArticleMediasAsync.success,
      appendArticleMediasAsync.request,
      appendArticleMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadArticleMediasAsync.failure, appendArticleMediasAsync.failure], (state, action) => action.payload)

export const articleMedias = createReducer<MediasModel | null, ArticleMediasActionTypes>(null)
  .handleAction([resetArticleMediasState, loadArticleMediasAsync.failure], (state, action) => null)
  .handleAction([loadArticleMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendArticleMediasAsync.success], (state, action) => {
    const hospitalMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    hospitalMediasModel.items = newItems
    hospitalMediasModel.metaData = action.payload.metaData

    return hospitalMediasModel
  })

export const isLoadingArticleMedia = createReducer<boolean, ArticleMediasActionTypes>(false as boolean)
  .handleAction(
    [resetArticleMediaState, loadArticleMediaAsync.success, loadArticleMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadArticleMediaAsync.request], (state, action) => true)

export const loadArticleMediaErrors = createReducer<RestException | null, ArticleMediasActionTypes>(null)
  .handleAction(
    [resetArticleMediaState, loadArticleMediaAsync.request, loadArticleMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadArticleMediaAsync.failure], (state, action) => action.payload)

export const articleMedia = createReducer<MediaModel | null, ArticleMediasActionTypes>(null)
  .handleAction([resetArticleMediaState, loadArticleMediaAsync.failure], (state, action) => null)
  .handleAction([loadArticleMediaAsync.success], (state, action) => action.payload)
// #endregion ArticleMedias

const articleMediasState = combineReducers({
  isLoadingArticleMedias,
  loadArticleMediasErrors,
  articleMedias,

  isLoadingArticleMedia,
  loadArticleMediaErrors,
  articleMedia
})

export default articleMediasState
export type ArticleMediasState = ReturnType<typeof articleMediasState>
