import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  AboutUsApiApiV2AboutusHospitalIdGetRequest,
  AboutUsApiApiV2AboutusSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/about-us-api'
import { AboutUsPageModel } from 'ch-api-client-typescript2/lib/models/about-us-page-model'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'
import { getAboutUsPageById, getAboutUsPageBySlug } from '../services/aboutUs'

// #region GET api/v1/aboutus/{hospitalId}
export const getAboutusPageByIdSWR = (
  operationName = '',
  payload: AboutUsApiApiV2AboutusHospitalIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<AboutUsPageModel, RestException>
) => {
  return useGenericSWR<AboutUsPageModel, RestException, AboutUsApiApiV2AboutusHospitalIdGetRequest>(
    operationName + nameOf(() => getAboutUsPageById),
    getAboutUsPageById,
    payload,
    shouldFetch,
    config
  )
}

export const getAboutusPageByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<AboutUsPageModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<AboutUsPageModel, RestException, AboutUsApiApiV2AboutusHospitalIdGetRequest>(
    operationName + nameOf(() => getAboutUsPageById),
    getAboutUsPageById,
    config
  )
}
// #endregion GET api/v1/aboutus/{hospitalId}

// #region GET api/v1/aboutus/{slug}
export const getAboutusPageBySlugSWR = (
  operationName = '',
  payload: AboutUsApiApiV2AboutusSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<AboutUsPageModel, RestException>
) => {
  return useGenericSWR<AboutUsPageModel, RestException, AboutUsApiApiV2AboutusSlugGetRequest>(
    operationName + nameOf(() => getAboutUsPageBySlug),
    getAboutUsPageBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getAboutUsPageBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<AboutUsPageModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<AboutUsPageModel, RestException, AboutUsApiApiV2AboutusSlugGetRequest>(
    operationName + nameOf(() => getAboutUsPageBySlug),
    getAboutUsPageBySlug,
    config
  )
}
// #endregion GET api/v1/aboutus/{slug}
