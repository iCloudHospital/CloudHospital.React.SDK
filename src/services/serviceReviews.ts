import {
  CreateMediaCommand,
  CreateServiceReviewCommand,
  MediaModel,
  MediasModel,
  ServiceReviewModel,
  ServiceReviewsApi,
  ServiceReviewsModel,
  UpdateMediaCommand,
  UpdateServiceReviewCommand
} from 'ch-api-client-typescript2/lib'
import { RestException } from '../models/exceptions'

import {
  ServiceReviewsSearchOption,
  ServiceReviewSearchOption,
  ServiceReviewMediasSearchOption
} from '../models/serviceReviews'
import { configuration, instance } from './HttpClient'

const apiRoot = process.env.API_ROOT

// #region ServiceReview

export function loadServiceReviews(
  serviceReviewsSearchOption: ServiceReviewsSearchOption
): Promise<ServiceReviewsModel> {
  const {
    hospitalId,
    serviceId,
    serviceName,
    patientId,
    patientName,
    gender,
    recommended,
    rate,
    reviewType,
    languageCode,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved,
    options
  } = serviceReviewsSearchOption
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsGet(
      hospitalId,
      serviceId,
      serviceName,
      patientId,
      patientName,
      gender,
      recommended,
      rate,
      reviewType,
      languageCode,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved,
      options
    )
    .then((res) => {
      return res.data as ServiceReviewsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadServiceReview(serviceReviewSearchOption: ServiceReviewSearchOption): Promise<ServiceReviewModel> {
  const { serviceReviewId } = serviceReviewSearchOption
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdGet(serviceReviewId)
    .then((res) => {
      return res.data as ServiceReviewModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postServiceReview(
  createServiceReviewCommand?: CreateServiceReviewCommand | undefined
): Promise<ServiceReviewModel> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsPost(createServiceReviewCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putServiceReview(
  serviceReviewId: string,
  updateServiceReviewCommand?: UpdateServiceReviewCommand | undefined
): Promise<ServiceReviewModel> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdPut(serviceReviewId, updateServiceReviewCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function deleteServiceReview(serviceReviewId: string): Promise<boolean> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdDelete(serviceReviewId)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ServiceReview

// #region ServiceReviewMedias
export function loadServiceReviewMedias(
  serviceReviewMediasSearchOption: ServiceReviewMediasSearchOption
): Promise<MediasModel> {
  const { serviceReviewId, id, mediaType, page, limit, lastRetrieved } = serviceReviewMediasSearchOption
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdMediasGet(serviceReviewId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadServiceReviewMedia(serviceReviewId: string, mediaId: string): Promise<MediaModel> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdGet(serviceReviewId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postServiceReviewMedia(
  serviceReviewId: string,
  createMediaCommand?: CreateMediaCommand
): Promise<MediaModel> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdMediasPost(serviceReviewId, createMediaCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putServiceReviewMedia(
  serviceReviewId: string,
  mediaId: string,
  updateMediaCommand?: UpdateMediaCommand
): Promise<MediaModel> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdPut(serviceReviewId, mediaId, updateMediaCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function deleteServiceReviewMedia(serviceReviewId: string, mediaId: string): Promise<boolean> {
  return new ServiceReviewsApi(configuration, apiRoot, instance)
    .apiV2ServicereviewsServiceReviewIdMediasMediaIdDelete(serviceReviewId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ServiceReviewMedias

export default {
  loadServiceReviews,
  loadServiceReview,
  postServiceReview,
  putServiceReview,
  deleteServiceReview,

  loadServiceReviewMedias,
  loadServiceReviewMedia,
  postServiceReviewMedia,
  putServiceReviewMedia,
  deleteServiceReviewMedia
}
