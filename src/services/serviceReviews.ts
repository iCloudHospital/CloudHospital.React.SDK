import {
  ServiceReviewsApi,
  ServiceReviewsApiApiV2ServicereviewsGetRequest,
  ServiceReviewsApiApiV2ServicereviewsPostRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdDeleteRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdPutRequest
} from 'ch-api-client-typescript2/lib/api/service-reviews-api'
import { ServiceReviewModel } from 'ch-api-client-typescript2/lib/models/service-review-model'
import { ServiceReviewsModel } from 'ch-api-client-typescript2/lib/models/service-reviews-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region ServiceReviews
export const postServiceReview = async (
  payload?: ServiceReviewsApiApiV2ServicereviewsPostRequest
): Promise<ServiceReviewModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getServiceReviews = async (
  payload?: ServiceReviewsApiApiV2ServicereviewsGetRequest
): Promise<ServiceReviewsModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getServiceReviewByServiceReviewId = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest
): Promise<ServiceReviewModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putServiceReview = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdPutRequest
): Promise<ServiceReviewModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdPut(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const deleteServiceReview = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdDeleteRequest
): Promise<boolean> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdDelete(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ServiceReviews

const serviceReviews = {
  getServiceReviews,
  getServiceReviewByServiceReviewId,
  postServiceReview,
  putServiceReview,
  deleteServiceReview
}

export default serviceReviews
