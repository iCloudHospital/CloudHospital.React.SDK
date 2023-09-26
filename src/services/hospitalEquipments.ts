import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalEquipmentModel } from 'ch-api-client-typescript2/lib/models/hospital-equipment-model'
import { HospitalEquipmentsModel } from 'ch-api-client-typescript2/lib/models/hospital-equipments-model'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HospitalEquipments
export const getHospitalEquipments = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsGetRequest
): Promise<HospitalEquipmentsModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdEquipmentsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalEquipmentByEquipmentId = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdGetRequest
): Promise<HospitalEquipmentModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalEquipments

// #region HospitalEquipmentMedias
export const getHospitalEquipmentMedias = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGetRequest
): Promise<MediasModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalEquipmentMediaByMediaId = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalEquipmentMedias

const hospitalEquipments = {
  getHospitalEquipments,
  getHospitalEquipmentByEquipmentId,
  getHospitalEquipmentMedias,
  getHospitalEquipmentMediaByMediaId
}

export default hospitalEquipments
