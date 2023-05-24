import { RestException } from '../models'
import {
  ArticlesApi,
  ArticlesApiApiV2ArticlesArticleIdGetRequest,
  ArticlesApiApiV2ArticlesGetRequest,
  ArticlesApiApiV2ArticlesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/articles-api'
import { ArticleModel } from 'ch-api-client-typescript2/lib/models/article-model'
import { ArticlesModel } from 'ch-api-client-typescript2/lib/models/articles-model'
import { configuration, instance } from './HttpClient'

// #region Articles
export const getArticles = async (payload: ArticlesApiApiV2ArticlesGetRequest): Promise<ArticlesModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getArticleById = async (payload: ArticlesApiApiV2ArticlesArticleIdGetRequest): Promise<ArticleModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getArticleBySlug = async (payload: ArticlesApiApiV2ArticlesSlugGetRequest): Promise<ArticleModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Articles

const articles = {
  getArticles,
  getArticleById,
  getArticleBySlug
}

export default articles
