import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { ArticlesApi, ArticlesModel, ArticleModel } from 'ch-api-client-typescript2/lib'
import { ArticleSearchOption, ArticlesSearchOption } from '../models/articles'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Articles
export function loadArticles(articlesSearchOption: ArticlesSearchOption): Promise<ArticlesModel> {
  const {
    id,
    title,
    description,
    status,
    marketingType,
    userId,
    userName,
    hospitalId,
    hospitalName,
    countryId,
    tag,
    exceptArticleId,
    exceptHospitalId,
    contributorId,
    languageCode,
    showHidden,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = articlesSearchOption
  return new ArticlesApi(undefined, apiRoot, instance)
    .apiV2ArticlesGet(
      id,
      title,
      description,
      status,
      marketingType,
      userId,
      userName,
      hospitalId,
      hospitalName,
      countryId,
      tag,
      exceptArticleId,
      exceptHospitalId,
      contributorId,
      languageCode,
      showHidden,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as ArticlesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadArticle(articleSearchOption: ArticleSearchOption): Promise<ArticleModel> {
  const { articleId, slug, languageCode, returnDefaultValue, options } = articleSearchOption
  if (slug) {
    return new ArticlesApi(undefined, apiRoot, instance)
      .apiV2ArticlesSlugGet(slug, languageCode, returnDefaultValue, options)
      .then((res) => {
        return res.data as ArticleModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new ArticlesApi(undefined, apiRoot, instance)
      .apiV2ArticlesArticleIdGet(articleId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as ArticleModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Articles

export default {
  loadArticles,
  loadArticle
}
