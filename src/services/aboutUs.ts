import {
  AboutUsApi,
  AboutUsApiApiV2AboutusHospitalIdGetRequest,
  AboutUsApiApiV2AboutusSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/about-us-api'
import { AboutUsPageModel } from 'ch-api-client-typescript2/lib/models/about-us-page-model'
import { RestException } from '../models'
import { configuration, instance } from './HttpClient'

export const getAboutUsPageById = async (
  payload: AboutUsApiApiV2AboutusHospitalIdGetRequest
): Promise<AboutUsPageModel> => {
  return new AboutUsApi(configuration, undefined, instance)
    .apiV2AboutusHospitalIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getAboutUsPageBySlug = async (
  payload: AboutUsApiApiV2AboutusSlugGetRequest
): Promise<AboutUsPageModel> => {
  return new AboutUsApi(configuration, undefined, instance)
    .apiV2AboutusSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const aboutUs = {
  getAboutUsPageById,
  getAboutUsPageBySlug
}

export default aboutUs
