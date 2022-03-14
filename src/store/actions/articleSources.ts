import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { ArticleSourcesModel, SourceModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'
import {} from '../../models/articles'
import { ArticleSourcesSearchOption } from '../../models/articleSources'

// #region ArticleSources
export const loadArticleSourcesAsync = createAsyncAction(
  'LOAD_ARTICLE_SOURCES_REQUEST',
  'LOAD_ARTICLE_SOURCES_SUCCESS',
  'LOAD_ARTICLE_SOURCES_FAILURE'
)<ArticleSourcesSearchOption, ArticleSourcesModel, RestException>()

export const appendArticleSourcesAsync = createAsyncAction(
  'APPEND_ARTICLE_SOURCES_REQUEST',
  'APPEND_ARTICLE_SOURCES_SUCCESS',
  'APPEND_ARTICLE_SOURCES_FAILURE'
)<ArticleSourcesSearchOption, ArticleSourcesModel, RestException>()

export const loadArticleSourceAsync = createAsyncAction(
  'LOAD_ARTICLE_SOURCE_REQUEST',
  'LOAD_ARTICLE_SOURCE_SUCCESS',
  'LOAD_ARTICLE_SOURCE_FAILURE'
)<{ articleId: string; sourceId: string }, SourceModel, RestException>()

export const resetArticleSourcesState = createAction('RESET_ARTICLE_SOURCES_STATE')<undefined>()

export const resetArticleSourceState = createAction('RESET_ARTICLE_SOURCE_STATE')<undefined>()
// #endregion ArticleSources

export type ArticleSourcesActionTypes =
  | ActionType<typeof loadArticleSourcesAsync>
  | ActionType<typeof appendArticleSourcesAsync>
  | ActionType<typeof loadArticleSourceAsync>
  | ActionType<typeof resetArticleSourcesState>
  | ActionType<typeof resetArticleSourceState>
