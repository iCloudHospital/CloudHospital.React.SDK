import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { HospitalEquipmentsModel, HospitalEquipmentModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import {
  HospitalEquipmentMediaSearchOption,
  HospitalEquipmentMediasSearchOption,
  HospitalEquipmentsSearchOption
} from '../../models/hospitalEquipments'

// #region HospitalEquipments
export const loadHospitalEquipmentsAsync = createAsyncAction(
  'LOAD_HOSPITAL_EQUIPMENTS_REQUEST',
  'LOAD_HOSPITAL_EQUIPMENTS_SUCCESS',
  'LOAD_HOSPITAL_EQUIPMENTS_FAILURE'
)<HospitalEquipmentsSearchOption, HospitalEquipmentsModel, RestException>()

export const appendHospitalEquipmentsAsync = createAsyncAction(
  'APPEND_HOSPITAL_EQUIPMENTS_REQUEST',
  'APPEND_HOSPITAL_EQUIPMENTS_SUCCESS',
  'APPEND_HOSPITAL_EQUIPMENTS_FAILURE'
)<HospitalEquipmentsSearchOption, HospitalEquipmentsModel, RestException>()

export const loadHospitalEquipmentAsync = createAsyncAction(
  'LOAD_HOSPITAL_EQUIPMENT_REQUEST',
  'LOAD_HOSPITAL_EQUIPMENT_SUCCESS',
  'LOAD_HOSPITAL_EQUIPMENT_FAILURE'
)<{ hospitalId: string; equipmentId: string }, HospitalEquipmentModel, RestException>()

export const resetHospitalEquipmentsState = createAction('RESET_HOSPITAL_EQUIPMENTS_STATE')<undefined>()

export const resetHospitalEquipmentState = createAction('RESET_HOSPITAL_EQUIPMENT_STATE')<undefined>()
// #endregion HospitalEquipments

// #region HospitalEquipmentMedias
export const loadHospitalEquipmentMediasAsync = createAsyncAction(
  'LOAD_HOSPITAL_EQUIPMENT_MEDIAS_REQUEST',
  'LOAD_HOSPITAL_EQUIPMENT_MEDIAS_SUCCESS',
  'LOAD_HOSPITAL_EQUIPMENT_MEDIAS_FAILURE'
)<HospitalEquipmentMediasSearchOption, MediasModel, RestException>()

export const appendHospitalEquipmentMediasAsync = createAsyncAction(
  'APPEND_HOSPITAL_EQUIPMENT_MEDIAS_REQUEST',
  'APPEND_HOSPITAL_EQUIPMENT_MEDIAS_SUCCESS',
  'APPEND_HOSPITAL_EQUIPMENT_MEDIAS_FAILURE'
)<HospitalEquipmentMediasSearchOption, MediasModel, RestException>()

export const loadHospitalEquipmentMediaAsync = createAsyncAction(
  'LOAD_HOSPITAL_EQUIPMENT_MEDIA_REQUEST',
  'LOAD_HOSPITAL_EQUIPMENT_MEDIA_SUCCESS',
  'LOAD_HOSPITAL_EQUIPMENT_MEDIA_FAILURE'
)<HospitalEquipmentMediaSearchOption, MediaModel, RestException>()

export const resetHospitalEquipmentMediasState = createAction('RESET_HOSPITAL_EQUIPMENT_MEDIAS')<undefined>()

export const resetHospitalEquipmentMediaState = createAction('RESET_HOSPITAL_EQUIPMENT_MEDIA')<undefined>()
// #endregion HospitalEquipmentMedias

export type HospitalEquipmentsActionTypes =
  | ActionType<typeof loadHospitalEquipmentsAsync>
  | ActionType<typeof appendHospitalEquipmentsAsync>
  | ActionType<typeof loadHospitalEquipmentAsync>
  | ActionType<typeof resetHospitalEquipmentsState>
  | ActionType<typeof resetHospitalEquipmentState>
  | ActionType<typeof loadHospitalEquipmentMediasAsync>
  | ActionType<typeof appendHospitalEquipmentMediasAsync>
  | ActionType<typeof loadHospitalEquipmentMediaAsync>
  | ActionType<typeof resetHospitalEquipmentMediasState>
  | ActionType<typeof resetHospitalEquipmentMediaState>
