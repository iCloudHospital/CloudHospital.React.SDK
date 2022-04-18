import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { ConsultationsApi, ConsultationsModel, ConsultationModel, CreateConsultationCommand, UpdateConsultationCommand } from 'ch-api-client-typescript2/lib'
import { ConsultationsSearchOption, ConsultationSearchOption } from '../models/consultations'
import { log } from '../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadConsultations(consultationsSearchOption: ConsultationsSearchOption): Promise<ConsultationsModel> {
  const { searchString, isOpen, isCompleted, status, consultationType, page, limit, lastRetrieved } =
    consultationsSearchOption
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsGet(searchString, isOpen, isCompleted, status, consultationType, page, limit, lastRetrieved)
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

export function cancelConsultation(consultationId: string): Promise<boolean> {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdCancelPut(consultationId)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postConsultation(
  requestId: string,
  createConsultationCommand: CreateConsultationCommand
): Promise<boolean> {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsRequestIdPost(requestId, createConsultationCommand)
    .then((res) => {
      log('post consultation: ', res.data)
      return res.data as boolean
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putConsultation(
  consultationId: string,
  updateConsultationCommand: UpdateConsultationCommand
): Promise<boolean> {
  return new ConsultationsApi(configuration, apiRoot, instance)
    .apiV2ConsultationsConsultationIdPut(consultationId, updateConsultationCommand)
    .then((res) => {
      log('put consultation: ', res.data)
      return res.data as boolean
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}


export const createSecret = async (consultationId: string): Promise<string> => {
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
  cancelConsultation,
  postConsultation,
  putConsultation,
  createSecret
}
