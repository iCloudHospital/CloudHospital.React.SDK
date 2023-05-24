import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  HospitalsApiApiV2HospitalsGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdGetRequest,
  HospitalsApiApiV2HospitalsSimpleGetRequest,
  HospitalsApiApiV2HospitalsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalModel } from 'ch-api-client-typescript2/lib/models/hospital-model'
import { HospitalsModel } from 'ch-api-client-typescript2/lib/models/hospitals-model'
import { HospitalsSimpleModel } from 'ch-api-client-typescript2/lib/models/hospitals-simple-model'
import { getHospitalByHospitalId, getHospitalBySlug, getHospitals, getHospitalsSimple } from '../services/hospitals'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

//#region GET api/v2/hospitals
export const getHospitalsSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalsModel, RestException>
) => {
  useGenericSWR<HospitalsModel, RestException, HospitalsApiApiV2HospitalsGetRequest>(
    operationName + nameOf(() => getHospitals),
    getHospitals,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalsModel, RestException, HospitalsApiApiV2HospitalsGetRequest>(
    operationName + nameOf(() => getHospitals),
    getHospitals,
    config
  )
}

export const getHospitalsSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<HospitalsModel, RestException, HospitalsApiApiV2HospitalsGetRequest>(
    operationName + nameOf(() => getHospitals),
    getHospitals,
    payload,
    shouldFetch
  )
}
//#endregion api/v2/hospitals GET

//#region GET api/v2/hospitalssimple
export const getHospitalsSimpleSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsSimpleGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalsSimpleModel, RestException>
) => {
  useGenericSWR<HospitalsSimpleModel, RestException, HospitalsApiApiV2HospitalsSimpleGetRequest>(
    operationName + nameOf(() => getHospitalsSimple),
    getHospitalsSimple,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalsSimpleSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalsSimpleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalsSimpleModel, RestException, HospitalsApiApiV2HospitalsSimpleGetRequest>(
    operationName + nameOf(() => getHospitalsSimple),
    getHospitalsSimple,
    config
  )
}

export const getHospitalsSimpleSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsSimpleGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<HospitalsSimpleModel, RestException, HospitalsApiApiV2HospitalsSimpleGetRequest>(
    operationName + nameOf(() => getHospitalsSimple),
    getHospitalsSimple,
    payload,
    shouldFetch
  )
}
//#endregion GET api/v2/hospitalssimple

//#region GET api/v2/hospitals/{hospitalId}
export const getHospitalByHospitalIdSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalModel, RestException>
) => {
  return useGenericSWR<HospitalModel, RestException, HospitalsApiApiV2HospitalsHospitalIdGetRequest>(
    operationName + nameOf(() => getHospitalByHospitalId),
    getHospitalByHospitalId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalByHospitalIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalModel, RestException, HospitalsApiApiV2HospitalsHospitalIdGetRequest>(
    operationName + nameOf(() => getHospitalByHospitalId),
    getHospitalByHospitalId,
    config
  )
}
//#endregion GET api/v2/hospitals/{hospitalId}

//#region GET api/v2/hospitals/slug/{slug}
export const getHospitalBySlugSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalModel, RestException>
) => {
  return useGenericSWR<HospitalModel, RestException, HospitalsApiApiV2HospitalsSlugGetRequest>(
    operationName + nameOf(() => getHospitalBySlug),
    getHospitalBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<HospitalModel, RestException, HospitalsApiApiV2HospitalsSlugGetRequest>(
    operationName + nameOf(() => getHospitalBySlug),
    getHospitalBySlug,
    config
  )
}
//#endregion GET api/v2/hospitals/slug/{slug}
