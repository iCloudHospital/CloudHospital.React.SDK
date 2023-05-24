import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalSpecialtiesModel } from 'ch-api-client-typescript2/lib/models/hospital-specialties-model'
import { HospitalSpecialtiesSimpleModel } from 'ch-api-client-typescript2/lib/models/hospital-specialties-simple-model'
import { HospitalSpecialtyModel } from 'ch-api-client-typescript2/lib/models/hospital-specialty-model'
import {
  getHospitalSpecialties,
  getHospitalSpecialtiesSimple,
  getHospitalSpecialtyBySpecialtyId
} from '../services/hospitalSpecialties'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/hospitals/{hospitalId}/specialties
export const getHospitalSpecialtiesSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalSpecialtiesModel, RestException>
) => {
  useGenericSWR<HospitalSpecialtiesModel, RestException, HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest>(
    operationName + nameOf(() => getHospitalSpecialties),
    getHospitalSpecialties,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalSpecialtiesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalSpecialtiesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HospitalSpecialtiesModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest
  >(operationName + nameOf(() => getHospitalSpecialties), getHospitalSpecialties, config)
}

export const getHospitalSpecialtiesSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    HospitalSpecialtiesModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest
  >(operationName + nameOf(() => getHospitalSpecialties), getHospitalSpecialties, payload, shouldFetch)
}
// #endregion GET api/v2/hospitals/{hospitalId}/specialties

// #region GET api/v2/hospitals/{hospitalId}/specialtiessimple
export const getHospitalSpecialtiesSimpleSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalSpecialtiesSimpleModel, RestException>
) => {
  useGenericSWR<
    HospitalSpecialtiesSimpleModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest
  >(
    operationName + nameOf(() => getHospitalSpecialtiesSimple),
    getHospitalSpecialtiesSimple,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalSpecialtiesSimpleSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalSpecialtiesSimpleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HospitalSpecialtiesSimpleModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest
  >(operationName + nameOf(() => getHospitalSpecialtiesSimple), getHospitalSpecialtiesSimple, config)
}

export const getHospitalSpecialtiesSimpleSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    HospitalSpecialtiesSimpleModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest
  >(operationName + nameOf(() => getHospitalSpecialtiesSimple), getHospitalSpecialtiesSimple, payload, shouldFetch)
}
// #endregion GET api/v2/hospitals/{hospitalId}/specialtiessimple

// #region GET api/v2/hospitals/{hospitalId}/specialties/{specialtyId}
export const getHospitalSpecialtyBySpecialtyIdSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalSpecialtyModel, RestException>
) => {
  return useGenericSWR<
    HospitalSpecialtyModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest
  >(
    operationName + nameOf(() => getHospitalSpecialtyBySpecialtyId),
    getHospitalSpecialtyBySpecialtyId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalSpecialtyBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalSpecialtyModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HospitalSpecialtyModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest
  >(operationName + nameOf(() => getHospitalSpecialtyBySpecialtyId), getHospitalSpecialtyBySpecialtyId, config)
}
// #endregion GET api/v2/hospitals/{hospitalId}/specialties/{specialtyId}
