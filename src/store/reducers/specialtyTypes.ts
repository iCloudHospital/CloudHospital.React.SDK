import { SpecialtyTypesModel, SpecialtyTypeModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendSpecialtyTypeMediasAsync,
  appendSpecialtyTypesAsync,
  loadSpecialtyTypeAsync,
  loadSpecialtyTypeMediaAsync,
  loadSpecialtyTypeMediasAsync,
  loadSpecialtyTypesAsync,
  loadTranslatedSpecialtyTypeAsync,
  resetSpecialtyTypesState,
  resetSpecialtyTypeState,
  SpecialtyTypesActionTypes
} from '../actions/specialtyTypes'

// #region SpecialtyTypes
export const isLoadingSpecialtyTypes = createReducer<boolean, SpecialtyTypesActionTypes>(false as boolean)
  .handleAction(
    [
      resetSpecialtyTypesState,
      loadSpecialtyTypesAsync.success,
      loadSpecialtyTypesAsync.failure,
      appendSpecialtyTypesAsync.success,
      appendSpecialtyTypesAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadSpecialtyTypesAsync.request, appendSpecialtyTypesAsync.request], (state, action) => true)

export const loadSpecialtyTypesErrors = createReducer<RestException | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [
      resetSpecialtyTypesState,
      loadSpecialtyTypesAsync.request,
      loadSpecialtyTypesAsync.success,
      appendSpecialtyTypesAsync.request,
      appendSpecialtyTypesAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadSpecialtyTypesAsync.failure, appendSpecialtyTypesAsync.failure], (state, action) => action.payload)

export const hasMoreSpecialtyTypes = createReducer<boolean | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [loadSpecialtyTypesAsync.success, appendSpecialtyTypesAsync.success],
    (state, action) => action.payload.metaData?.hasNextPage ?? null
  )
  .handleAction(
    [
      loadSpecialtyTypesAsync.request,
      loadSpecialtyTypesAsync.failure,
      appendSpecialtyTypesAsync.request,
      appendSpecialtyTypesAsync.failure
    ],
    (state, action) => true
  )

export const specialtyTypes = createReducer<SpecialtyTypesModel | null, SpecialtyTypesActionTypes>(null)
  .handleAction([resetSpecialtyTypesState, loadSpecialtyTypesAsync.failure], (state, action) => null)
  .handleAction([loadSpecialtyTypesAsync.success], (state, action) => action.payload)
  .handleAction([appendSpecialtyTypesAsync.success], (state, action) => {
    const specialtyTypesModel = {
      items: {},
      metaData: {}
    } as SpecialtyTypesModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    specialtyTypesModel.items = newItems
    specialtyTypesModel.metaData = action.payload.metaData

    return specialtyTypesModel
  })

export const isLoadingSpecialtyType = createReducer<boolean, SpecialtyTypesActionTypes>(false as boolean)
  .handleAction(
    [
      resetSpecialtyTypeState,
      loadSpecialtyTypeAsync.success,
      loadSpecialtyTypeAsync.failure,
      loadTranslatedSpecialtyTypeAsync.success,
      loadTranslatedSpecialtyTypeAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadSpecialtyTypeAsync.request, loadTranslatedSpecialtyTypeAsync.request], (state, action) => true)

export const loadSpecialtyTypeErrors = createReducer<RestException | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [
      resetSpecialtyTypeState,
      loadSpecialtyTypeAsync.request,
      loadSpecialtyTypeAsync.success,
      loadTranslatedSpecialtyTypeAsync.request,
      loadTranslatedSpecialtyTypeAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadSpecialtyTypeAsync.failure, loadTranslatedSpecialtyTypeAsync.failure],
    (state, action) => action.payload
  )

export const specialtyType = createReducer<SpecialtyTypeModel | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [resetSpecialtyTypeState, loadSpecialtyTypeAsync.request, loadSpecialtyTypeAsync.failure],
    (state, action) => null
  )
  .handleAction([loadSpecialtyTypeAsync.success], (state, action) => action.payload)

export const translatedSpecialtyType = createReducer<SpecialtyTypeModel | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [resetSpecialtyTypeState, loadTranslatedSpecialtyTypeAsync.request, loadTranslatedSpecialtyTypeAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedSpecialtyTypeAsync.success], (state, action) => action.payload)
// #endregion SpecialtyTypes

// #region SpecialtyTypeMedias
export const isLoadingSpecialtyTypeMedias = createReducer<boolean, SpecialtyTypesActionTypes>(false as boolean)
  .handleAction(
    [
      resetSpecialtyTypeState,
      loadSpecialtyTypeMediasAsync.success,
      loadSpecialtyTypeMediasAsync.failure,
      appendSpecialtyTypeMediasAsync.success,
      appendSpecialtyTypeMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadSpecialtyTypeMediasAsync.request, appendSpecialtyTypeMediasAsync.request], (state, action) => true)

export const loadSpecialtyTypeMediasErrors = createReducer<RestException | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [
      resetSpecialtyTypeState,
      loadSpecialtyTypeMediasAsync.request,
      loadSpecialtyTypeMediasAsync.success,
      appendSpecialtyTypeMediasAsync.request,
      appendSpecialtyTypeMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadSpecialtyTypesAsync.failure, appendSpecialtyTypesAsync.failure], (state, action) => action.payload)

export const specialtyTypeMedias = createReducer<MediasModel | null, SpecialtyTypesActionTypes>(null)
  .handleAction([resetSpecialtyTypeState, loadSpecialtyTypesAsync.failure], (state, action) => null)
  .handleAction([loadSpecialtyTypeMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendSpecialtyTypeMediasAsync.success], (state, action) => {
    const mediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    mediasModel.items = newItems
    mediasModel.metaData = action.payload.metaData

    return mediasModel
  })

export const isLoadingSpecialtyTypeMedia = createReducer<boolean, SpecialtyTypesActionTypes>(false as boolean)
  .handleAction(
    [resetSpecialtyTypeState, loadSpecialtyTypeMediaAsync.success, loadSpecialtyTypeMediaAsync.failure],
    (state, action) => false
  )
  .handleAction([loadSpecialtyTypeMediaAsync.request], (state, action) => true)

export const loadSpecialtyTypeMediaErrors = createReducer<RestException | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [resetSpecialtyTypeState, loadSpecialtyTypeMediaAsync.request, loadSpecialtyTypeMediaAsync.success],
    (state, action) => null
  )
  .handleAction([loadSpecialtyTypeMediaAsync.failure], (state, action) => action.payload)

export const specialtyTypeMedia = createReducer<MediaModel | null, SpecialtyTypesActionTypes>(null)
  .handleAction(
    [resetSpecialtyTypeState, loadSpecialtyTypeMediaAsync.request, loadSpecialtyTypeMediaAsync.failure],
    (state, action) => null
  )
  .handleAction([loadSpecialtyTypeMediaAsync.success], (state, action) => action.payload)
// #endregion SpecialtyTypeMedias
const specialtyTypesState = combineReducers({
  isLoadingSpecialtyTypes,
  loadSpecialtyTypesErrors,
  hasMoreSpecialtyTypes,
  specialtyTypes,

  isLoadingSpecialtyType,
  loadSpecialtyTypeErrors,
  specialtyType,
  translatedSpecialtyType,

  isLoadingSpecialtyTypeMedias,
  loadSpecialtyTypeMediasErrors,
  specialtyTypeMedias,

  isLoadingSpecialtyTypeMedia,
  loadSpecialtyTypeMediaErrors,
  specialtyTypeMedia
})

export default specialtyTypesState
export type SpecialtyTypesState = ReturnType<typeof specialtyTypesState>
