import {
  ServicesApi,
  ServicesApiApiV2ServicesGetRequest,
  ServicesApiApiV2ServicesServiceIdGetRequest,
  ServicesApiApiV2ServicesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/services-api'
import { HospitalServiceModel } from 'ch-api-client-typescript2/lib/models/hospital-service-model'
import { HospitalServicesModel } from 'ch-api-client-typescript2/lib/models/hospital-services-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Services
export const getServices = async (payload: ServicesApiApiV2ServicesGetRequest): Promise<HospitalServicesModel> => {
  return new ServicesApi(configuration, undefined, instance)
    .apiV2ServicesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getServiceByServiceId = async (
  payload: ServicesApiApiV2ServicesServiceIdGetRequest
): Promise<HospitalServiceModel> => {
  return new ServicesApi(configuration, undefined, instance)
    .apiV2ServicesServiceIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getServiceBySlug = async (
  payload: ServicesApiApiV2ServicesSlugGetRequest
): Promise<HospitalServiceModel> => {
  return new ServicesApi(configuration, undefined, instance)
    .apiV2ServicesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Services

const services = {
  getServices,
  getServiceByServiceId,
  getServiceBySlug
}

export default services
