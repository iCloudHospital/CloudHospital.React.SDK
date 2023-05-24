import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest,
  DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest,
  DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/doctor-affiliations-api'
import { DoctorAffiliationModel } from 'ch-api-client-typescript2/lib/models/doctor-affiliation-model'
import { DoctorAffiliationsModel } from 'ch-api-client-typescript2/lib/models/doctor-affiliations-model'
import {
  getDoctorAffiliationById,
  getDoctorAffiliationBySlug,
  getDoctorAffiliations
} from '../services/doctorAffiliations'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctoraffiliations
export const getDoctorAffiliationsSWR = (
  operationName = '',
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DoctorAffiliationsModel, RestException, DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest>(
    operationName + nameOf(() => getDoctorAffiliations),
    getDoctorAffiliations,
    payload,
    shouldFetch
  )
}

export const getDoctorAffiliationsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorAffiliationsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorAffiliationsModel,
    RestException,
    DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest
  >(operationName + nameOf(() => getDoctorAffiliations), getDoctorAffiliations, config)
}

export const getDoctorAffiliationsSWRInfinite = (
  operationName = '',
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    DoctorAffiliationsModel,
    RestException,
    DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest
  >(operationName + nameOf(() => getDoctorAffiliations), getDoctorAffiliations, payload, shouldFetch)
}
// #endregion GET api/v2/doctoraffiliations

// #region GET api/v2/doctoraffiliations/{doctorAffilicationId}
export const getDoctorAffiliationByIdSWR = (
  operationName = '',
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DoctorAffiliationModel, RestException, DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest>(
    operationName + nameOf(() => getDoctorAffiliationById),
    getDoctorAffiliationById,
    payload,
    shouldFetch
  )
}

export const getDoctorAffiliationByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorAffiliationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorAffiliationModel,
    RestException,
    DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest
  >(operationName + nameOf(() => getDoctorAffiliationById), getDoctorAffiliationById, config)
}
// #endregion GET api/v2/doctoraffiliations/{doctorAffilicationId}

// #region GET api/v2/doctoraffiliations/{slug}
export const getDoctorAffiliationBySlugSWR = (
  operationName = '',
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<
    DoctorAffiliationModel,
    RestException,
    DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest
  >(operationName + nameOf(() => getDoctorAffiliationBySlug), getDoctorAffiliationBySlug, payload, shouldFetch)
}

export const getDoctorAffiliationBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorAffiliationModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorAffiliationModel,
    RestException,
    DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest
  >(operationName + nameOf(() => getDoctorAffiliationBySlug), getDoctorAffiliationBySlug, config)
}
// #endregion GET api/v2/doctoraffiliations/{slug}
