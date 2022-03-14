import { ArticlesModel, ArticleModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendArticlesAsync,
  ArticlesActionTypes,
  loadArticlesAsync,
  loadArticleAsync,
  loadTranslatedArticleAsync,
  resetArticleState
} from '../actions/articles'

// #region Articles
export const isLoadingArticles = createReducer<boolean, ArticlesActionTypes>(false as boolean)
  .handleAction(
    [loadArticlesAsync.success, loadArticlesAsync.failure, appendArticlesAsync.success, appendArticlesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadArticlesAsync.request, appendArticlesAsync.request], (state, action) => true)

export const loadArticlesErrors = createReducer<RestException | null, ArticlesActionTypes>(null)
  .handleAction(
    [loadArticlesAsync.request, loadArticlesAsync.success, appendArticlesAsync.request, appendArticlesAsync.success],
    (state, action) => null
  )
  .handleAction([loadArticlesAsync.failure, appendArticlesAsync.failure], (state, action) => action.payload)

export const articles = createReducer<ArticlesModel | null, ArticlesActionTypes>(null)
  .handleAction([loadArticlesAsync.failure], (state, action) => null)
  .handleAction([loadArticlesAsync.success], (state, action) => action.payload)
  .handleAction([appendArticlesAsync.success], (state, action) => {
    const articlesModel = {
      items: {},
      metaData: {}
    } as ArticlesModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    articlesModel.items = newItems
    articlesModel.metaData = action.payload.metaData

    return articlesModel
  })

export const isLoadingArticle = createReducer<boolean, ArticlesActionTypes>(false as boolean)
  .handleAction(
    [
      resetArticleState,
      loadArticleAsync.success,
      loadArticleAsync.failure,
      loadTranslatedArticleAsync.success,
      loadTranslatedArticleAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadArticleAsync.request, loadTranslatedArticleAsync.request], (state, action) => true)

export const loadArticleErrors = createReducer<RestException | null, ArticlesActionTypes>(null)
  .handleAction(
    [
      resetArticleState,
      loadArticleAsync.request,
      loadArticleAsync.success,
      loadTranslatedArticleAsync.request,
      loadTranslatedArticleAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadArticleAsync.failure, loadTranslatedArticleAsync.failure], (state, action) => action.payload)

export const article = createReducer<ArticleModel | null, ArticlesActionTypes>(null)
  .handleAction([resetArticleState, loadArticleAsync.request, loadArticleAsync.failure], (state, action) => null)
  .handleAction([loadArticleAsync.success], (state, action) => action.payload)

export const translatedArticle = createReducer<ArticleModel | null, ArticlesActionTypes>(null)
  .handleAction(
    [resetArticleState, loadTranslatedArticleAsync.request, loadTranslatedArticleAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedArticleAsync.success], (state, action) => action.payload)
// #endregion Articles

const articlesState = combineReducers({
  isLoadingArticles,
  loadArticlesErrors,
  articles,

  isLoadingArticle,
  loadArticleErrors,
  article,
  translatedArticle
})

export default articlesState
export type ArticlesState = ReturnType<typeof articlesState>
