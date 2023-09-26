import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { getHospitalMediaByMediaId, getHospitalMedias } from '@services/hospitalMedias'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

//#region GET api/v2/hospitals/{hospitalId}/medias
export const getHospitalMediasSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediasModel, RestException>
) => {
  useGenericSWR<MediasModel, RestException, HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest>(
    operationName + nameOf(() => getHospitalMedias),
    getHospitalMedias,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalMediasSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediasModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<MediasModel, RestException, HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest>(
    operationName + nameOf(() => getHospitalMedias),
    getHospitalMedias,
    config
  )
}

export const getHospitalMediasSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<MediasModel, RestException, HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest>(
    operationName + nameOf(() => getHospitalMedias),
    getHospitalMedias,
    payload,
    shouldFetch
  )
}
//#endregion GET api/v2/hospitals/{hospitalId}/medias

//#region GET api/v2/hospitals/{hospitalId}/medias/{mediaId}
export const getHospitalMediaByMediaIdSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediaModel, RestException>
) => {
  return useGenericSWR<MediaModel, RestException, HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest>(
    operationName + nameOf(() => getHospitalMediaByMediaId),
    getHospitalMediaByMediaId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalMediaByMediaIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediaModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<MediaModel, RestException, HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest>(
    operationName + nameOf(() => getHospitalMediaByMediaId),
    getHospitalMediaByMediaId,
    config
  )
}
//#endregion GET api/v2/hospitals/{hospitalId}/medias/{mediaId}
