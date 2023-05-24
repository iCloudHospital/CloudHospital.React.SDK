import {
  ArticlesApi,
  ArticlesApiApiV2ArticlesArticleIdContributorsContributorIdGetRequest,
  ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest
} from 'ch-api-client-typescript2/lib/api/articles-api'
import { ArticleContributorModel } from 'ch-api-client-typescript2/lib/models/article-contributor-model'
import { ArticleContributorsModel } from 'ch-api-client-typescript2/lib/models/article-contributors-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region ArticleContributors
export const loadArticleContributors = async (
  payload: ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest
): Promise<ArticleContributorsModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdContributorsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadArticleContributor = async (
  payload: ArticlesApiApiV2ArticlesArticleIdContributorsContributorIdGetRequest
): Promise<ArticleContributorModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdContributorsContributorIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticleContributors

const articleContributors = {
  loadArticleContributors,
  loadArticleContributor
}

export default articleContributors
