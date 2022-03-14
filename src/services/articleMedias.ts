import { configuration, instance } from '../utils/interceptor'
import { RestException } from '../models/exceptions'
import { ArticlesApi, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { ArticleMediasSearchOption } from '../models/articleMedias'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region ArticlelMedias
export function loadArticleMedias(articleMediasSearchOption: ArticleMediasSearchOption): Promise<MediasModel> {
  const { articleId, id, mediaType, page, limit, lastRetrieved } = articleMediasSearchOption
  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdMediasGet(articleId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadArticleMedia(articleId: string, mediaId: string): Promise<MediaModel> {
  return new ArticlesApi(configuration, apiRoot, instance)
    .apiV2ArticlesArticleIdMediasMediaIdGet(articleId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticlelMedias

export default {
  loadArticleMedias,
  loadArticleMedia
}
