import {
  CreateServiceReviewCommand,
  ServiceReviewItemModel,
  ServiceReviewsModel,
  UpdateServiceReviewCommand
} from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models'
import { ServiceReviewSearchOption, ServiceReviewsSearchOption } from '../../models/serviceReviews'

export const loadServiceReviewsPhotoAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEWS_PHOTO_REQUEST',
  'LOAD_SERVICE_REVIEWS_PHOTO_SUCCESS',
  'LOAD_SERVICE_REVIEWS_PHOTO_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const loadServiceReviewPhotoAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_PHOTO_REQUEST',
  'LOAD_SERVICE_REVIEW_PHOTO_SUCCESS',
  'LOAD_SERVICE_REVIEW_PHOTO_FAILURE'
)<ServiceReviewSearchOption, ServiceReviewItemModel, RestException>()

export const deleteServiceReviewPhotoAsync = createAsyncAction(
  'DELETE_SERVICES_REVIEW_PHOTO_REQUEST',
  'DELETE_SERVICES_REVIEW_PHOTO_SUCCESS',
  'DELETE_SERVICES_REVIEW_PHOTO_FAILURE'
)<string, boolean, RestException>()

export const appendServiceReviewsPhotoAsync = createAsyncAction(
  'APPEND_SERVICE_REVIEWS_PHOTO_REQUEST',
  'APPEND_SERVICE_REVIEWS_PHOTO_SUCCESS',
  'APPEND_SERVICE_REVIEWS_PHOTO_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const postServiceReviewPhotoAsync = createAsyncAction(
  'POST_SERVICE_REVIEWS_PHOTO_REQUEST',
  'POST_SERVICE_REVIEWS_PHOTO_SUCCESS',
  'POST_SERVICE_REVIEWS_PHOTO_FAILURE'
)<{ createServiceReviewCommand?: CreateServiceReviewCommand | undefined }, ServiceReviewItemModel, RestException>()

export const putServiceReviewPhotoAsync = createAsyncAction(
  'PUT_SERVICE_REVIEWS_PHOTO_REQUEST',
  'PUT_SERVICE_REVIEWS_PHOTO_SUCCESS',
  'PUT_SERVICE_REVIEWS_PHOTO_FAILURE'
)<
  { serviceReviewId: string; updateServiceReviewCommand?: UpdateServiceReviewCommand | undefined },
  ServiceReviewItemModel,
  RestException
>()

export const resetServiceReviewsPhotoState = createAction('RESET_SERVICE_REVIEWS_PHOTO_STATE')()
export const resetServiceReviewPhotoState = createAction('RESET_SERVICE_REVIEW_PHOTO_STATE')()

export type ServiceReviewsPhotoActionType =
  | ActionType<typeof loadServiceReviewsPhotoAsync>
  | ActionType<typeof loadServiceReviewPhotoAsync>
  | ActionType<typeof appendServiceReviewsPhotoAsync>
  | ActionType<typeof postServiceReviewPhotoAsync>
  | ActionType<typeof putServiceReviewPhotoAsync>
  | ActionType<typeof resetServiceReviewsPhotoState>
  | ActionType<typeof resetServiceReviewPhotoState>
  | ActionType<typeof deleteServiceReviewPhotoAsync>
