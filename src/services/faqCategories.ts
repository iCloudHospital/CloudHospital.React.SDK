import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { FaqCategoriesModel, FaqCategoryModel, FaqCategoriesApi } from 'ch-api-client-typescript2/lib'
import { FaqCategoriesSearchOption, FaqCategorySearchOption } from '../models/faqCategories'

const apiRoot = process.env.API_ROOT

export function loadFaqCategories(faqCategoriesSearchOption: FaqCategoriesSearchOption): Promise<FaqCategoriesModel> {
  const { id, parentId, name, description, languageCode, page, limit, lastRetrieved } = faqCategoriesSearchOption
  return new FaqCategoriesApi(configuration, apiRoot, instance)
    .apiV2FaqcategoriesGet(id, parentId, name, description, languageCode, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as FaqCategoriesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadFaqCategory(faqCategorySearchOption: FaqCategorySearchOption): Promise<FaqCategoryModel> {
  const { faqCategoryId, slug, languageCode } = faqCategorySearchOption

  if (slug) {
    return new FaqCategoriesApi(configuration, apiRoot, instance)
      .apiV2FaqcategoriesSlugGet(slug, languageCode)
      .then((res) => {
        return res.data as FaqCategoryModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new FaqCategoriesApi(configuration, apiRoot, instance)
      .apiV2FaqcategoriesFaqCategoryIdGet(faqCategoryId, languageCode)
      .then((res) => {
        return res.data as FaqCategoryModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}

export default {
  loadFaqCategories,
  loadFaqCategory
}
