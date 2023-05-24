import {
  ServiceReviewsApi,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasGetRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdDeleteRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdGetRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdPutRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasPostRequest
} from 'ch-api-client-typescript2/lib/api/service-reviews-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region ServiceReviewMedias
export const getServiceReviewMedias = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasGetRequest
): Promise<MediasModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getServiceReviewMediaByMediaId = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postServiceReviewMedia = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasPostRequest
): Promise<MediaModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdMediasPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putServiceReviewMedia = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdPutRequest
): Promise<MediaModel> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdPut(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const deleteServiceReviewMedia = async (
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdMediasMediaIdDeleteRequest
): Promise<boolean> => {
  return new ServiceReviewsApi(configuration, undefined, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdDelete(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ServiceReviewMedias

const serviceReviews = {
  getServiceReviewMedias,
  getServiceReviewMediaByMediaId,
  postServiceReviewMedia,
  putServiceReviewMedia,
  deleteServiceReviewMedia
}

export default serviceReviews
