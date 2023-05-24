import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DealsApiApiV2DealsDealIdGetRequest,
  DealsApiApiV2DealsDealIdPackagesGetRequest,
  DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest,
  DealsApiApiV2DealsGetRequest,
  DealsApiApiV2DealsSimpleGetRequest,
  DealsApiApiV2DealsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/deals-api'
import { DealModel } from 'ch-api-client-typescript2/lib/models/deal-model'
import { DealPackageModel } from 'ch-api-client-typescript2/lib/models/deal-package-model'
import { DealPackagesModel } from 'ch-api-client-typescript2/lib/models/deal-packages-model'
import { DealsModel } from 'ch-api-client-typescript2/lib/models/deals-model'
import { DealsSimpleModel } from 'ch-api-client-typescript2/lib/models/deals-simple-model'
import {
  getDealById,
  getDealBySlug,
  getDealPackageById,
  getDealPackages,
  getDeals,
  getDealsSimple
} from '../services/deals'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/deals
export const getDealsSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DealsModel, RestException>
) => {
  return useGenericSWR<DealsModel, RestException, DealsApiApiV2DealsGetRequest>(
    operationName + nameOf(() => getDeals),
    getDeals,
    payload,
    shouldFetch,
    config
  )
}

export const getDealsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealsModel, RestException, DealsApiApiV2DealsGetRequest>(
    operationName + nameOf(() => getDeals),
    getDeals,
    config
  )
}

export const getDealsSWRInfinite = (
  operationName = '',
  payload: DealsApiApiV2DealsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<DealsModel, RestException, DealsApiApiV2DealsGetRequest>(
    operationName + nameOf(() => getDeals),
    getDeals,
    payload,
    shouldFetch
  )
}

export const getDealsSimpleSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsSimpleGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DealsSimpleModel, RestException, DealsApiApiV2DealsSimpleGetRequest>(
    operationName + nameOf(() => getDealsSimple),
    getDealsSimple,
    payload,
    shouldFetch
  )
}

export const getDealsSimpleSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealsSimpleModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealsSimpleModel, RestException, DealsApiApiV2DealsSimpleGetRequest>(
    operationName + nameOf(() => getDealsSimple),
    getDealsSimple,
    config
  )
}
// #endregion GET api/v2/deals

// #region GET api/v2/deals/{dealId}
export const getDealByIdSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsDealIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DealModel, RestException>
) => {
  return useGenericSWR<DealModel, RestException, DealsApiApiV2DealsDealIdGetRequest>(
    operationName + nameOf(() => getDealById),
    getDealById,
    payload,
    shouldFetch,
    config
  )
}

export const getDealByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealModel, RestException, DealsApiApiV2DealsDealIdGetRequest>(
    operationName + nameOf(() => getDealById),
    getDealById,
    config
  )
}
// #endregion GET api/v2/deals/{dealId}

// #region GET api/v2/deals/slug/{slug}
export const getDealBySlugSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DealModel, RestException>
) => {
  return useGenericSWR<DealModel, RestException, DealsApiApiV2DealsSlugGetRequest>(
    operationName + nameOf(() => getDealBySlug),
    getDealBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getDealBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealModel, RestException, DealsApiApiV2DealsSlugGetRequest>(
    operationName + nameOf(() => getDealBySlug),
    getDealBySlug,
    config
  )
}
// #endregion GET api/v2/deals/slug/{slug}

// #region GET api/v2/deals/{dealId}/packages
export const getDealPackagesSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsDealIdPackagesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DealPackagesModel, RestException>
) => {
  return useGenericSWR<DealPackagesModel, RestException, DealsApiApiV2DealsDealIdPackagesGetRequest>(
    operationName + nameOf(() => getDealPackages),
    getDealPackages,
    payload,
    shouldFetch,
    config
  )
}

export const getDealPackagesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealPackagesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealPackagesModel, RestException, DealsApiApiV2DealsDealIdPackagesGetRequest>(
    operationName + nameOf(() => getDealPackages),
    getDealPackages,
    config
  )
}

export const getDealPackagesSWRInfinite = (
  operationName = '',
  payload: DealsApiApiV2DealsDealIdPackagesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<DealPackagesModel, RestException, DealsApiApiV2DealsDealIdPackagesGetRequest>(
    operationName + nameOf(() => getDealPackages),
    getDealPackages,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/deals/{dealId}/packages

// #region GET api/v2/deals/{dealId}/packages/{packageId}
export const getDealPackageByIdSWR = (
  operationName = '',
  payload: DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest,
  shouldFetch?: boolean
) => {
  const {
    data: dealPackage,
    error: loadDealPackageError,
    isValidating: isLoadingDealPackage,
    mutate: revalidate
  } = useGenericSWR<DealPackageModel, RestException, DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest>(
    operationName + nameOf(() => getDealPackageById),
    getDealPackageById,
    payload,
    shouldFetch
  )
  return {
    dealPackage,
    loadDealPackageError,
    isLoadingDealPackage,
    revalidate
  }
}

export const getDealPackageByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DealPackageModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<DealPackageModel, RestException, DealsApiApiV2DealsDealIdPackagesPackageIdGetRequest>(
    operationName + nameOf(() => getDealPackageById),
    getDealPackageById,
    config
  )
}
// #endregion GET api/v2/deals/{dealId}/packages/{packageId}
