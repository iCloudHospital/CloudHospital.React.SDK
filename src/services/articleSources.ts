import { configuration, instance } from '../utils/interceptor'
import { RestException } from '../models/exceptions'
import { ArticlesApi, ArticleSourcesModel, SourceModel } from 'ch-api-client-typescript2/lib'
import { ArticleSourcesSearchOption } from '../models/articleSources'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region ArticleSources
export function loadArticleSources(
  articleSourcesSearchOption: ArticleSourcesSearchOption
): Promise<ArticleSourcesModel> {
  const { articleId, page, limit, lastRetrieved } = articleSourcesSearchOption

  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdSourcesGet(articleId, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as ArticleSourcesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadArticleSource(articleId: string, sourceId: string): Promise<SourceModel> {
  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdSourcesSourceIdGet(articleId, sourceId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticleSources

export default {
  loadArticleSources,
  loadArticleSource
}
