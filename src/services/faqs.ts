import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { FaqsApi, FaqsModel, FaqModel, MediaModel, MediasModel } from 'ch-api-client-typescript2/lib'
import { FaqMediasSearchOption, FaqSearchOption, FaqsSearchOption } from '../models/faqs'

const apiRoot = process.env.API_ROOT

// #region Faqs
export function loadFaqs(faqsSearchOption: FaqsSearchOption): Promise<FaqsModel> {
  const {
    id,
    title,
    content,
    categoryId,
    hospitalId,
    hospitalName,
    languageCode,
    showHidden,
    page,
    limit,
    lastRetrieved
  } = faqsSearchOption
  return new FaqsApi(configuration, apiRoot, instance)
    .apiV2FaqsGet(
      id,
      title,
      content,
      categoryId,
      hospitalId,
      hospitalName,
      languageCode,
      showHidden,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as FaqsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadFaq(faqSearchOption: FaqSearchOption): Promise<FaqModel> {
  const { faqId, slug, languageCode } = faqSearchOption
  if (slug) {
    return new FaqsApi(configuration, apiRoot, instance)
      .apiV2FaqsSlugGet(slug, languageCode)
      .then((res) => {
        return res.data as FaqModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new FaqsApi(configuration, apiRoot, instance)
      .apiV2FaqsFaqIdGet(faqId, languageCode)
      .then((res) => {
        return res.data as FaqModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Faqs

// #region FaqMedias
export function getFaqMedias(faqMediasSearchOption: FaqMediasSearchOption): Promise<MediasModel> {
  const { faqId, id, mediaType, page, limit, lastRetrieved } = faqMediasSearchOption
  return new FaqsApi(configuration, apiRoot, instance)
    .apiV2FaqsFaqIdMediasGet(faqId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function getFaqMedia(faqId: string, mediaId: string): Promise<MediaModel> {
  return new FaqsApi(configuration, apiRoot, instance)
    .apiV2FaqsFaqIdMediasMediaIdGet(faqId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion FaqMedias

export default {
  loadFaqs,
  loadFaq,

  getFaqMedias,
  getFaqMedia
}
