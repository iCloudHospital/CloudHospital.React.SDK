import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { HospitalServicesModel, HospitalServiceModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'

import {
  HospitalServicesActionTypes,
  loadHospitalServicesAsync,
  appendHospitalServicesAsync,
  loadHospitalServiceAsync,
  resetHospitalServicesState,
  resetHospitalServiceState,
  loadHospitalServiceMediasAsync,
  appendHospitalServiceMediasAsync,
  loadHospitalServiceMediaAsync,
  resetHospitalServiceMediasState,
  resetHospitalServiceMediaState
} from '../actions/hospitalServices'

// #region HospitalServices
export const isLoadingHospitalServices = createReducer<boolean, HospitalServicesActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalServicesState,
      loadHospitalServicesAsync.success,
      loadHospitalServicesAsync.failure,
      appendHospitalServicesAsync.success,
      appendHospitalServicesAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalServicesAsync.request, appendHospitalServicesAsync.request], (state, action) => true)

export const loadHospitalServicesErrors = createReducer<RestException | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [
      resetHospitalServicesState,
      loadHospitalServicesAsync.request,
      loadHospitalServicesAsync.success,
      appendHospitalServicesAsync.request,
      appendHospitalServicesAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalServicesAsync.failure, appendHospitalServicesAsync.failure],
    (state, action) => action.payload
  )

export const hospitalServices = createReducer<HospitalServicesModel | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [resetHospitalServicesState, loadHospitalServicesAsync.failure, appendHospitalServicesAsync.failure],
    (state, action) => null
  )
  .handleAction([loadHospitalServicesAsync.success, appendHospitalServicesAsync.success], (state, action) => {
    return action.payload
  })

export const isLoadingHospitalService = createReducer<boolean, HospitalServicesActionTypes>(false as boolean)
  .handleAction(
    [resetHospitalServiceState, loadHospitalServiceAsync.success, loadHospitalServiceAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalServiceAsync.request], (state, action) => true)

export const loadHospitalServiceErrors = createReducer<RestException | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [resetHospitalServiceState, loadHospitalServiceAsync.request, loadHospitalServiceAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalServiceAsync.failure], (state, action) => action.payload)

export const hospitalService = createReducer<HospitalServiceModel | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [resetHospitalServiceState, loadHospitalServiceAsync.request, loadHospitalServiceAsync.failure],
    (state, action) => null
  )
  .handleAction([loadHospitalServiceAsync.success], (state, action) => action.payload)
// #endregion HospitalServices

// #region HospitalServiceMedias
export const isLoadingHospitalServiceMedias = createReducer<boolean, HospitalServicesActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalServiceMediasState,
      loadHospitalServiceMediasAsync.success,
      loadHospitalServiceMediasAsync.failure,
      appendHospitalServiceMediasAsync.success,
      appendHospitalServiceMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadHospitalServiceMediasAsync.request, appendHospitalServiceMediasAsync.request],
    (state, action) => true
  )

export const loadHospitalServiceMediasErrors = createReducer<RestException | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [
      resetHospitalServiceMediasState,
      loadHospitalServiceMediasAsync.request,
      loadHospitalServiceMediasAsync.success,
      appendHospitalServiceMediasAsync.request,
      appendHospitalServiceMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalServiceMediasAsync.failure, appendHospitalServiceMediasAsync.failure],
    (state, action) => action.payload
  )

export const hospitalMedias = createReducer<MediasModel | null, HospitalServicesActionTypes>(null)
  .handleAction([resetHospitalServiceMediasState, loadHospitalServiceMediasAsync.failure], (state, action) => null)
  .handleAction([loadHospitalServiceMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendHospitalServiceMediasAsync.success], (state, action) => {
    const hospitalMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    hospitalMediasModel.items = newItems
    hospitalMediasModel.metaData = action.payload.metaData

    return hospitalMediasModel
  })

export const isLoadingHospitalServiceMedia = createReducer<boolean, HospitalServicesActionTypes>(false as boolean)
  .handleAction(
    [resetHospitalServiceMediaState, loadHospitalServiceMediaAsync.success, loadHospitalServiceMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalServiceMediaAsync.request], (state, action) => true)

export const loadHospitalServiceMediaErrors = createReducer<RestException | null, HospitalServicesActionTypes>(null)
  .handleAction(
    [resetHospitalServiceMediaState, loadHospitalServiceMediaAsync.request, loadHospitalServiceMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalServiceMediaAsync.failure], (state, action) => action.payload)

export const hospitalMedia = createReducer<MediaModel | null, HospitalServicesActionTypes>(null)
  .handleAction([resetHospitalServiceMediaState, loadHospitalServiceMediaAsync.failure], (state, action) => null)
  .handleAction([loadHospitalServiceMediaAsync.success], (state, action) => action.payload)
// #endregion HospitalServiceMedias

const hospitalServicesState = combineReducers({
  isLoadingHospitalServices,
  loadHospitalServicesErrors,
  hospitalServices,

  isLoadingHospitalService,
  loadHospitalServiceErrors,
  hospitalService,

  isLoadingHospitalServiceMedias,
  loadHospitalServiceMediasErrors,
  hospitalMedias,

  isLoadingHospitalServiceMedia,
  loadHospitalServiceMediaErrors,
  hospitalMedia
})

export default hospitalServicesState
export type HospitalServicesState = ReturnType<typeof hospitalServicesState>
