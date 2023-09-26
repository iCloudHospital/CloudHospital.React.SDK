import {
  DealsApi,
  DealsApiApiV2DealsDealIdGetRequest,
  DealsApiApiV2DealsDealIdPackagesGetRequest,
  DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest,
  DealsApiApiV2DealsDealIdServicesGetRequest,
  DealsApiApiV2DealsDealIdServicesServiceIdGetRequest,
  DealsApiApiV2DealsGetRequest,
  DealsApiApiV2DealsSimpleGetRequest,
  DealsApiApiV2DealsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/deals-api'
import { DealModel } from 'ch-api-client-typescript2/lib/models/deal-model'
import { DealPackageModel } from 'ch-api-client-typescript2/lib/models/deal-package-model'
import { DealPackagesModel } from 'ch-api-client-typescript2/lib/models/deal-packages-model'
import { DealServiceModel } from 'ch-api-client-typescript2/lib/models/deal-service-model'
import { DealServicesModel } from 'ch-api-client-typescript2/lib/models/deal-services-model'
import { DealsModel } from 'ch-api-client-typescript2/lib/models/deals-model'
import { DealsSimpleModel } from 'ch-api-client-typescript2/lib/models/deals-simple-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Deals
export const getDeals = async (payload?: DealsApiApiV2DealsGetRequest): Promise<DealsModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealsSimple = async (payload: DealsApiApiV2DealsSimpleGetRequest): Promise<DealsSimpleModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsSimpleGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealById = async (payload: DealsApiApiV2DealsDealIdGetRequest): Promise<DealModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsDealIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealBySlug = async (payload: DealsApiApiV2DealsSlugGetRequest): Promise<DealModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

// #endregion Deals

// #region Deal Packages
export const getDealPackages = async (
  payload: DealsApiApiV2DealsDealIdPackagesGetRequest
): Promise<DealPackagesModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsDealIdPackagesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealPackageById = async (
  payload: DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest
): Promise<DealPackageModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsDealIdPackagesPackageIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Deal Packages

// #region Deal Services
export const getDealServices = async (
  payload: DealsApiApiV2DealsDealIdServicesGetRequest
): Promise<DealServicesModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsDealIdServicesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealServiceById = async (
  payload: DealsApiApiV2DealsDealIdServicesServiceIdGetRequest
): Promise<DealServiceModel> => {
  return new DealsApi(configuration, undefined, instance)
    .apiV2DealsDealIdServicesServiceIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Deal Services

const deals = {
  getDeals,
  getDealById,
  getDealBySlug,
  getDealsSimple,
  getDealPackages,
  getDealPackageById,
  getDealServices,
  getDealServiceById
}

export default deals
