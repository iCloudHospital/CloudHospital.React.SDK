import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  ProfilesApiApiV2ProfilesChangeemailPostRequest,
  ProfilesApiApiV2ProfilesPostRequest,
  ProfilesApiApiV2ProfilesProfileIdDeleteRequest,
  ProfilesApiApiV2ProfilesPutRequest
} from 'ch-api-client-typescript2/lib/api/profiles-api'
import { PatientModel } from 'ch-api-client-typescript2/lib/models/patient-model'
import { changeEmail, deleteProfile, getProfile, postProfile, putProfile } from '../services/profiles'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/profiles
export const postProfileSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<PatientModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<PatientModel, RestException, ProfilesApiApiV2ProfilesPostRequest>(
    operationName + nameOf(() => postProfile),
    postProfile,
    config
  )
}
// #endregion POST api/v2/profiles

// #region POST api/v2/profiles/changeemail
export const updateEmailSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<boolean, RestException, ProfilesApiApiV2ProfilesChangeemailPostRequest>(
    operationName + nameOf(() => changeEmail),
    changeEmail,
    config
  )
}
// #endregion POST api/v2/profiles/changeemail

// #region GET api/v2/profiles
export const getProfileSWR = (
  operationName = '',
  payload: undefined,
  shouldFetch?: boolean,
  config?: SWRConfiguration<PatientModel, RestException>
) => {
  return useGenericSWR<PatientModel, RestException, undefined>(
    operationName + nameOf(() => getProfile),
    getProfile,
    payload,
    shouldFetch,
    config
  )
}

export const getProfileSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<PatientModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<PatientModel, RestException, never>(
    operationName + nameOf(() => getProfile),
    getProfile,
    config
  )
}
// #endregion GET api/v2/profiles

// #region PUT api/v2/profiles
export const putProfileSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<PatientModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<PatientModel, RestException, ProfilesApiApiV2ProfilesPutRequest>(
    operationName + nameOf(() => putProfile),
    putProfile,
    config
  )
}
// #endregion PUT api/v2/profiles

// #region DELETE api/v2/profiles
export const deleteProfileSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<boolean, RestException, ProfilesApiApiV2ProfilesProfileIdDeleteRequest>(
    operationName + nameOf(() => deleteProfile),
    deleteProfile,
    config
  )
}
// #endregion DELETE api/v2/profiles
