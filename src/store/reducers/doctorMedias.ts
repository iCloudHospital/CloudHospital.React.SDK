import { MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadDoctorMediasAsync,
  appendDoctorMediasAsync,
  loadDoctorMediaAsync,
  resetDoctorMediasState,
  resetDoctorMediaState,
  DoctorMediasActionTypes
} from '../actions/doctorMedias'

// #region DoctorMedias
export const isLoadingDoctorMedias = createReducer<boolean, DoctorMediasActionTypes>(false as boolean)
  .handleAction(
    [
      resetDoctorMediasState,
      loadDoctorMediasAsync.success,
      loadDoctorMediasAsync.failure,
      appendDoctorMediasAsync.success,
      appendDoctorMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadDoctorMediasAsync.request, appendDoctorMediasAsync.request], (state, action) => true)

export const loadDoctorMediasErrors = createReducer<RestException | null, DoctorMediasActionTypes>(null)
  .handleAction(
    [
      resetDoctorMediasState,
      loadDoctorMediasAsync.request,
      loadDoctorMediasAsync.success,
      appendDoctorMediasAsync.request,
      appendDoctorMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadDoctorMediasAsync.failure, appendDoctorMediasAsync.failure], (state, action) => action.payload)

export const doctorMedias = createReducer<MediasModel | null, DoctorMediasActionTypes>(null)
  .handleAction([resetDoctorMediasState, loadDoctorMediasAsync.failure], (state, action) => null)
  .handleAction([loadDoctorMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendDoctorMediasAsync.success], (state, action) => {
    const doctorMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    doctorMediasModel.items = newItems
    doctorMediasModel.metaData = action.payload.metaData

    return doctorMediasModel
  })

export const isLoadingDoctorMedia = createReducer<boolean, DoctorMediasActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorMediaState, loadDoctorMediaAsync.success, loadDoctorMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorMediaAsync.request], (state, action) => true)

export const loadDoctorMediaErrors = createReducer<RestException | null, DoctorMediasActionTypes>(null)
  .handleAction(
    [resetDoctorMediaState, loadDoctorMediaAsync.request, loadDoctorMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorMediaAsync.failure], (state, action) => action.payload)

export const doctorMedia = createReducer<MediaModel | null, DoctorMediasActionTypes>(null)
  .handleAction([resetDoctorMediaState, loadDoctorMediaAsync.failure], (state, action) => null)
  .handleAction([loadDoctorMediaAsync.success], (state, action) => action.payload)
// #endregion DoctorMedias

const doctorMediasState = combineReducers({
  isLoadingDoctorMedias,
  loadDoctorMediasErrors,
  doctorMedias,

  isLoadingDoctorMedia,
  loadDoctorMediaErrors,
  doctorMedia
})

export default doctorMediasState
export type DoctorsState = ReturnType<typeof doctorMediasState>
