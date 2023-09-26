import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  ConsultationsApiApiV2ConsultationsConsultationIdGetRequest,
  ConsultationsApiApiV2ConsultationsConsultationIdPayPostRequest,
  ConsultationsApiApiV2ConsultationsConsultationIdPutRequest,
  ConsultationsApiApiV2ConsultationsGetRequest,
  ConsultationsApiApiV2ConsultationsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/consultations-api'
import { ConsultationModel } from 'ch-api-client-typescript2/lib/models/consultation-model'
import { ConsultationsModel } from 'ch-api-client-typescript2/lib/models/consultations-model'
import {
  getConsultationById,
  getConsultations,
  postConsultation,
  postConsultationPaymentKey,
  putConsultation
} from '@services/consultations'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/consultations/{requestId}
export const postConsultationSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ConsultationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ConsultationModel,
    RestException,
    ConsultationsApiApiV2ConsultationsRequestIdPostRequest
  >(operationName + nameOf(() => postConsultation), postConsultation, config)
}
// #endregion POST api/v2/consultations/{requestId}

// #region GET api/v2/consultations
export const getConsultationsSWR = (
  operationName = '',
  payload: ConsultationsApiApiV2ConsultationsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ConsultationsModel, RestException>
) => {
  return useGenericSWR<ConsultationsModel, RestException, ConsultationsApiApiV2ConsultationsGetRequest>(
    operationName + nameOf(() => getConsultations),
    getConsultations,
    payload,
    shouldFetch,
    config
  )
}

export const getConsultationsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ConsultationsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ConsultationsModel, RestException, ConsultationsApiApiV2ConsultationsGetRequest>(
    operationName + nameOf(() => getConsultations),
    getConsultations,
    config
  )
}

export const getConsultationsSwrInfinite = (
  operationName = '',
  payload?: ConsultationsApiApiV2ConsultationsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<ConsultationsModel, RestException, ConsultationsApiApiV2ConsultationsGetRequest>(
    operationName + nameOf(() => getConsultations),
    getConsultations,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/consultations

// #region GET api/v2/consultations/{consultationId}
export const getConsultationByIdSWR = (
  operationName = '',
  payload: ConsultationsApiApiV2ConsultationsConsultationIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ConsultationModel, RestException>
) => {
  return useGenericSWR<ConsultationModel, RestException, ConsultationsApiApiV2ConsultationsConsultationIdGetRequest>(
    operationName + nameOf(() => getConsultationById),
    getConsultationById,
    payload,
    shouldFetch,
    config
  )
}

export const getConsultationByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ConsultationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ConsultationModel,
    RestException,
    ConsultationsApiApiV2ConsultationsConsultationIdGetRequest
  >(operationName + nameOf(() => getConsultationById), getConsultationById, config)
}
// #endregion GET api/v2/consultations/{consultationId}

// #region PUT api/v2/consultations/{consultationId}
export const updateConsultationSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ConsultationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ConsultationModel,
    RestException,
    ConsultationsApiApiV2ConsultationsConsultationIdPutRequest
  >(operationName + nameOf(() => putConsultation), putConsultation, config)
}
// #endregion PUT api/v2/consultations/{consultationId}

// #region POST api/v2/consultations/{consultationId}/pay
export const postConsultationPaymentKeySWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<string, RestException, undefined, string>
) => {
  return useGenericSWRMutation<string, RestException, ConsultationsApiApiV2ConsultationsConsultationIdPayPostRequest>(
    operationName + nameOf(() => postConsultationPaymentKey),
    postConsultationPaymentKey,
    config
  )
}
// #endregion POST api/v2/consultations/{consultationId}/pay
