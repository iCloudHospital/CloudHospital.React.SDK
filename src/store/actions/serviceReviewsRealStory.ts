import {
  CreateServiceReviewCommand,
  ServiceReviewItemModel,
  ServiceReviewsModel,
  UpdateServiceReviewCommand
} from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models'
import { ServiceReviewSearchOption, ServiceReviewsSearchOption } from '../../models/serviceReviews'

export const loadServiceReviewsRealStoryAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEWS_REALSTORY_REQUEST',
  'LOAD_SERVICE_REVIEWS_REALSTORY_SUCCESS',
  'LOAD_SERVICE_REVIEWS_REALSTORY_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const loadServiceReviewRealStoryAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_REALSTORY_REQUEST',
  'LOAD_SERVICE_REVIEW_REALSTORY_SUCCESS',
  'LOAD_SERVICE_REVIEW_REALSTORY_FAILURE'
)<ServiceReviewSearchOption, ServiceReviewItemModel, RestException>()

export const deleteServiceReviewRealStoryAsync = createAsyncAction(
  'DELETE_SERVICES_REVIEW_REALSTORY_REQUEST',
  'DELETE_SERVICES_REVIEW_REALSTORY_SUCCESS',
  'DELETE_SERVICES_REVIEW_REALSTORY_FAILURE'
)<string, boolean, RestException>()

export const appendServiceReviewsRealStoryAsync = createAsyncAction(
  'APPEND_SERVICE_REVIEWS_REALSTORY_REQUEST',
  'APPEND_SERVICE_REVIEWS_REALSTORY_SUCCESS',
  'APPEND_SERVICE_REVIEWS_REALSTORY_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const postServiceReviewRealStoryAsync = createAsyncAction(
  'POST_SERVICE_REVIEWS_REALSTORY_REQUEST',
  'POST_SERVICE_REVIEWS_REALSTORY_SUCCESS',
  'POST_SERVICE_REVIEWS_REALSTORY_FAILURE'
)<{ createServiceReviewCommand?: CreateServiceReviewCommand | undefined }, ServiceReviewItemModel, RestException>()

export const putServiceReviewRealStoryAsync = createAsyncAction(
  'PUT_SERVICE_REVIEWS_REALSTORY_REQUEST',
  'PUT_SERVICE_REVIEWS_REALSTORY_SUCCESS',
  'PUT_SERVICE_REVIEWS_REALSTORY_FAILURE'
)<
  { serviceReviewId: string; updateServiceReviewCommand?: UpdateServiceReviewCommand | undefined },
  ServiceReviewItemModel,
  RestException
>()

export const resetServiceReviewsRealStoryState = createAction('RESET_SERVICE_REVIEWS_STATE')()
export const resetServiceReviewRealStoryState = createAction('RESET_SERVICE_REVIEW_STATE')()

export type ServiceReviewsRealStoryActionType =
  | ActionType<typeof loadServiceReviewsRealStoryAsync>
  | ActionType<typeof loadServiceReviewRealStoryAsync>
  | ActionType<typeof appendServiceReviewsRealStoryAsync>
  | ActionType<typeof postServiceReviewRealStoryAsync>
  | ActionType<typeof putServiceReviewRealStoryAsync>
  | ActionType<typeof resetServiceReviewsRealStoryState>
  | ActionType<typeof resetServiceReviewRealStoryState>
  | ActionType<typeof deleteServiceReviewRealStoryAsync>
