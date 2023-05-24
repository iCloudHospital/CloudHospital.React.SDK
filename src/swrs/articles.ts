import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  ArticlesApiApiV2ArticlesArticleIdGetRequest,
  ArticlesApiApiV2ArticlesGetRequest,
  ArticlesApiApiV2ArticlesSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/articles-api'
import { ArticleModel } from 'ch-api-client-typescript2/lib/models/article-model'
import { ArticlesModel } from 'ch-api-client-typescript2/lib/models/articles-model'
import { getArticleById, getArticleBySlug, getArticles } from '../services/articles'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/articles
export const getArticlesSWR = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ArticlesModel, RestException>
) => {
  useGenericSWR<ArticlesModel, RestException, ArticlesApiApiV2ArticlesGetRequest>(
    operationName + nameOf(() => getArticles),
    getArticles,
    payload,
    shouldFetch,
    config
  )
}

export const getArticlesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ArticlesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ArticlesModel, RestException, ArticlesApiApiV2ArticlesGetRequest>(
    operationName + nameOf(() => getArticles),
    getArticles,
    config
  )
}

export const getArticlesSWRInfinite = (
  operationName = '',
  payload?: ArticlesApiApiV2ArticlesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<ArticlesModel, RestException, ArticlesApiApiV2ArticlesGetRequest>(
    operationName + nameOf(() => getArticles),
    getArticles,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/articles

// #region GET api/v2/articles/{articleId}
export const getArticleByIdSWR = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesArticleIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ArticleModel, RestException>
) => {
  return useGenericSWR<ArticleModel, RestException, ArticlesApiApiV2ArticlesArticleIdGetRequest>(
    operationName + nameOf(() => getArticleById),
    getArticleById,
    payload,
    shouldFetch,
    config
  )
}

export const getArticleBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ArticleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ArticleModel, RestException, ArticlesApiApiV2ArticlesArticleIdGetRequest>(
    operationName + nameOf(() => getArticleById),
    getArticleById,
    config
  )
}
// #endregion GET api/v2/articles/{articleId}

// #region GET api/v2/articles/slug/{articleSlug}
export const getArticleBySlugSWR = (
  operationName = '',
  payload: ArticlesApiApiV2ArticlesSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ArticleModel, RestException>
) => {
  return useGenericSWR<ArticleModel, RestException, ArticlesApiApiV2ArticlesSlugGetRequest>(
    operationName + nameOf(() => getArticleBySlug),
    getArticleBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getArticlBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ArticleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ArticleModel, RestException, ArticlesApiApiV2ArticlesSlugGetRequest>(
    operationName + nameOf(() => getArticleBySlug),
    getArticleBySlug,
    config
  )
}
// #endregion GET api/v2/articles/slug/{articleSlug}
