import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import { ContributorsApiApiV2ContributorsGetRequest } from 'ch-api-client-typescript2/lib/api/contributors-api'
import { ContributorsModel } from 'ch-api-client-typescript2/lib/models/contributors-model'
import { getContributors } from '@services/contributors'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/contributors
export const getContributorsSWR = (
  operationName = '',
  payload: ContributorsApiApiV2ContributorsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ContributorsModel, RestException>
) => {
  return useGenericSWR<ContributorsModel, RestException, ContributorsApiApiV2ContributorsGetRequest>(
    operationName + nameOf(() => getContributors),
    getContributors,
    payload,
    shouldFetch,
    config
  )
}

export const getContributorsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ContributorsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ContributorsModel, RestException, ContributorsApiApiV2ContributorsGetRequest>(
    operationName + nameOf(() => getContributors),
    getContributors,
    config
  )
}

export const getContributorsSWRInfinite = (
  operationName = '',
  payload: ContributorsApiApiV2ContributorsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<ContributorsModel, RestException, ContributorsApiApiV2ContributorsGetRequest>(
    operationName + nameOf(() => getContributors),
    getContributors,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/contributors
