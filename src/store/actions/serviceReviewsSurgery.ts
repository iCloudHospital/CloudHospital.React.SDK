import {
  CreateServiceReviewCommand,
  ServiceReviewItemModel,
  ServiceReviewsModel,
  UpdateServiceReviewCommand
} from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models'
import { ServiceReviewSearchOption, ServiceReviewsSearchOption } from '../../models/serviceReviews'

export const loadServiceReviewsSurgeryAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEWS_SURGERY_REQUEST',
  'LOAD_SERVICE_REVIEWS_SURGERY_SUCCESS',
  'LOAD_SERVICE_REVIEWS_SURGERY_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const loadServiceReviewSurgeryAsync = createAsyncAction(
  'LOAD_SERVICE_REVIEW_SURGERY_REQUEST',
  'LOAD_SERVICE_REVIEW_SURGERY_SUCCESS',
  'LOAD_SERVICE_REVIEW_SURGERY_FAILURE'
)<ServiceReviewSearchOption, ServiceReviewItemModel, RestException>()

export const deleteServiceReviewSurgeryAsync = createAsyncAction(
  'DELETE_SERVICES_REVIEW_SURGERY_REQUEST',
  'DELETE_SERVICES_REVIEW_SURGERY_SUCCESS',
  'DELETE_SERVICES_REVIEW_SURGERY_FAILURE'
)<string, boolean, RestException>()

export const appendServiceReviewsSurgeryAsync = createAsyncAction(
  'APPEND_SERVICE_REVIEWS_SURGERY_REQUEST',
  'APPEND_SERVICE_REVIEWS_SURGERY_SUCCESS',
  'APPEND_SERVICE_REVIEWS_SURGERY_FAILURE'
)<ServiceReviewsSearchOption, ServiceReviewsModel, RestException>()

export const postServiceReviewSurgeryAsync = createAsyncAction(
  'POST_SERVICE_REVIEWS_SURGERY_REQUEST',
  'POST_SERVICE_REVIEWS_SURGERY_SUCCESS',
  'POST_SERVICE_REVIEWS_SURGERY_FAILURE'
)<{ createServiceReviewCommand?: CreateServiceReviewCommand | undefined }, ServiceReviewItemModel, RestException>()

export const putServiceReviewSurgeryAsync = createAsyncAction(
  'PUT_SERVICE_REVIEWS_SURGERY_REQUEST',
  'PUT_SERVICE_REVIEWS_SURGERY_SUCCESS',
  'PUT_SERVICE_REVIEWS_SURGERY_FAILURE'
)<
  { serviceReviewId: string; updateServiceReviewCommand?: UpdateServiceReviewCommand | undefined },
  ServiceReviewItemModel,
  RestException
>()

export const resetServiceReviewsSurgeryState = createAction('RESET_SERVICE_REVIEWS_SURGERY_STATE')()
export const resetServiceReviewSurgeryState = createAction('RESET_SERVICE_REVIEW_SURGERY_STATE')()

export type ServiceReviewsSurgeryActionType =
  | ActionType<typeof loadServiceReviewsSurgeryAsync>
  | ActionType<typeof loadServiceReviewSurgeryAsync>
  | ActionType<typeof appendServiceReviewsSurgeryAsync>
  | ActionType<typeof postServiceReviewSurgeryAsync>
  | ActionType<typeof putServiceReviewSurgeryAsync>
  | ActionType<typeof resetServiceReviewsSurgeryState>
  | ActionType<typeof resetServiceReviewSurgeryState>
  | ActionType<typeof deleteServiceReviewSurgeryAsync>
