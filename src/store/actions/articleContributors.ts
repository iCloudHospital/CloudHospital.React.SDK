import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { ArticleContributorsModel, ArticleContributorModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'
import { ArticleContributorsSearchOption } from '../../models/articleContributors'

// #region ArticleContributors
export const loadArticleContributorsAsync = createAsyncAction(
  'LOAD_ARTICLE_CONTRIBUTORS_REQUEST',
  'LOAD_ARTICLE_CONTRIBUTORS_SUCCESS',
  'LOAD_ARTICLE_CONTRIBUTORS_FAILURE'
)<ArticleContributorsSearchOption, ArticleContributorsModel, RestException>()

export const appendArticleContributorsAsync = createAsyncAction(
  'APPEND_ARTICLE_CONTRIBUTORS_REQUEST',
  'APPEND_ARTICLE_CONTRIBUTORS_SUCCESS',
  'APPEND_ARTICLE_CONTRIBUTORS_FAILURE'
)<ArticleContributorsSearchOption, ArticleContributorsModel, RestException>()

export const loadArticleContributorAsync = createAsyncAction(
  'LOAD_ARTICLE_CONTRIBUTOR_REQUEST',
  'LOAD_ARTICLE_CONTRIBUTOR_SUCCESS',
  'LOAD_ARTICLE_CONTRIBUTOR_FAILURE'
)<{ articleId: string; contributorId: string }, ArticleContributorModel, RestException>()

export const resetArticleContributorsState = createAction('RESET_ARTICLE_CONTRIBUTORS_STATE')<undefined>()

export const resetArticleContributorState = createAction('RESET_ARTICLE_CONTRIBUTOR_STATE')<undefined>()
// #endregion ArticleContributors

export type ArticleContributorsActionTypes =
  | ActionType<typeof loadArticleContributorsAsync>
  | ActionType<typeof appendArticleContributorsAsync>
  | ActionType<typeof loadArticleContributorAsync>
  | ActionType<typeof resetArticleContributorsState>
  | ActionType<typeof resetArticleContributorState>
