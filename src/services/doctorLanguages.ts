import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorLanguageModel } from 'ch-api-client-typescript2/lib/models/doctor-language-model'
import { DoctorLanguagesModel } from 'ch-api-client-typescript2/lib/models/doctor-languages-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const getDoctorLanguages = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdLanguagesGetRequest
): Promise<DoctorLanguagesModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdLanguagesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorLanguageByLanguageCode = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdLanguagesLanguageCodeGetRequest
): Promise<DoctorLanguageModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdLanguagesLanguageCodeGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorLanguages = {
  getDoctorLanguages,
  getDoctorLanguageByLanguageCode
}

export default doctorLanguages
