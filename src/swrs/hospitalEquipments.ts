import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalEquipmentModel } from 'ch-api-client-typescript2/lib/models/hospital-equipment-model'
import { HospitalEquipmentsModel } from 'ch-api-client-typescript2/lib/models/hospital-equipments-model'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import {
  getHospitalEquipmentByEquipmentId,
  getHospitalEquipmentMediaByMediaId,
  getHospitalEquipmentMedias,
  getHospitalEquipments
} from '../services/hospitalEquipments'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/hospitals/{hospitalId}/equipments
export const getHospitalEquipmentsSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalEquipmentsModel, RestException>
) => {
  useGenericSWR<HospitalEquipmentsModel, RestException, HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest>(
    operationName + nameOf(() => getHospitalEquipments),
    getHospitalEquipments,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalEquipmentsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalEquipmentsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HospitalEquipmentsModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest
  >(operationName + nameOf(() => getHospitalEquipments), getHospitalEquipments, config)
}

export const getHospitalEquipmentsSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    HospitalEquipmentsModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest
  >(operationName + nameOf(() => getHospitalEquipments), getHospitalEquipments, payload, shouldFetch)
}
// #endregion GET api/v2/hospitals/{hospitalId}/equipments

// #region GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}
export const getHospitalEquipmentByEquipmentIdSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<HospitalEquipmentModel, RestException>
) => {
  return useGenericSWR<
    HospitalEquipmentModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest
  >(
    operationName + nameOf(() => getHospitalEquipmentByEquipmentId),
    getHospitalEquipmentByEquipmentId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalEquipmentByEquipmentIdWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<HospitalEquipmentModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    HospitalEquipmentModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest
  >(operationName + nameOf(() => getHospitalEquipmentByEquipmentId), getHospitalEquipmentByEquipmentId, config)
}
// #endregion GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}

// #region GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}/medias
export const getHospitalEquipmentMediasSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediasModel, RestException>
) => {
  useGenericSWR<MediasModel, RestException, HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest>(
    operationName + nameOf(() => getHospitalEquipmentMedias),
    getHospitalEquipmentMedias,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalEquipmentMediasSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediasModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    MediasModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest
  >(operationName + nameOf(() => getHospitalEquipmentMedias), getHospitalEquipmentMedias, config)
}

export const getHospitalEquipmentMediasSWRInfinite = (
  operationName = '',
  payload?: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    MediasModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest
  >(operationName + nameOf(() => getHospitalEquipmentMedias), getHospitalEquipmentMedias, payload, shouldFetch)
}
// #endregion GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}/medias

// #region GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}
export const getHospitalEquipmentMediaByMediaIdSWR = (
  operationName = '',
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<MediaModel, RestException>
) => {
  return useGenericSWR<
    MediaModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest
  >(
    operationName + nameOf(() => getHospitalEquipmentMediaByMediaId),
    getHospitalEquipmentMediaByMediaId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalEquipmentMediaByMediaIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediaModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    MediaModel,
    RestException,
    HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest
  >(operationName + nameOf(() => getHospitalEquipmentMediaByMediaId), getHospitalEquipmentMediaByMediaId, config)
}
// #endregion GET api/v2/hospitals/{hospitalId}/equipments/{equipmentId}
