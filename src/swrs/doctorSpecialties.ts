import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorSpecialtiesModel } from 'ch-api-client-typescript2/lib/models/doctor-specialties-model'
import { DoctorSpecialtyModel } from 'ch-api-client-typescript2/lib/models/doctor-specialty-model'
import { getDoctorSpecialties, getDoctorSpecialtyBySpecialtyId } from '../services/doctorSpecialties'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors/{doctorId}/specialties
export const getDoctorSpecialtiesSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorSpecialtiesModel, RestException>
) => {
  useGenericSWR<DoctorSpecialtiesModel, RestException, DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest>(
    operationName + nameOf(() => getDoctorSpecialties),
    getDoctorSpecialties,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorSpecialtiesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorSpecialtiesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorSpecialtiesModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest
  >(operationName + nameOf(() => getDoctorSpecialties), getDoctorSpecialties, config)
}

export const getDoctorSpecialtiesSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    DoctorSpecialtiesModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest
  >(operationName + nameOf(() => getDoctorSpecialties), getDoctorSpecialties, payload, shouldFetch)
}
// #endregion GET api/v2/doctors/{doctorId}/specialties

// #region GET api/v2/doctors/{doctorId}/specialties/{specialtyId}
export const getDoctorSpecialtyBySpecialtyIdSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorSpecialtyModel, RestException>
) => {
  return useGenericSWR<
    DoctorSpecialtyModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest
  >(
    operationName + nameOf(() => getDoctorSpecialtyBySpecialtyId),
    getDoctorSpecialtyBySpecialtyId,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorSpecialtyBySpecialtyIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorSpecialtyModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorSpecialtyModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest
  >(operationName + nameOf(() => getDoctorSpecialtyBySpecialtyId), getDoctorSpecialtyBySpecialtyId, config)
}
// #endregion GET api/v2/doctors/{doctorId}/specialties/{specialtyId}
