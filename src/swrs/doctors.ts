import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import { getDoctorByDoctorId, getDoctors, getDoctorsSimple } from '@services/doctors'
import {
  DoctorsApiApiV2DoctorsDoctorIdGetRequest,
  DoctorsApiApiV2DoctorsGetRequest,
  DoctorsApiApiV2DoctorsSimpleGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorModel } from 'ch-api-client-typescript2/lib/models/doctor-model'
import { DoctorsModel } from 'ch-api-client-typescript2/lib/models/doctors-model'
import { DoctorsSimpleModel } from 'ch-api-client-typescript2/lib/models/doctors-simple-model'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors
export const getDoctorsSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorsModel, RestException>
) => {
  useGenericSWR<DoctorsModel, RestException, DoctorsApiApiV2DoctorsGetRequest>(
    operationName + nameOf(() => getDoctors),
    getDoctors,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DoctorsModel, RestException, DoctorsApiApiV2DoctorsGetRequest>(
    operationName + nameOf(() => getDoctors),
    getDoctors,
    config
  )
}

export const getDoctorsSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<DoctorsModel, RestException, DoctorsApiApiV2DoctorsGetRequest>(
    operationName + nameOf(() => getDoctors),
    getDoctors,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/doctors

// #region GET api/v2/doctors
export const getDoctorsSimpleSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsSimpleGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorsSimpleModel, RestException>
) => {
  useGenericSWR<DoctorsSimpleModel, RestException, DoctorsApiApiV2DoctorsSimpleGetRequest>(
    operationName + nameOf(() => getDoctorsSimple),
    getDoctorsSimple,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorsSimpleSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorsSimpleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DoctorsSimpleModel, RestException, DoctorsApiApiV2DoctorsSimpleGetRequest>(
    operationName + nameOf(() => getDoctorsSimple),
    getDoctorsSimple,
    config
  )
}

export const getDoctorsSimpleSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsSimpleGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<DoctorsSimpleModel, RestException, DoctorsApiApiV2DoctorsSimpleGetRequest>(
    operationName + nameOf(() => getDoctorsSimple),
    getDoctorsSimple,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/doctors

// #region GET api/v2/doctors/{doctorId}
export const getDoctorByDoctorIdSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorModel, RestException>
) => {
  return useGenericSWR<DoctorModel, RestException, DoctorsApiApiV2DoctorsDoctorIdGetRequest>(
    operationName + nameOf(() => getDoctorByDoctorId),
    getDoctorByDoctorId,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorsWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DoctorModel, RestException, DoctorsApiApiV2DoctorsDoctorIdGetRequest>(
    operationName + nameOf(() => getDoctorByDoctorId),
    getDoctorByDoctorId,
    config
  )
}
// #endregion GET api/v2/doctors/{doctorId}
