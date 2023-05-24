import {
  ArticlesApi,
  ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest,
  ArticlesApiApiV2ArticlesArticleIdSourcesSourceIdGetRequest
} from 'ch-api-client-typescript2/lib/api/articles-api'
import { ArticleSourcesModel } from 'ch-api-client-typescript2/lib/models/article-sources-model'
import { SourceModel } from 'ch-api-client-typescript2/lib/models/source-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region ArticleSources
export const getArticleSources = async (
  payload: ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest
): Promise<ArticleSourcesModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdSourcesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getArticleSource = async (
  payload: ArticlesApiApiV2ArticlesArticleIdSourcesSourceIdGetRequest
): Promise<SourceModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdSourcesSourceIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticleSources

const articleSources = {
  getArticleSources,
  getArticleSource
}

export default articleSources
