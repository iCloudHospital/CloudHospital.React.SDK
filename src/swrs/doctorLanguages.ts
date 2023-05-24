import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorLanguageModel } from 'ch-api-client-typescript2/lib/models/doctor-language-model'
import { DoctorLanguagesModel } from 'ch-api-client-typescript2/lib/models/doctor-languages-model'
import { getDoctorLanguageByLanguageCode, getDoctorLanguages } from '../services/doctorLanguages'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors/{doctorid}/languages
export const getDoctorLanguagesSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DoctorLanguagesModel, RestException, DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest>(
    operationName + nameOf(() => getDoctorLanguages),
    getDoctorLanguages,
    payload,
    shouldFetch
  )
}

export const getDoctorLanguagesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorLanguagesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DoctorLanguagesModel, RestException, DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest>(
    operationName + nameOf(() => getDoctorLanguages),
    getDoctorLanguages,
    config
  )
}

export const getDoctorLanguagesSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<DoctorLanguagesModel, RestException, DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest>(
    operationName + nameOf(() => getDoctorLanguages),
    getDoctorLanguages,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/doctors/{doctorid}/languages

// #region GET api/v2/doctors/{doctorId}/languages/{languageCode}
export const getDoctorLanguageByLanguageCodeSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorLanguageModel, RestException>
) => {
  return useGenericSWR<
    DoctorLanguageModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest
  >(
    operationName + nameOf(() => getDoctorLanguageByLanguageCode),
    getDoctorLanguageByLanguageCode,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorLanguageByLanguageCodeSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorLanguageModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorLanguageModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest
  >(operationName + nameOf(() => getDoctorLanguageByLanguageCode), getDoctorLanguageByLanguageCode, config)
}
// #endregion GET api/v2/doctors/{doctorId}/languages/{languageCode}
