import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'
import { ArticleMediasSearchOption } from '../../models/articleMedias'

// #region ArticleMedias
export const loadArticleMediasAsync = createAsyncAction(
  'LOAD_ARTICLE_MEDIAS_REQUEST',
  'LOAD_ARTICLE_MEDIAS_SUCCESS',
  'LOAD_ARTICLE_MEDIAS_FAILURE'
)<ArticleMediasSearchOption, MediasModel, RestException>()

export const appendArticleMediasAsync = createAsyncAction(
  'APPEND_ARTICLE_MEDIAS_REQUEST',
  'APPEND_ARTICLE_MEDIAS_SUCCESS',
  'APPEND_ARTICLE_MEDIAS_FAILURE'
)<ArticleMediasSearchOption, MediasModel, RestException>()

export const loadArticleMediaAsync = createAsyncAction(
  'LOAD_ARTICLE_MEDIA_REQUEST',
  'LOAD_ARTICLE_MEDIA_SUCCESS',
  'LOAD_ARTICLE_MEDIA_FAILURE'
)<{ articleId: string; mediaId: string }, MediaModel, RestException>()

export const resetArticleMediasState = createAction('RESET_ARTICLE_MEDIAS_STATE')<undefined>()

export const resetArticleMediaState = createAction('RESET_ARTICLE_MEDIA_STATE')<undefined>()
// #endregion ArticleMedias

export type ArticleMediasActionTypes =
  | ActionType<typeof loadArticleMediasAsync>
  | ActionType<typeof appendArticleMediasAsync>
  | ActionType<typeof loadArticleMediaAsync>
  | ActionType<typeof resetArticleMediasState>
  | ActionType<typeof resetArticleMediaState>
