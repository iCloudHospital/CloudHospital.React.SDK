import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { CurrentLogin, ExternalLogins } from '../models/auths'
import { IdentityError } from '../models/exceptions'
import externalLogins, { deleteExternalLogin, getExternalLogins, postExternalLogin } from '../services/externalLogins'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v1/externalLogins
export const postExternalLoginSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], CurrentLogin>(
    operationName + nameOf(() => postExternalLogin),
    postExternalLogin,
    config
  )
}
// #endregion POST api/v1/externalLogins

// #region GET api/v1/externalLogins
export const getExternalLoginsSWR = (
  operationName = '',
  payload: undefined,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ExternalLogins, IdentityError[]>
) => {
  useGenericSWR<ExternalLogins, IdentityError[], undefined>(
    operationName + nameOf(() => getExternalLogins),
    getExternalLogins,
    payload,
    shouldFetch,
    config
  )
}

export const getExternalLoginsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ExternalLogins, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<ExternalLogins, IdentityError[], never>(
    operationName + nameOf(() => getExternalLogins),
    getExternalLogins,
    config
  )
}
// #endregion GET api/v1/externalLogins

// #region DELETE api/v1/externalLogins
export const deleteExternalLoginSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], CurrentLogin>(
    operationName + nameOf(() => externalLogins.deleteExternalLogin),
    deleteExternalLogin,
    config
  )
}
// #endregion DELETE api/v1/externalLogins
