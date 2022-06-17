import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { ArticlesApi, ArticleContributorsModel, ArticleContributorModel } from 'ch-api-client-typescript2/lib'
import { ArticleContributorsSearchOption } from '../models/articleContributors'

const apiRoot = process.env.API_ROOT

// #region ArticleContributors
export function loadArticleContributors(
  articleContributorsSearchOption: ArticleContributorsSearchOption
): Promise<ArticleContributorsModel> {
  const {
    articleId,
    articleName,
    contributorId,
    contributorName,
    email,
    description,
    website,
    contributionType,
    page,
    limit,
    lastRetrieved
  } = articleContributorsSearchOption

  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdContributorsGet(
      articleId,
      articleName,
      contributorId,
      contributorName,
      email,
      description,
      website,
      contributionType,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as ArticleContributorsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadArticleContributor(articleId: string, contributorId: string): Promise<ArticleContributorModel> {
  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdContributorsContributorIdGet(articleId, contributorId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticleContributors

export default {
  loadArticleContributors,
  loadArticleContributor
}
