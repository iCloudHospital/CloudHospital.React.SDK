import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorEducationModel } from 'ch-api-client-typescript2/lib/models/doctor-education-model'
import { DoctorEducationsModel } from 'ch-api-client-typescript2/lib/models/doctor-educations-model'
import { getDoctorEducationById, getDoctorEducations } from '../services/doctorEducations'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors/{doctorid}/educations
export const getDoctorEducationsSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DoctorEducationsModel, RestException, DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest>(
    operationName + nameOf(() => getDoctorEducations),
    getDoctorEducations,
    payload,
    shouldFetch
  )
}

export const getDoctorEducationsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorEducationsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorEducationsModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest
  >(operationName + nameOf(() => getDoctorEducations), getDoctorEducations, config)
}

export const getDoctorEducationsSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    DoctorEducationsModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest
  >(operationName + nameOf(() => getDoctorEducations), getDoctorEducations, payload, shouldFetch)
}
// #endregion GET api/v2/doctors/{doctorid}/educations

// #region GET api/v2/doctors/{doctorid}/educations
export const getDoctorEducationByIdSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<
    DoctorEducationModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest
  >(operationName + nameOf(() => getDoctorEducationById), getDoctorEducationById, payload, shouldFetch)
}

export const getDoctorEducationByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorEducationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorEducationModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest
  >(operationName + nameOf(() => getDoctorEducationById), getDoctorEducationById, config)
}
// #endregion GET api/v2/doctors/{doctorid}/educations
