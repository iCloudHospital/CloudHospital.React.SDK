import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  ConsultationsApi,
  ConsultationsModel,
  ConsultationModel,
  CreateConsultationCommand,
  UpdateConsultationCommand
} from 'ch-api-client-typescript2/lib'
import { ConsultationsSearchOption, ConsultationSearchOption } from '../models/consultations'
import { log } from '../utils/log'

const apiRoot = HttpClient.getBaseUrl()

export function loadConsultations(consultationsSearchOption: ConsultationsSearchOption): Promise<ConsultationsModel> {
  const { searchString, isOpen, isCompleted, status, consultationType, hospitalId, page, limit, lastRetrieved } =
    consultationsSearchOption
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsGet(
      searchString,
      isOpen,
      isCompleted,
      status,
      consultationType,
      hospitalId,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as ConsultationsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadConsultation(consultationSearchOption: ConsultationSearchOption): Promise<ConsultationModel> {
  const { consultationId, options } = consultationSearchOption
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdGet(consultationId, options)
    .then((res) => {
      return res.data as ConsultationModel
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

export function postConsultation(
  requestId: string,
  createConsultationCommand?: CreateConsultationCommand
): Promise<ConsultationModel> {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsRequestIdPost(requestId, createConsultationCommand)
    .then((res) => {
      log('post consultation: ', res.data)
      return res.data as ConsultationModel
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putConsultation(
  consultationId: string,
  updateConsultationCommand?: UpdateConsultationCommand
): Promise<ConsultationModel> {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdPut(consultationId, updateConsultationCommand)
    .then((res) => {
      log('put consultation: ', res.data)
      return res.data as ConsultationModel
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postConsultationPaid = async (consultationId: string): Promise<string> => {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdPaidPost(consultationId)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postConsultationPaymentKey = async (consultationId: string): Promise<string> => {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdPayPost(consultationId)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadConsultations,
  loadConsultation,
  postConsultation,
  putConsultation,
  postConsultationPaid,
  postConsultationPaymentKey
}
