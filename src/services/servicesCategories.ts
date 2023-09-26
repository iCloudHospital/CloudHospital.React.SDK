import {
  ServicesCategoriesApi,
  ServicesCategoriesApiApiV2ServicescategoriesGetRequest,
  ServicesCategoriesApiApiV2ServicescategoriesServiceCategoryIdGetRequest
} from 'ch-api-client-typescript2/lib/api/services-categories-api'
import { ServiceCategoriesModel } from 'ch-api-client-typescript2/lib/models/service-categories-model'
import { ServiceCategoryModel } from 'ch-api-client-typescript2/lib/models/service-category-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadServicesCategories = async (
  payload?: ServicesCategoriesApiApiV2ServicescategoriesGetRequest
): Promise<ServiceCategoriesModel> => {
  return new ServicesCategoriesApi(configuration, undefined, instance)
    .apiV2ServicescategoriesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadServicesCategory = async (
  payload: ServicesCategoriesApiApiV2ServicescategoriesServiceCategoryIdGetRequest
): Promise<ServiceCategoryModel> => {
  return new ServicesCategoriesApi(configuration, undefined, instance)
    .apiV2ServicescategoriesServiceCategoryIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const serviceCategories = {
  loadServicesCategories,
  loadServicesCategory
}

export default serviceCategories
