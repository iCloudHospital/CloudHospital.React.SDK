import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import { CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib'
import { getCommunicationUser } from '../services/communications'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/communicatioms
export const getCommunicationUserSWR = (
  operationName = '',
  payload: undefined,
  shouldFetch?: boolean,
  config?: SWRConfiguration<CommunicationUserTokenModel, RestException>
) => {
  return useGenericSWR<CommunicationUserTokenModel, RestException, undefined>(
    operationName + nameOf(() => getCommunicationUser),
    getCommunicationUser,
    payload,
    shouldFetch,
    config
  )
}

export const getCommunicationUserSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<CommunicationUserTokenModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<CommunicationUserTokenModel, RestException, never>(
    operationName + nameOf(() => getCommunicationUser),
    getCommunicationUser,
    config
  )
}
// #endregion GET api/v2/communicatioms
