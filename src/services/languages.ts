import {
  LanguagesApi,
  LanguagesApiApiV2LanguagesCodeGetRequest,
  LanguagesApiApiV2LanguagesGetRequest
} from 'ch-api-client-typescript2/lib/api/languages-api'
import { LanguageModel } from 'ch-api-client-typescript2/lib/models/language-model'
import { LanguagesModel } from 'ch-api-client-typescript2/lib/models/languages-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const getLanguages = async (payload?: LanguagesApiApiV2LanguagesGetRequest): Promise<LanguagesModel> => {
  return new LanguagesApi(configuration, undefined, instance)
    .apiV2LanguagesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getLanguageByCode = async (payload: LanguagesApiApiV2LanguagesCodeGetRequest): Promise<LanguageModel> => {
  return new LanguagesApi(configuration, undefined, instance)
    .apiV2LanguagesCodeGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const languages = {
  getLanguages,
  getLanguageByCode
}

export default languages
