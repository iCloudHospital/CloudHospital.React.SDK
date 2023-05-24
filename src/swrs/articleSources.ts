import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import { ArticleSourcesModel, ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest } from 'ch-api-client-typescript2/lib'
import { getArticleSources } from '../services/articleSources'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/articles/{articleId}/sources
export const getArticleSourcesSWR = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ArticleSourcesModel, RestException>
) => {
  return useGenericSWR<ArticleSourcesModel, RestException, ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest>(
    operationName + nameOf(() => getArticleSources),
    getArticleSources,
    payload,
    shouldFetch,
    config
  )
}

export const getArticleSourcesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ArticleSourcesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ArticleSourcesModel, RestException, ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest>(
    operationName + nameOf(() => getArticleSources),
    getArticleSources,
    config
  )
}

export const getArticleSourcesSWRInfinite = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<ArticleSourcesModel, RestException, ArticlesApiApiV2ArticlesArticleIdSourcesGetRequest>(
    operationName + nameOf(() => getArticleSources),
    getArticleSources,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/articles/{articleId}/sources
