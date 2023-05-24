import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  SpecialtiesApiApiV2SpecialtiesGetRequest,
  SpecialtiesApiApiV2SpecialtiesSlugGetRequest,
  SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialties-api'
import { SpecialtiesModel } from 'ch-api-client-typescript2/lib/models/specialties-model'
import { SpecialtyModel } from 'ch-api-client-typescript2/lib/models/specialty-model'
import { getSpecialties, getSpecialtyBySlug, getSpecialtyBySpecialtyId } from '../services/specialties'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/specialties
export const getSpecialtiesSWR = (
  operationName = '',
  payload: SpecialtiesApiApiV2SpecialtiesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtiesModel, RestException>
) => {
  useGenericSWR<SpecialtiesModel, RestException, SpecialtiesApiApiV2SpecialtiesGetRequest>(
    operationName + nameOf(() => getSpecialties),
    getSpecialties,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtiesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtiesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<SpecialtiesModel, RestException, SpecialtiesApiApiV2SpecialtiesGetRequest>(
    operationName + nameOf(() => getSpecialties),
    getSpecialties,
    config
  )
}

export const getSpecialtiesSWRInfinite = (
  operationName = '',
  payload?: SpecialtiesApiApiV2SpecialtiesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<SpecialtiesModel, RestException, SpecialtiesApiApiV2SpecialtiesGetRequest>(
    operationName + nameOf(() => getSpecialties),
    getSpecialties,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/specialties

// #region GET api/v2/specialties/{specialtyId}
export const getSpecialtyBySpecialtyIdSWR = (
  operationName = '',
  payload: SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtyModel, RestException>
) => {
  return useGenericSWR<SpecialtyModel, RestException, SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest>(
    operationName + nameOf(() => getSpecialtyBySpecialtyId),
    getSpecialtyBySpecialtyId,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtyModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<SpecialtyModel, RestException, SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest>(
    operationName + nameOf(() => getSpecialtyBySpecialtyId),
    getSpecialtyBySpecialtyId,
    config
  )
}
// #endregion GET api/v2/specialties/{specialtyId}

// #region GET api/v2/specialties/slug/{slug}
export const getSpecialtyBySlugSWR = (
  operationName = '',
  payload: SpecialtiesApiApiV2SpecialtiesSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtyModel, RestException>
) => {
  return useGenericSWR<SpecialtyModel, RestException, SpecialtiesApiApiV2SpecialtiesSlugGetRequest>(
    operationName + nameOf(() => getSpecialtyBySlug),
    getSpecialtyBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtyModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<SpecialtyModel, RestException, SpecialtiesApiApiV2SpecialtiesSlugGetRequest>(
    operationName + nameOf(() => getSpecialtyBySlug),
    getSpecialtyBySlug,
    config
  )
}
// #endregion GET api/v2/specialties/slug/{slug}
