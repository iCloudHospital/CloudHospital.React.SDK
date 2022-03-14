import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { ArticlesModel, ArticleModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'
import { ArticlesSearchOption, ArticleSearchOption } from '../../models/articles'

// #region Articles
export const loadArticlesAsync = createAsyncAction(
  'LOAD_ARTICLES_REQUEST',
  'LOAD_ARTICLES_SUCCESS',
  'LOAD_ARTICLES_FAILURE'
)<ArticlesSearchOption, ArticlesModel, RestException>()

export const appendArticlesAsync = createAsyncAction(
  'APPEND_ARTICLES_REQUEST',
  'APPEND_ARTICLES_SUCCESS',
  'APPEND_ARTICLES_FAILURE'
)<ArticlesSearchOption, ArticlesModel, RestException>()

export const loadArticleAsync = createAsyncAction(
  'LOAD_ARTICLE_REQUEST',
  'LOAD_ARTICLE_SUCCESS',
  'LOAD_ARTICLE_FAILURE'
)<ArticleSearchOption, ArticleModel, RestException>()

export const loadTranslatedArticleAsync = createAsyncAction(
  'LOAD_TRANSLATED_ARTICLE_REQUEST',
  'LOAD_TRANSLATED_ARTICLE_SUCCESS',
  'LOAD_TRANSLATED_ARTICLE_FAILURE'
)<ArticleSearchOption, ArticleModel, RestException>()

export const resetArticlesState = createAction('RESET_ARTICLES_STATE')<undefined>()

export const resetArticleState = createAction('RESET_ARTICLE_STATE')<undefined>()
// #endregion Articles

export type ArticlesActionTypes =
  | ActionType<typeof loadArticlesAsync>
  | ActionType<typeof appendArticlesAsync>
  | ActionType<typeof loadArticleAsync>
  | ActionType<typeof loadTranslatedArticleAsync>
  | ActionType<typeof resetArticlesState>
  | ActionType<typeof resetArticleState>
