import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  ServiceReviewsApiApiV2ServicereviewsGetRequest,
  ServiceReviewsApiApiV2ServicereviewsPostRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdDeleteRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest,
  ServiceReviewsApiApiV2ServicereviewsServiceReviewIdPutRequest
} from 'ch-api-client-typescript2/lib/api/service-reviews-api'
import { ServiceReviewModel } from 'ch-api-client-typescript2/lib/models/service-review-model'
import { ServiceReviewsModel } from 'ch-api-client-typescript2/lib/models/service-reviews-model'
import {
  deleteServiceReview,
  getServiceReviewByServiceReviewId,
  getServiceReviews,
  postServiceReview,
  putServiceReview
} from '../services/serviceReviews'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v1/servicereviews
export const postServiceReviewSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ServiceReviewModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ServiceReviewModel, RestException, ServiceReviewsApiApiV2ServicereviewsPostRequest>(
    operationName + nameOf(() => postServiceReview),
    postServiceReview,
    config
  )
}
// #endregion POST api/v1/servicereviews

// #region GET api/v2/servicereviews
export const getServiceReviewsSWR = (
  operationName = '',
  payload: ServiceReviewsApiApiV2ServicereviewsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ServiceReviewsModel, RestException>
) => {
  useGenericSWR<ServiceReviewsModel, RestException, ServiceReviewsApiApiV2ServicereviewsGetRequest>(
    operationName + nameOf(() => getServiceReviews),
    getServiceReviews,
    payload,
    shouldFetch,
    config
  )
}

export const getServiceReviewsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ServiceReviewsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ServiceReviewsModel, RestException, ServiceReviewsApiApiV2ServicereviewsGetRequest>(
    operationName + nameOf(() => getServiceReviews),
    getServiceReviews,
    config
  )
}

export const getServiceReviewsSWRInfinite = (
  operationName = '',
  payload?: ServiceReviewsApiApiV2ServicereviewsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<ServiceReviewsModel, RestException, ServiceReviewsApiApiV2ServicereviewsGetRequest>(
    operationName + nameOf(() => getServiceReviews),
    getServiceReviews,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/servicereviews

// #region GET api/v2/servicereviews/{servicereviewId}
export const getServiceReviewByServiceReviewIdSWR = (
  operationName = '',
  payload: ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ServiceReviewModel, RestException>
) => {
  return useGenericSWR<
    ServiceReviewModel,
    RestException,
    ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest
  >(
    operationName + nameOf(() => getServiceReviewByServiceReviewId),
    getServiceReviewByServiceReviewId,
    payload,
    shouldFetch,
    config
  )
}

export const getServiceReviewBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ServiceReviewModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ServiceReviewModel,
    RestException,
    ServiceReviewsApiApiV2ServicereviewsServiceReviewIdGetRequest
  >(operationName + nameOf(() => getServiceReviewByServiceReviewId), getServiceReviewByServiceReviewId, config)
}
// #endregion GET api/v2/servicereviews/{servicereviewId}

// #region PUT api/v1/servicereviews
export const putServiceReviewSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ServiceReviewModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ServiceReviewModel,
    RestException,
    ServiceReviewsApiApiV2ServicereviewsServiceReviewIdPutRequest
  >(operationName + nameOf(() => putServiceReview), putServiceReview, config)
}
// #endregion PUT api/v1/servicereviews

// #region DELETE api/v1/servicereviews
export const deleteServiceReviewSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    boolean,
    RestException,
    ServiceReviewsApiApiV2ServicereviewsServiceReviewIdDeleteRequest
  >(operationName + nameOf(() => deleteServiceReview), deleteServiceReview, config)
}
// #endregion DELETE api/v1/servicereviews
