import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { ServiceCategoriesModel, ServiceCategoryModel, ServicesCategoriesApi } from 'ch-api-client-typescript2/lib'
import { ServicesCategoriesSearchOption, ServicesCategorySearchOption } from '../models/servicesCategories'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadServicesCategories(
  servicesCategoriesSearchOption: ServicesCategoriesSearchOption
): Promise<ServiceCategoriesModel> {
  const { id, name, page, limit, lastRetrieved } = servicesCategoriesSearchOption
  return new ServicesCategoriesApi(configuration, apiRoot, instance)
    .apiV2ServicescategoriesGet(id, name, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as ServiceCategoriesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadServicesCategory(
  servicesCategorySearchOption: ServicesCategorySearchOption
): Promise<ServiceCategoryModel> {
  const { serviceCategoryId } = servicesCategorySearchOption
  return new ServicesCategoriesApi(configuration, apiRoot, instance)
    .apiV2ServicescategoriesServiceCategoryIdGet(serviceCategoryId)
    .then((res) => {
      return res.data as ServiceCategoryModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadServicesCategories,
  loadServicesCategory
}
