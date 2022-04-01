import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import {
  HospitalsModel,
  HospitalModel,
  MediasModel,
  MediaModel,
  HospitalsSimpleModel
} from 'ch-api-client-typescript2/lib'

import {
  HospitalsActionTypes,
  loadHospitalsAsync,
  appendHospitalsAsync,
  loadHospitalAsync,
  loadTranslatedHospitalAsync,
  resetHospitalsState,
  resetHospitalState,
  loadHospitalMediasAsync,
  appendHospitalMediasAsync,
  loadHospitalMediaAsync,
  resetHospitalMediasState,
  resetHospitalMediaState,
  loadHospitalsSimpleAsync,
  appendHospitalsSimpleAsync,
  resetHospitalsSimpleState
} from '../actions/hospitals'
import { AzSearchActionTypes, searchHospitalsAsync } from '../actions/azSearch'

// #region Hospitals
export const isLoadingHospitals = createReducer<boolean, HospitalsActionTypes | AzSearchActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalsState,
      loadHospitalsAsync.success,
      loadHospitalsAsync.failure,
      appendHospitalsAsync.success,
      appendHospitalsAsync.failure,
      searchHospitalsAsync.success,
      searchHospitalsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadHospitalsAsync.request, appendHospitalsAsync.request, searchHospitalsAsync.request],
    (state, action) => true
  )

export const loadHospitalsErrors = createReducer<RestException | null, HospitalsActionTypes | AzSearchActionTypes>(null)
  .handleAction(
    [
      resetHospitalsState,
      loadHospitalsAsync.request,
      loadHospitalsAsync.success,
      appendHospitalsAsync.request,
      appendHospitalsAsync.success,
      searchHospitalsAsync.request,
      searchHospitalsAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadHospitalsAsync.failure, appendHospitalsAsync.failure], (state, action) => action.payload)

export const hospitals = createReducer<HospitalsModel | null, HospitalsActionTypes>(null)
  .handleAction(
    [resetHospitalsState, loadHospitalsAsync.failure, appendHospitalsAsync.failure],
    (state, action) => null
  )
  .handleAction([loadHospitalsAsync.success], (state, action) => action.payload)
  .handleAction([appendHospitalsAsync.success], (state, action) => {
    const hospitalsModel = {
      items: {},
      metaData: {}
    } as HospitalsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    hospitalsModel.items = newItems
    hospitalsModel.metaData = action.payload.metaData

    return hospitalsModel
  })

export const isLoadingHospitalsSimple = createReducer<boolean, HospitalsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalsState,
      resetHospitalsSimpleState,
      loadHospitalsSimpleAsync.success,
      loadHospitalsSimpleAsync.failure,
      appendHospitalsSimpleAsync.success,
      appendHospitalsSimpleAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalsSimpleAsync.request, appendHospitalsSimpleAsync.request], (state, action) => true)

export const loadHospitalsSimpleErrors = createReducer<RestException | null, HospitalsActionTypes>(null)
  .handleAction(
    [
      resetHospitalsState,
      loadHospitalsSimpleAsync.request,
      loadHospitalsSimpleAsync.success,
      appendHospitalsSimpleAsync.request,
      appendHospitalsSimpleAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalsSimpleAsync.failure, appendHospitalsSimpleAsync.failure],
    (state, action) => action.payload
  )

export const hospitalsSimple = createReducer<HospitalsSimpleModel | null, HospitalsActionTypes>(null)
  .handleAction(
    [
      resetHospitalsState,
      resetHospitalsSimpleState,
      loadHospitalsSimpleAsync.failure,
      appendHospitalsSimpleAsync.failure
    ],
    (state, action) => null
  )
  .handleAction([loadHospitalsSimpleAsync.success], (state, action) => action.payload)
  .handleAction([appendHospitalsSimpleAsync.success], (state, action) => {
    const hospitalsSimpleModel = {
      items: {},
      metaData: {}
    } as HospitalsSimpleModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    hospitalsSimpleModel.items = newItems
    hospitalsSimpleModel.metaData = action.payload.metaData

    return hospitalsSimpleModel
  })

export const isLoadingHospital = createReducer<boolean, HospitalsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalState,
      loadHospitalAsync.success,
      loadHospitalAsync.failure,
      loadTranslatedHospitalAsync.success,
      loadTranslatedHospitalAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalAsync.request, loadTranslatedHospitalAsync.request], (state, action) => true)

export const loadHospitalErrors = createReducer<RestException | null, HospitalsActionTypes>(null)
  .handleAction(
    [
      resetHospitalState,
      loadHospitalAsync.request,
      loadHospitalAsync.success,
      loadTranslatedHospitalAsync.request,
      loadTranslatedHospitalAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadHospitalAsync.failure, loadTranslatedHospitalAsync.failure], (state, action) => action.payload)

export const hospital = createReducer<HospitalModel | null, HospitalsActionTypes>(null)
  .handleAction([resetHospitalState, loadHospitalAsync.request, loadHospitalAsync.failure], (state, action) => null)
  .handleAction([loadHospitalAsync.success], (state, action) => action.payload)

export const translatedHospital = createReducer<HospitalModel | null, HospitalsActionTypes>(null)
  .handleAction(
    [resetHospitalState, loadTranslatedHospitalAsync.request, loadTranslatedHospitalAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedHospitalAsync.success], (state, action) => action.payload)
// #endregion Hospitals

// #region HospitalMedias
export const isLoadingHospitalMedias = createReducer<boolean, HospitalsActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalMediasState,
      loadHospitalMediasAsync.success,
      loadHospitalMediasAsync.failure,
      appendHospitalMediasAsync.success,
      appendHospitalMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalMediasAsync.request, appendHospitalMediasAsync.request], (state, action) => true)

export const loadHospitalMediasErrors = createReducer<RestException | null, HospitalsActionTypes>(null)
  .handleAction(
    [
      resetHospitalMediasState,
      loadHospitalMediasAsync.request,
      loadHospitalMediasAsync.success,
      appendHospitalMediasAsync.request,
      appendHospitalMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadHospitalMediasAsync.failure, appendHospitalMediasAsync.failure], (state, action) => action.payload)

export const hospitalMedias = createReducer<MediasModel | null, HospitalsActionTypes>(null)
  .handleAction([resetHospitalMediasState, loadHospitalMediasAsync.failure], (state, action) => null)
  .handleAction([loadHospitalMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendHospitalMediasAsync.success], (state, action) => {
    const hospitalMediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    hospitalMediasModel.items = newItems
    hospitalMediasModel.metaData = action.payload.metaData

    return hospitalMediasModel
  })

export const isLoadingHospitalMedia = createReducer<boolean, HospitalsActionTypes>(false as boolean)
  .handleAction(
    [resetHospitalMediaState, loadHospitalMediaAsync.success, loadHospitalMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalMediaAsync.request], (state, action) => true)

export const loadHospitalMediaErrors = createReducer<RestException | null, HospitalsActionTypes>(null)
  .handleAction(
    [resetHospitalMediaState, loadHospitalMediaAsync.request, loadHospitalMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalMediaAsync.failure], (state, action) => action.payload)

export const hospitalMedia = createReducer<MediaModel | null, HospitalsActionTypes>(null)
  .handleAction([resetHospitalMediaState, loadHospitalMediaAsync.failure], (state, action) => null)
  .handleAction([loadHospitalMediaAsync.success], (state, action) => action.payload)
// #endregion HospitalMedias

const hospitalsState = combineReducers({
  isLoadingHospitals,
  loadHospitalsErrors,
  hospitals,

  isLoadingHospitalsSimple,
  loadHospitalsSimpleErrors,
  hospitalsSimple,

  isLoadingHospital,
  loadHospitalErrors,
  hospital,
  translatedHospital,

  isLoadingHospitalMedias,
  loadHospitalMediasErrors,
  hospitalMedias,

  isLoadingHospitalMedia,
  loadHospitalMediaErrors,
  hospitalMedia
})

export default hospitalsState
export type HospitalsState = ReturnType<typeof hospitalsState>
