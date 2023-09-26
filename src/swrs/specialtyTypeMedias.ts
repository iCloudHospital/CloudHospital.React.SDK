import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialty-types-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { getSpecialtyTypeMediaByMediaId, getSpecialtyTypeMedias } from '@services/specialtyTypeMedias'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/specialtytypes/{specialtyTypeId}/medias
export const getSpecialtyTypeMediasSWR = (
  operationName = '',
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediasModel, RestException>
) => {
  useGenericSWR<MediasModel, RestException, SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest>(
    operationName + nameOf(() => getSpecialtyTypeMedias),
    getSpecialtyTypeMedias,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyTypeMediasSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediasModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    MediasModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest
  >(operationName + nameOf(() => getSpecialtyTypeMedias), getSpecialtyTypeMedias, config)
}

export const getSpecialtyTypeMediasSWRInfinite = (
  operationName = '',
  payload?: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    MediasModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest
  >(operationName + nameOf(() => getSpecialtyTypeMedias), getSpecialtyTypeMedias, payload, shouldFetch)
}
// #endregion GET api/v2/specialtytypes/{specialtyTypeId}/medias

// #region GET api/v2/specialtytypes/{specialtyTypeId}/medias/{mediaId}
export const getSpecialtyTypeMediaByMediaIdSWR = (
  operationName = '',
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediaModel, RestException>
) => {
  return useGenericSWR<
    MediaModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest
  >(
    operationName + nameOf(() => getSpecialtyTypeMediaByMediaId),
    getSpecialtyTypeMediaByMediaId,
    payload,
    shouldFetch,
    config
  )
}

export const getSpecialtyTypeMediaBydIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediaModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    MediaModel,
    RestException,
    SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest
  >(operationName + nameOf(() => getSpecialtyTypeMediaByMediaId), getSpecialtyTypeMediaByMediaId, config)
}
// #endregion GET api/v2/specialtytypes/{specialtyTypeId}/medias/{mediaId}
