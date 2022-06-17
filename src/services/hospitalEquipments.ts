import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  HospitalsApi,
  HospitalEquipmentsModel,
  HospitalEquipmentModel,
  MediasModel,
  MediaModel
} from 'ch-api-client-typescript2/lib'
import {
  HospitalEquipmentsSearchOption,
  HospitalEquipmentMediaSearchOption,
  HospitalEquipmentMediasSearchOption
} from '../models/hospitalEquipments'

const apiRoot = process.env.API_ROOT

// #region HospitalEquipments
export function loadHospitalEquipments(
  equipmentSearchOption: HospitalEquipmentsSearchOption
): Promise<HospitalEquipmentsModel> {
  const { hospitalId, id, name, hospitalId2, hospitalName, description, created, page, limit, lastRetrieved } =
    equipmentSearchOption

  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdEquipmentsGet(
      hospitalId,
      id,
      name,
      hospitalId2,
      hospitalName,
      description,
      created,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalEquipment(hospitalId: string, equipmentId: string): Promise<HospitalEquipmentModel> {
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdGet(hospitalId, equipmentId)
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
export function loadHospitalEquipmentMedias(
  hospitalEquipmentMediasSearchOption: HospitalEquipmentMediasSearchOption
): Promise<MediasModel> {
  const { hospitalId, equipmentId, id, mediaType, page, limit, lastRetrieved } = hospitalEquipmentMediasSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasGet(
      hospitalId,
      equipmentId,
      id,
      mediaType,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalEquipmentMedia(
  hospitalEquipmentMediaSearchOption: HospitalEquipmentMediaSearchOption
): Promise<MediaModel> {
  const { hospitalId, equipmentId, mediaId } = hospitalEquipmentMediaSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdEquipmentsEquipmentIdMediasMediaIdGet(hospitalId, equipmentId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalEquipmentMedias

export default {
  loadHospitalEquipments,
  loadHospitalEquipment,

  loadHospitalEquipmentMedias,
  loadHospitalEquipmentMedia
}
