import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { getDoctorMediaByMediaId, getDoctorMedias } from '../services/doctorMedias'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors/{doctorid}/medias
export const getDoctorMediasSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<MediasModel, RestException, DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest>(
    operationName + nameOf(() => getDoctorMedias),
    getDoctorMedias,
    payload,
    shouldFetch
  )
}

export const getDoctorMediasSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediasModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<MediasModel, RestException, DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest>(
    operationName + nameOf(() => getDoctorMedias),
    getDoctorMedias,
    config
  )
}

export const getDoctorMediasSWRInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<MediasModel, RestException, DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest>(
    operationName + nameOf(() => getDoctorMedias),
    getDoctorMedias,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/doctors/{doctorid}/medias

// #region GET api/v2/doctors/{doctorid}/medias/{mediaid}
export const getDoctorMediasByMediaIdSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediaModel, RestException>
) => {
  return useGenericSWR<MediaModel, RestException, DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest>(
    operationName + nameOf(() => getDoctorMediaByMediaId),
    getDoctorMediaByMediaId,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorMediasByMediaIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediaModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<MediaModel, RestException, DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest>(
    operationName + nameOf(() => getDoctorMediaByMediaId),
    getDoctorMediaByMediaId,
    config
  )
}
// #endregion GET api/v2/doctors/{doctorid}/medias/{mediaid}
