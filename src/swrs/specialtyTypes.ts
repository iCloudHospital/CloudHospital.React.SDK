import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  SpecialtyTypesApiApiV2SpecialtytypesGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialty-types-api'
import { SpecialtyTypeModel } from 'ch-api-client-typescript2/lib/models/specialty-type-model'
import { SpecialtyTypesModel } from 'ch-api-client-typescript2/lib/models/specialty-types-model'
import {
  getSpecialtyTypeBySlug,
  getSpecialtyTypeBySpecialtyTypeId,
  getSpecialtyTypes
} from '@services/specialtyTypes'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/specialtytypes
export const getSpecialtyTypesSWR = (
  operationName = '',
  payload: SpecialtyTypesApiApiV2SpecialtytypesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtyTypesModel, RestException>
) => {
  useGenericSWR<SpecialtyTypesModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesGetRequest>(
    operationName + nameOf(() => getSpecialtyTypes),
    getSpecialtyTypes,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyTypesSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtyTypesModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<SpecialtyTypesModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesGetRequest>(
    operationName + nameOf(() => getSpecialtyTypes),
    getSpecialtyTypes,
    config
  )
}

export const getSpecialtyTypesSWRInfinite = (
  operationName = '',
  payload?: SpecialtyTypesApiApiV2SpecialtytypesGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<SpecialtyTypesModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesGetRequest>(
    operationName + nameOf(() => getSpecialtyTypes),
    getSpecialtyTypes,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/specialtytypes

// #region GET api/v2/specialtytypes/{specialtyTypeId}
export const getSpecialtyTypeBySpecialtyTypeIdSWR = (
  operationName = '',
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtyTypeModel, RestException>
) => {
  return useGenericSWR<
    SpecialtyTypeModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest
  >(
    operationName + nameOf(() => getSpecialtyTypeBySpecialtyTypeId),
    getSpecialtyTypeBySpecialtyTypeId,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyTypeBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtyTypeModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    SpecialtyTypeModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest
  >(operationName + nameOf(() => getSpecialtyTypeBySpecialtyTypeId), getSpecialtyTypeBySpecialtyTypeId, config)
}
// #endregion GET api/v2/specialtytypes/{specialtyTypeId}

// #region GET api/v2/specialtytypes/slug/{slug}
export const getSpecialtyTypeBySlugSWR = (
  operationName = '',
  payload: SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SpecialtyTypeModel, RestException>
) => {
  return useGenericSWR<SpecialtyTypeModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest>(
    operationName + nameOf(() => getSpecialtyTypeBySlug),
    getSpecialtyTypeBySlug,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyTypeBySlugSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SpecialtyTypeModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<SpecialtyTypeModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest>(
    operationName + nameOf(() => getSpecialtyTypeBySlug),
    getSpecialtyTypeBySlug,
    config
  )
}
// #endregion GET api/v2/specialtytypes/slug/{slug}
