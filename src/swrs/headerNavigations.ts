import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import { HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest } from 'ch-api-client-typescript2/lib/api/header-navigations-api'
import { HeaderNavigationItemModel } from 'ch-api-client-typescript2/lib/models/header-navigation-item-model'
import { getHeaderNavigations } from '../services/headerNavigations'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/headernavigations/{languageCode}
export const getHeaderNavigationsSWR = (
  operationName = '',
  payload: HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HeaderNavigationItemModel[], RestException>
) => {
  useGenericSWR<
    HeaderNavigationItemModel[],
    RestException,
    HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest
  >(operationName + nameOf(() => getHeaderNavigations), getHeaderNavigations, payload, shouldFetch, config)
}

export const getHeaderNavigationsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HeaderNavigationItemModel[], RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HeaderNavigationItemModel[],
    RestException,
    HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest
  >(operationName + nameOf(() => getHeaderNavigations), getHeaderNavigations, config)
}
// #endregion GET api/v2/headernavigations/{languageCode}
