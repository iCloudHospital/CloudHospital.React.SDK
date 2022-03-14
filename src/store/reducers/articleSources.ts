import { ArticleSourcesModel, SourceModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendArticleSourcesAsync,
  ArticleSourcesActionTypes,
  loadArticleSourcesAsync,
  resetArticleSourcesState,
  resetArticleSourceState
} from '../actions/articleSources'

// #region ArticleSources
export const isLoadingArticleSources = createReducer<boolean, ArticleSourcesActionTypes>(false as boolean)
  .handleAction(
    [
      resetArticleSourcesState,
      loadArticleSourcesAsync.success,
      loadArticleSourcesAsync.failure,
      appendArticleSourcesAsync.success,
      appendArticleSourcesAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadArticleSourcesAsync.request, appendArticleSourcesAsync.request], (state, action) => true)

export const loadArticleSourcesErrors = createReducer<RestException | null, ArticleSourcesActionTypes>(null)
  .handleAction(
    [
      resetArticleSourcesState,
      loadArticleSourcesAsync.request,
      loadArticleSourcesAsync.success,
      appendArticleSourcesAsync.request,
      appendArticleSourcesAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadArticleSourcesAsync.failure, appendArticleSourcesAsync.failure], (state, action) => action.payload)

export const articleSources = createReducer<ArticleSourcesModel | null, ArticleSourcesActionTypes>(null)
  .handleAction([resetArticleSourcesState, loadArticleSourcesAsync.failure], (state, action) => null)
  .handleAction([loadArticleSourcesAsync.success], (state, action) => action.payload)
  .handleAction([appendArticleSourcesAsync.success], (state, action) => {
    const articleSourcesViewModel = {
      items: {},
      metaData: {}
    } as ArticleSourcesModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    articleSourcesViewModel.items = newItems
    articleSourcesViewModel.metaData = action.payload.metaData

    return articleSourcesViewModel
  })
// #endregion ArticleSources

const articleSourcesState = combineReducers({
  isLoadingArticleSources,
  loadArticleSourcesErrors,
  articleSources
})

export default articleSourcesState
export type ArticleSoucesState = ReturnType<typeof articleSourcesState>
