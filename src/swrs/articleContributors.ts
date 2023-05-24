import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest } from 'ch-api-client-typescript2/lib/api/articles-api'
import { ArticleContributorsModel } from 'ch-api-client-typescript2/lib/models/article-contributors-model'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'
import { RestException } from '../models/exceptions'
import { loadArticleContributors } from '../services/articleContributors'

// #region GET api/v2/articles/{articleId}/contributors
export const getArticleContributorsSWR = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ArticleContributorsModel, RestException>
) => {
  return useGenericSWR<
    ArticleContributorsModel,
    RestException,
    ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest
  >(operationName + nameOf(() => loadArticleContributors), loadArticleContributors, payload, shouldFetch, config)
}

export const getArticleContributorsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ArticleContributorsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ArticleContributorsModel,
    RestException,
    ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest
  >(operationName + nameOf(() => loadArticleContributors), loadArticleContributors, config)
}

export const getArticleContributorsSWRInfinite = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    ArticleContributorsModel,
    RestException,
    ArticlesApiApiV2ArticlesArticleIdContributorsGetRequest
  >(operationName + nameOf(() => loadArticleContributors), loadArticleContributors, payload, shouldFetch)
}
// #endregion GET api/v2/articles/{articleId}/contributors
