import { FaqsModel, FaqModel, MediaModel, MediasModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { FaqMediasSearchOption, FaqSearchOption, FaqsSearchOption } from '../../models/faqs'

// #region Faqs
export const loadFaqsAsync = createAsyncAction('LOAD_FAQS_REQUEST', 'LOAD_FAQS_SUCCESS', 'LOAD_FAQS_FAILURE')<
  FaqsSearchOption,
  FaqsModel,
  RestException
>()

export const appendFaqsAsync = createAsyncAction('APPEND_FAQS_REQUEST', 'APPEND_FAQS_SUCCESS', 'APPEND_FAQS_FAILURE')<
  FaqsSearchOption,
  FaqsModel,
  RestException
>()

export const loadFaqAsync = createAsyncAction('LOAD_FAQ_REQUEST', 'LOAD_FAQ_SUCCESS', 'LOAD_FAQ_FAILURE')<
  FaqSearchOption,
  FaqModel,
  RestException
>()
// #endregion Faqs

// #region FaqMedias
export const loadFaqMediasAsync = createAsyncAction(
  'LOAD_FAQ_MEDIAS_REQUEST',
  'LOAD_FAQ_MEDIAS_SUCCESS',
  'LOAD_FAQ_MEDIAS_FAILURE'
)<FaqMediasSearchOption, MediasModel, RestException>()

export const appendFaqMediasAsync = createAsyncAction(
  'APPEND_FAQ_MEDIAS_REQUEST',
  'APPEND_FAQ_MEDIAS_SUCCESS',
  'APPEND_FAQ_MEDIAS_FAILURE'
)<FaqMediasSearchOption, FaqsModel, RestException>()

export const loadFaqMediaAsync = createAsyncAction(
  'LOAD_FAQ_MEDIA_REQUEST',
  'LOAD_FAQ_MEDIA_SUCCESS',
  'LOAD_FAQ_MEDIA_FAILURE'
)<{ faqId: string; mediaId: string }, FaqModel, RestException>()
// #endregion FaqMedias

export const resetFaqsState = createAction('RESET_FAQS_STATE')<undefined>()

export const resetFaqState = createAction('RESET_FAQ_STATE')<undefined>()

export type FaqsActionTypes =
  | ActionType<typeof loadFaqsAsync>
  | ActionType<typeof appendFaqsAsync>
  | ActionType<typeof loadFaqAsync>
  | ActionType<typeof loadFaqMediasAsync>
  | ActionType<typeof appendFaqMediasAsync>
  | ActionType<typeof loadFaqMediaAsync>
  | ActionType<typeof resetFaqsState>
  | ActionType<typeof resetFaqState>
