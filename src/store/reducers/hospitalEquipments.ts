import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { HospitalEquipmentsModel, HospitalEquipmentModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'

import {
  HospitalEquipmentsActionTypes,
  loadHospitalEquipmentsAsync,
  appendHospitalEquipmentsAsync,
  loadHospitalEquipmentAsync,
  resetHospitalEquipmentsState,
  resetHospitalEquipmentState,
  loadHospitalEquipmentMediasAsync,
  appendHospitalEquipmentMediasAsync,
  loadHospitalEquipmentMediaAsync,
  resetHospitalEquipmentMediasState,
  resetHospitalEquipmentMediaState
} from '../actions/hospitalEquipments'

// #region HospitalEqiupments
export const isLoadingHospitalEquipments = createReducer<boolean, HospitalEquipmentsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalEquipmentsState,
      loadHospitalEquipmentsAsync.success,
      loadHospitalEquipmentsAsync.failure,
      appendHospitalEquipmentsAsync.success,
      appendHospitalEquipmentsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalEquipmentsAsync.request, appendHospitalEquipmentsAsync.request], (state, action) => true)

export const loadHospitalEquipmentsErrors = createReducer<boolean, HospitalEquipmentsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalEquipmentsState,
      loadHospitalEquipmentsAsync.success,
      loadHospitalEquipmentsAsync.failure,
      appendHospitalEquipmentsAsync.success,
      appendHospitalEquipmentsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalEquipmentsAsync.request, appendHospitalEquipmentsAsync.request], (state, action) => true)

export const hospitalEquipments = createReducer<HospitalEquipmentsModel | null, HospitalEquipmentsActionTypes>(null)
  .handleAction(
    [resetHospitalEquipmentsState, loadHospitalEquipmentsAsync.failure, appendHospitalEquipmentsAsync.failure],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalEquipmentsAsync.success, appendHospitalEquipmentsAsync.success],
    (state, action) => action.payload
  )

export const isLoadingHospitalEquipment = createReducer<boolean, HospitalEquipmentsActionTypes>(false as boolean)
  .handleAction(
    [resetHospitalEquipmentState, loadHospitalEquipmentAsync.success, loadHospitalEquipmentAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalEquipmentAsync.request], (state, action) => true)

export const loadHospitalEquipmentErrors = createReducer<RestException | null, HospitalEquipmentsActionTypes>(null)
  .handleAction(
    [resetHospitalEquipmentState, loadHospitalEquipmentAsync.request, loadHospitalEquipmentAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalEquipmentAsync.failure], (state, action) => action.payload)

export const hospitalEquipment = createReducer<HospitalEquipmentModel | null, HospitalEquipmentsActionTypes>(null)
  .handleAction(
    [resetHospitalEquipmentState, loadHospitalEquipmentAsync.request, loadHospitalEquipmentAsync.failure],
    (state, action) => null
  )
  .handleAction([loadHospitalEquipmentAsync.success], (state, action) => action.payload)
// #endregion HospitalEquipments

// #region HospitalEquipmentMedias
export const isLoadingHospitalEquipmentMedias = createReducer<boolean, HospitalEquipmentsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalEquipmentMediasState,
      loadHospitalEquipmentMediasAsync.success,
      loadHospitalEquipmentMediasAsync.failure,
      appendHospitalEquipmentMediasAsync.success,
      appendHospitalEquipmentMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadHospitalEquipmentMediasAsync.request, appendHospitalEquipmentMediasAsync.request],
    (state, action) => true
  )

export const loadHospitalEquipmentMediasErrors = createReducer<RestException | null, HospitalEquipmentsActionTypes>(
  null
)
  .handleAction(
    [
      resetHospitalEquipmentMediasState,
      loadHospitalEquipmentMediasAsync.request,
      loadHospitalEquipmentMediasAsync.success,
      appendHospitalEquipmentMediasAsync.request,
      appendHospitalEquipmentMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalEquipmentMediasAsync.failure, appendHospitalEquipmentMediasAsync.failure],
    (state, action) => action.payload
  )

export const hospitalMedias = createReducer<MediasModel | null, HospitalEquipmentsActionTypes>(null)
  .handleAction([resetHospitalEquipmentMediasState, loadHospitalEquipmentMediasAsync.failure], (state, action) => null)
  .handleAction([loadHospitalEquipmentMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendHospitalEquipmentMediasAsync.success], (state, action) => {
    const hospitalMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    hospitalMediasModel.items = newItems
    hospitalMediasModel.metaData = action.payload.metaData

    return hospitalMediasModel
  })

export const isLoadingHospitalEquipmentMedia = createReducer<boolean, HospitalEquipmentsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalEquipmentMediaState,
      loadHospitalEquipmentMediaAsync.success,
      loadHospitalEquipmentMediaAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalEquipmentMediaAsync.request], (state, action) => true)

export const loadHospitalEquipmentMediaErrors = createReducer<RestException | null, HospitalEquipmentsActionTypes>(null)
  .handleAction(
    [
      resetHospitalEquipmentMediaState,
      loadHospitalEquipmentMediaAsync.request,
      loadHospitalEquipmentMediaAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadHospitalEquipmentMediaAsync.failure], (state, action) => action.payload)

export const hospitalMedia = createReducer<MediaModel | null, HospitalEquipmentsActionTypes>(null)
  .handleAction([resetHospitalEquipmentMediaState, loadHospitalEquipmentMediaAsync.failure], (state, action) => null)
  .handleAction([loadHospitalEquipmentMediaAsync.success], (state, action) => action.payload)
// #endregion HospitalEquipmentMedias

const hospitalEquipmentsState = combineReducers({
  isLoadingHospitalEquipments,
  loadHospitalEquipmentsErrors,
  hospitalEquipments,

  isLoadingHospitalEquipment,
  loadHospitalEquipmentErrors,
  hospitalEquipment,

  isLoadingHospitalEquipmentMedias,
  loadHospitalEquipmentMediasErrors,
  hospitalMedias,

  isLoadingHospitalEquipmentMedia,
  loadHospitalEquipmentMediaErrors,
  hospitalMedia
})

export default hospitalEquipmentsState
export type HospitalEquipmentsState = ReturnType<typeof hospitalEquipmentsState>
