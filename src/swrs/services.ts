import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  ServicesApiApiV2ServicesGetRequest,
  ServicesApiApiV2ServicesServiceIdGetRequest,
  ServicesApiApiV2ServicesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/services-api'
import { HospitalServiceModel } from 'ch-api-client-typescript2/lib/models/hospital-service-model'
import { HospitalServicesModel } from 'ch-api-client-typescript2/lib/models/hospital-services-model'
import { getServiceByServiceId, getServiceBySlug, getServices } from '../services/services'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/services
export const getServicesSWR = (
  operationName = '',
  payload: ServicesApiApiV2ServicesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalServicesModel, RestException>
) => {
  useGenericSWR<HospitalServicesModel, RestException, ServicesApiApiV2ServicesGetRequest>(
    operationName + nameOf(() => getServices),
    getServices,
    payload,
    shouldFetch,
    config
  )
}

export const getServicesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalServicesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalServicesModel, RestException, ServicesApiApiV2ServicesGetRequest>(
    operationName + nameOf(() => getServices),
    getServices,
    config
  )
}

export const getServicesSWRInfinite = (
  operationName = '',
  payload?: ServicesApiApiV2ServicesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<HospitalServicesModel, RestException, ServicesApiApiV2ServicesGetRequest>(
    operationName + nameOf(() => getServices),
    getServices,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/services

// #region GET api/v2/services/{serviceId}
export const getServiceByServiceIdSWR = (
  operationName = '',
  payload: ServicesApiApiV2ServicesServiceIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalServiceModel, RestException>
) => {
  return useGenericSWR<HospitalServiceModel, RestException, ServicesApiApiV2ServicesServiceIdGetRequest>(
    operationName + nameOf(() => getServiceByServiceId),
    getServiceByServiceId,
    payload,
    shouldFetch,
    config
  )
}

export const getServiceBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalServiceModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalServiceModel, RestException, ServicesApiApiV2ServicesServiceIdGetRequest>(
    operationName + nameOf(() => getServiceByServiceId),
    getServiceByServiceId,
    config
  )
}
// #endregion GET api/v2/services/{serviceId}

// #region GET api/v2/services/slug/{serviceSlug}
export const getServiceBySlugSWR = (
  operationName = '',
  payload: ServicesApiApiV2ServicesSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalServiceModel, RestException>
) => {
  return useGenericSWR<HospitalServiceModel, RestException, ServicesApiApiV2ServicesSlugGetRequest>(
    operationName + nameOf(() => getServiceBySlug),
    getServiceBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getServiceBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalServiceModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalServiceModel, RestException, ServicesApiApiV2ServicesSlugGetRequest>(
    operationName + nameOf(() => getServiceBySlug),
    getServiceBySlug,
    config
  )
}
// #endregion GET api/v2/services/slug/{serviceSlug}
