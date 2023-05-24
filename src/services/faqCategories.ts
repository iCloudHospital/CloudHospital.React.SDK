import {
  FaqCategoriesApi,
  FaqCategoriesApiApiV2FaqcategoriesFaqCategoryIdGetRequest,
  FaqCategoriesApiApiV2FaqcategoriesGetRequest,
  FaqCategoriesApiApiV2FaqcategoriesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/faq-categories-api'
import { FaqCategoriesModel } from 'ch-api-client-typescript2/lib/models/faq-categories-model'
import { FaqCategoryModel } from 'ch-api-client-typescript2/lib/models/faq-category-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadFaqCategories = async (
  payload?: FaqCategoriesApiApiV2FaqcategoriesGetRequest
): Promise<FaqCategoriesModel> => {
  return new FaqCategoriesApi(configuration, undefined, instance)
    .apiV2FaqcategoriesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadFaqCategory = async (
  payload: FaqCategoriesApiApiV2FaqcategoriesFaqCategoryIdGetRequest
): Promise<FaqCategoryModel> => {
  return new FaqCategoriesApi(configuration, undefined, instance)
    .apiV2FaqcategoriesFaqCategoryIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadFaqCategoryBySlug = async (
  payload: FaqCategoriesApiApiV2FaqcategoriesSlugGetRequest
): Promise<FaqCategoryModel> => {
  return new FaqCategoriesApi(configuration, undefined, instance)
    .apiV2FaqcategoriesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const faqCategories = {
  loadFaqCategories,
  loadFaqCategory
}

export default faqCategories
