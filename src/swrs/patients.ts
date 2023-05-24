import { nameOf, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  PatientsApiApiV2PatientsAffiliationsHospitalIdDeleteRequest,
  PatientsApiApiV2PatientsAffiliationsHospitalIdPostRequest
} from 'ch-api-client-typescript2/lib/api/patients-api'
import { deletePatientAffiliation, postPatientAffiliation } from '../services/patients'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/patients/affiliations/{hospitalId}
export const postPatientAffiliationSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<boolean, RestException, PatientsApiApiV2PatientsAffiliationsHospitalIdPostRequest>(
    operationName + nameOf(() => postPatientAffiliation),
    postPatientAffiliation,
    config
  )
}

export const deletePatientAffiliationSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<boolean, RestException, PatientsApiApiV2PatientsAffiliationsHospitalIdDeleteRequest>(
    operationName + nameOf(() => deletePatientAffiliation),
    deletePatientAffiliation,
    config
  )
}
// #endregion POST api/v2/patients/affiliations/{hospitalId}
