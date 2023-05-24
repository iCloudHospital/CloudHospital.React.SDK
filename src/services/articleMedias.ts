import {
  ArticlesApi,
  ArticlesApiApiV2ArticlesArticleIdMediasGetRequest,
  ArticlesApiApiV2ArticlesArticleIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/articles-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region ArticlelMedias
export const loadArticleMedias = async (
  payload: ArticlesApiApiV2ArticlesArticleIdMediasGetRequest
): Promise<MediasModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadArticleMedia = async (
  payload: ArticlesApiApiV2ArticlesArticleIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new ArticlesApi(configuration, undefined, instance)
    .apiV2ArticlesArticleIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ArticlelMedias

const articleMedias = {
  loadArticleMedias,
  loadArticleMedia
}

export default articleMedias
