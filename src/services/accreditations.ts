import {
  AccreditationsApi,
  AccreditationsApiApiV2AccreditationsAccreditationIdGetRequest,
  AccreditationsApiApiV2AccreditationsGetRequest
} from 'ch-api-client-typescript2/lib/api/accreditations-api'
import { AccreditationModel } from 'ch-api-client-typescript2/lib/models/accreditation-model'
import { AccreditationsModel } from 'ch-api-client-typescript2/lib/models/accreditations-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const getAccreditations = async (
  payload?: AccreditationsApiApiV2AccreditationsGetRequest
): Promise<AccreditationsModel> => {
  return new AccreditationsApi(configuration, undefined, instance)
    .apiV2AccreditationsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getAccreditation = async (
  payload: AccreditationsApiApiV2AccreditationsAccreditationIdGetRequest
): Promise<AccreditationModel> => {
  return new AccreditationsApi(configuration, undefined, instance)
    .apiV2AccreditationsAccreditationIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const accreditations = {
  getAccreditations,
  getAccreditation
}

export default accreditations
