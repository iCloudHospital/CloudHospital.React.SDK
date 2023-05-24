import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  LanguagesApiApiV2LanguagesCodeGetRequest,
  LanguagesApiApiV2LanguagesGetRequest
} from 'ch-api-client-typescript2/lib/api/languages-api'
import { LanguageModel } from 'ch-api-client-typescript2/lib/models/language-model'
import { LanguagesModel } from 'ch-api-client-typescript2/lib/models/languages-model'
import { getLanguageByCode, getLanguages } from '../services/languages'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/languages
export const getLanguagesSWR = (
  operationName = '',
  payload: LanguagesApiApiV2LanguagesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<LanguagesModel, RestException>
) => {
  useGenericSWR<LanguagesModel, RestException, LanguagesApiApiV2LanguagesGetRequest>(
    operationName + nameOf(() => getLanguages),
    getLanguages,
    payload,
    shouldFetch,
    config
  )
}

export const getLanguagesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<LanguagesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<LanguagesModel, RestException, LanguagesApiApiV2LanguagesGetRequest>(
    operationName + nameOf(() => getLanguages),
    getLanguages,
    config
  )
}

export const getLanguagesSWRInfinite = (
  operationName = '',
  payload?: LanguagesApiApiV2LanguagesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<LanguagesModel, RestException, LanguagesApiApiV2LanguagesGetRequest>(
    operationName + nameOf(() => getLanguages),
    getLanguages,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/languages

// #region GET api/v2/languages/{code}
export const getLanguageByCodeSWR = (
  operationName = '',
  payload: LanguagesApiApiV2LanguagesCodeGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<LanguageModel, RestException>
) => {
  return useGenericSWR<LanguageModel, RestException, LanguagesApiApiV2LanguagesCodeGetRequest>(
    operationName + nameOf(() => getLanguageByCode),
    getLanguageByCode,
    payload,
    shouldFetch,
    config
  )
}

export const getLanguageBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<LanguageModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<LanguageModel, RestException, LanguagesApiApiV2LanguagesCodeGetRequest>(
    operationName + nameOf(() => getLanguageByCode),
    getLanguageByCode,
    config
  )
}
// #endregion GET api/v2/languages/{code}
