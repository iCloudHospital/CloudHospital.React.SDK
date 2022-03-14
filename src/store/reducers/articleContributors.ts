import { ArticleContributorsModel, ArticleContributorModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendArticleContributorsAsync,
  ArticleContributorsActionTypes,
  loadArticleContributorAsync,
  loadArticleContributorsAsync,
  resetArticleContributorsState,
  resetArticleContributorState
} from '../actions/articleContributors'

// #region ArticleContributors
export const isLoadingArticleContributors = createReducer<boolean, ArticleContributorsActionTypes>(false as boolean)
  .handleAction(
    [
      resetArticleContributorsState,
      loadArticleContributorsAsync.success,
      loadArticleContributorsAsync.failure,
      appendArticleContributorsAsync.success,
      appendArticleContributorsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadArticleContributorsAsync.request, appendArticleContributorsAsync.request], (state, action) => true)

export const loadArticleContributorsErrors = createReducer<RestException | null, ArticleContributorsActionTypes>(null)
  .handleAction(
    [
      resetArticleContributorsState,
      loadArticleContributorsAsync.request,
      loadArticleContributorsAsync.success,
      appendArticleContributorsAsync.request,
      appendArticleContributorsAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadArticleContributorsAsync.failure, appendArticleContributorsAsync.failure],
    (state, action) => action.payload
  )

export const articleContributors = createReducer<ArticleContributorsModel | null, ArticleContributorsActionTypes>(null)
  .handleAction([resetArticleContributorsState, loadArticleContributorsAsync.failure], (state, action) => null)
  .handleAction([loadArticleContributorsAsync.success], (state, action) => action.payload)
  .handleAction([appendArticleContributorsAsync.success], (state, action) => {
    const articleContributorsModel = {
      items: {},
      metaData: {}
    } as ArticleContributorsModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    articleContributorsModel.items = newItems
    articleContributorsModel.metaData = action.payload.metaData

    return articleContributorsModel
  })

export const isLoadingArticleContributor = createReducer<boolean, ArticleContributorsActionTypes>(false as boolean)
  .handleAction(
    [resetArticleContributorState, loadArticleContributorAsync.success, loadArticleContributorAsync.failure],
    (state, action) => false
  )
  .handleAction([loadArticleContributorAsync.request], (state, action) => true)

export const loadArticleContributorErrors = createReducer<RestException | null, ArticleContributorsActionTypes>(null)
  .handleAction(
    [resetArticleContributorState, loadArticleContributorAsync.request, loadArticleContributorAsync.success],
    (state, action) => null
  )
  .handleAction([loadArticleContributorAsync.failure], (state, action) => action.payload)

export const articleContributor = createReducer<ArticleContributorModel | null, ArticleContributorsActionTypes>(null)
  .handleAction(
    [resetArticleContributorState, loadArticleContributorAsync.request, loadArticleContributorAsync.failure],
    (state, action) => null
  )
  .handleAction([loadArticleContributorAsync.success], (state, action) => action.payload)

// #endregion ArticleContributors

const articleContibutosState = combineReducers({
  isLoadingArticleContributors,
  loadArticleContributorsErrors,
  articleContributors,

  isLoadingArticleContributor,
  loadArticleContributorErrors,
  articleContributor
})

export default articleContibutosState
export type ArticleContibutosState = ReturnType<typeof articleContibutosState>
