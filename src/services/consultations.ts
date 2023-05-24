import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

import {
  ConsultationsApi,
  ConsultationsApiApiV2ConsultationsConsultationIdGetRequest,
  ConsultationsApiApiV2ConsultationsConsultationIdPayPostRequest,
  ConsultationsApiApiV2ConsultationsConsultationIdPutRequest,
  ConsultationsApiApiV2ConsultationsGetRequest,
  ConsultationsApiApiV2ConsultationsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/consultations-api'
import { ConsultationModel } from 'ch-api-client-typescript2/lib/models/consultation-model'
import { ConsultationsModel } from 'ch-api-client-typescript2/lib/models/consultations-model'
import { log } from '../utils/log'

export const getConsultations = async (
  payload: ConsultationsApiApiV2ConsultationsGetRequest
): Promise<ConsultationsModel> => {
  return new ConsultationsApi(configuration, undefined, instance)
    .apiV2ConsultationsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getConsultationById = async (
  payload: ConsultationsApiApiV2ConsultationsConsultationIdGetRequest
): Promise<ConsultationModel> => {
  return new ConsultationsApi(configuration, undefined, instance)
    .apiV2ConsultationsConsultationIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      if (error.response.data === '') {
        const restException = {
          status: 404
        } as RestException
        throw restException
      }
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postConsultation = async (
  payload: ConsultationsApiApiV2ConsultationsRequestIdPostRequest
): Promise<ConsultationModel> => {
  return new ConsultationsApi(configuration, undefined, instance)
    .apiV2ConsultationsRequestIdPost(payload)
    .then((res) => {
      log('post consultation: ', res.data)
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putConsultation = async (
  payload: ConsultationsApiApiV2ConsultationsConsultationIdPutRequest
): Promise<ConsultationModel> => {
  return new ConsultationsApi(configuration, undefined, instance)
    .apiV2ConsultationsConsultationIdPut(payload)
    .then((res) => {
      log('put consultation: ', res.data)
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postConsultationPaymentKey = async (
  payload: ConsultationsApiApiV2ConsultationsConsultationIdPayPostRequest
): Promise<string> => {
  return new ConsultationsApi(configuration, undefined, instance)
    .apiV2ConsultationsConsultationIdPayPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const consultations = {
  getConsultations,
  getConsultationById,
  postConsultation,
  putConsultation,
  postConsultationPaymentKey
}

export default consultations
