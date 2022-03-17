import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { LanguageModel, LanguagesApi, LanguagesModel } from 'ch-api-client-typescript2/lib'
import { LanguageSearchOption, LanguagesSearchOption } from '../models/langauges'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export const loadLanguages = (languagesSearchOption: LanguagesSearchOption): Promise<LanguagesModel> => {
  const { id, name, code, description, page, limit, lastRetrieved } = languagesSearchOption
  return new LanguagesApi(configuration, apiRoot, instance)
    .apiV2LanguagesGet(id, name, code, description, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadLanguage = (languageSearchOption: LanguageSearchOption): Promise<LanguageModel> => {
  const { id, code } = languageSearchOption

  if (code) {
    return new LanguagesApi(configuration, apiRoot, instance)
      .apiV2LanguagesCodeGet(code)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new LanguagesApi(configuration, apiRoot, instance)
      .apiV2LanguagesIdGet(id!)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}

export default {
  loadLanguages,
  loadLanguage
}
