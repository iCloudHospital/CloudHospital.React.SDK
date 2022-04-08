import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'

import {
  ServiceReviewsSearchOption,
  ServiceReviewSearchOption,
  ServiceReviewMediasSearchOption
} from '../../models/serviceReviews'
import { RestException } from '../../models/exceptions'
import {
  CreateMediaCommand,
  CreateServiceReviewCommand,
  MediaModel,
  MediasModel,
  ServiceReviewModel,
  ServiceReviewsModel,
  UpdateMediaCommand,
  UpdateServiceReviewCommand
} from 'ch-api-client-typescript2/lib'

// #region ServiceReview
export const loadServiceReviewsAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEWS_REQUEST',
  'LOAD_SERVICE_REVIEWS_SUCCESS',
  'LOAD_SERVICE_REVIEWS_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const appendServiceReviewsAsync = createAsyncAction(
  'APPEND_SERVICE_REVIEWS_REQUEST',
  'APPEND_SERVICE_REVIEWS_SUCCESS',
  'APPEND_SERVICE_REVIEWS_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const loadServiceReviewAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_REQUEST',
  'LOAD_SERVICE_REVIEW_SUCCESS',
  'LOAD_SERVICE_REVIEW_FAILURE'
)<ServiceReviewSearchOption, ServiceReviewModel, RestException>()

export const postServiceReviewAsync = createAsyncAction(
  'POST_SERVICES_REVIEW_REQUEST',
  'POST_SERVICES_REVIEW_SUCCESS',
  'POST_SERVICES_REVIEW_FAILURE'
)<{ createServiceReviewCommand?: CreateServiceReviewCommand | undefined }, ServiceReviewModel, RestException>()

export const putServiceReviewAsync = createAsyncAction(
  'PUT_SERVICES_REVIEW_REQUEST',
  'PUT_SERVICES_REVIEW_SUCCESS',
  'PUT_SERVICES_REVIEW_FAILURE'
)<
  { serviceReviewId: string; updateServiceReviewCommand?: UpdateServiceReviewCommand | undefined },
  ServiceReviewModel,
  RestException
>()

export const deleteServiceReviewAsync = createAsyncAction(
  'DELETE_SERVICES_REVIEW_REQUEST',
  'DELETE_SERVICES_REVIEW_SUCCESS',
  'DELETE_SERVICES_REVIEW_FAILURE'
)<string, boolean, RestException>()

export const resetServiceReviewsState = createAction('RESET_SERVICEREVIEWS_STATE')<undefined>()

export const resetServiceReviewState = createAction('RESET_SERVICEREVIEW_STATE')<undefined>()
// #endregion ServiceReview

// #region ServiceReviewMedias
export const loadServiceReviewMediasAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_MEDIAS_REQUEST',
  'LOAD_SERVICE_REVIEW_MEDIAS_SUCCESS',
  'LOAD_SERVICE_REVIEW_MEDIAS_FAILURE'
)<ServiceReviewMediasSearchOption, MediasModel, RestException>()

export const appendServiceReviewMediasAsync = createAsyncAction(
  'APPEND_SERVICE_REVIEW_MEDIAS_REQUEST',
  'APPEND_SERVICE_REVIEW_MEDIAS_SUCCESS',
  'APPEND_SERVICE_REVIEW_MEDIAS_FAILURE'
)<ServiceReviewMediasSearchOption, MediasModel, RestException>()

export const loadServiceReviewMediaAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_MEDIA_REQUEST',
  'LOAD_SERVICE_REVIEW_MEDIA_SUCCESS',
  'LOAD_SERVICE_REVIEW_MEDIA_FAILURE'
)<{ serviceReviewId: string; mediaId: string }, MediaModel, RestException>()

export const postServiceReviewMediaAsync = createAsyncAction(
  'POST_SERVICE_REVIEW_MEDIA_REQUEST',
  'POST_SERVICE_REVIEW_MEDIA_SUCCESS',
  'POST_SERVICE_REVIEW_MEDIA_FAILURE'
)<{ serviceReviewId: string; createMediaCommand?: CreateMediaCommand }, MediaModel, RestException>()

export const putServiceReviewMediaAsync = createAsyncAction(
  'PUT_SERVICE_REVIEW_MEDIA_REQUEST',
  'PUT_SERVICE_REVIEW_MEDIA_SUCCESS',
  'PUT_SERVICE_REVIEW_MEDIA_FAILURE'
)<{ serviceReviewId: string; mediaId: string; updateMediaCommand?: UpdateMediaCommand }, MediaModel, RestException>()

export const deleteServiceReviewMediaAsync = createAsyncAction(
  'DELETE_SERVICE_REVIEW_MEDIA_REQUEST',
  'DELETE_SERVICE_REVIEW_MEDIA_SUCCESS',
  'DELETE_SERVICE_REVIEW_MEDIA_FAILURE'
)<{ serviceReviewId: string; mediaId: string }, boolean, RestException>()

export const resetServiceReviewMediasState = createAction('RESET_SERVICE_REVIEW_MEDIAS')<undefined>()

export const resetServiceReviewMediaState = createAction('RESET_SERVICE_REVIEW_MEDIA')<undefined>()
// #endregion ServiceReviewMedias

export type ServiceReviewsActionTypes =
  | ActionType<typeof loadServiceReviewsAsync>
  | ActionType<typeof appendServiceReviewsAsync>
  | ActionType<typeof loadServiceReviewAsync>
  | ActionType<typeof postServiceReviewAsync>
  | ActionType<typeof putServiceReviewAsync>
  | ActionType<typeof deleteServiceReviewAsync>
  | ActionType<typeof resetServiceReviewsState>
  | ActionType<typeof resetServiceReviewState>
  | ActionType<typeof loadServiceReviewMediasAsync>
  | ActionType<typeof appendServiceReviewMediasAsync>
  | ActionType<typeof loadServiceReviewMediaAsync>
  | ActionType<typeof postServiceReviewMediaAsync>
  | ActionType<typeof putServiceReviewMediaAsync>
  | ActionType<typeof deleteServiceReviewMediaAsync>
  | ActionType<typeof resetServiceReviewMediasState>
  | ActionType<typeof resetServiceReviewMediaState>
