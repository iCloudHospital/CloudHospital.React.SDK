import {
  FaqsApi,
  FaqsApiApiV2FaqsFaqIdGetRequest,
  FaqsApiApiV2FaqsFaqIdMediasGetRequest,
  FaqsApiApiV2FaqsFaqIdMediasMediaIdGetRequest,
  FaqsApiApiV2FaqsGetRequest,
  FaqsApiApiV2FaqsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/faqs-api'
import { FaqModel } from 'ch-api-client-typescript2/lib/models/faq-model'
import { FaqsModel } from 'ch-api-client-typescript2/lib/models/faqs-model'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Faqs
export const loadFaqs = async (payload?: FaqsApiApiV2FaqsGetRequest): Promise<FaqsModel> => {
  return new FaqsApi(configuration, undefined, instance)
    .apiV2FaqsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadFaq = async (payload: FaqsApiApiV2FaqsFaqIdGetRequest): Promise<FaqModel> => {
  return new FaqsApi(configuration, undefined, instance)
    .apiV2FaqsFaqIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
export const loadFaqBySlug = async (payload: FaqsApiApiV2FaqsSlugGetRequest): Promise<FaqModel> => {
  return new FaqsApi(configuration, undefined, instance)
    .apiV2FaqsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Faqs

// #region FaqMedias
export const getFaqMedias = async (payload: FaqsApiApiV2FaqsFaqIdMediasGetRequest): Promise<MediasModel> => {
  return new FaqsApi(configuration, undefined, instance)
    .apiV2FaqsFaqIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getFaqMedia = async (payload: FaqsApiApiV2FaqsFaqIdMediasMediaIdGetRequest): Promise<MediaModel> => {
  return new FaqsApi(configuration, undefined, instance)
    .apiV2FaqsFaqIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion FaqMedias

const faqs = {
  loadFaqs,
  loadFaq,
  loadFaqBySlug,
  getFaqMedias,
  getFaqMedia
}

export default faqs
