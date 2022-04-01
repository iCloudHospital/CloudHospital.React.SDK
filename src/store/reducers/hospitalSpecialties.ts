import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { HospitalSpecialtiesModel, HospitalSpecialtyModel } from 'ch-api-client-typescript2/lib'

import {
  HospitalSpecialtiesActionTypes,
  loadHospitalSpecialtiesAsync,
  appendHospitalSpecialtiesAsync,
  loadHospitalSpecialtyAsync,
  resetHospitalSpecialtiesState,
  resetHospitalSpecialtyState,
  loadHospitalSpecialtiesCLient
} from '../actions/hospitalSpecialties'

// #region HospitalSpecialties
export const isLoadingHospitalSpecialties = createReducer<boolean, HospitalSpecialtiesActionTypes>(false as boolean)
  .handleAction(
    [
      resetHospitalSpecialtiesState,
      loadHospitalSpecialtiesAsync.success,
      loadHospitalSpecialtiesAsync.failure,
      appendHospitalSpecialtiesAsync.success,
      appendHospitalSpecialtiesAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadHospitalSpecialtiesAsync.request, appendHospitalSpecialtiesAsync.request], (state, action) => true)

export const loadHospitalSpecialtiesErrors = createReducer<RestException | null, HospitalSpecialtiesActionTypes>(null)
  .handleAction(
    [
      resetHospitalSpecialtiesState,
      loadHospitalSpecialtiesAsync.request,
      loadHospitalSpecialtiesAsync.success,
      appendHospitalSpecialtiesAsync.request,
      appendHospitalSpecialtiesAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalSpecialtiesAsync.failure, appendHospitalSpecialtiesAsync.failure],
    (state, action) => action.payload
  )

export const hospitalSpecialties = createReducer<HospitalSpecialtiesModel | null, HospitalSpecialtiesActionTypes>(null)
  .handleAction(
    [resetHospitalSpecialtiesState, loadHospitalSpecialtiesAsync.failure, appendHospitalSpecialtiesAsync.failure],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalSpecialtiesAsync.success, loadHospitalSpecialtiesCLient],
    (state, action) => action.payload
  )
  .handleAction([appendHospitalSpecialtiesAsync.success], (state, action) => {
    const hospitalSpecialtiesModel = {
      items: {},
      metaData: {}
    } as HospitalSpecialtiesModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    hospitalSpecialtiesModel.items = newItems
    hospitalSpecialtiesModel.metaData = action.payload.metaData

    return hospitalSpecialtiesModel
  })

export const isLoadingHospitalSpecialty = createReducer<boolean, HospitalSpecialtiesActionTypes>(false as boolean)
  .handleAction(
    [resetHospitalSpecialtyState, loadHospitalSpecialtyAsync.success, loadHospitalSpecialtyAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalSpecialtyAsync.request], (state, action) => true)

export const loadHospitalSpecialtyErrors = createReducer<RestException | null, HospitalSpecialtiesActionTypes>(null)
  .handleAction(
    [resetHospitalSpecialtyState, loadHospitalSpecialtyAsync.request, loadHospitalSpecialtyAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalSpecialtyAsync.failure], (state, action) => action.payload)

export const hospitalSpecialty = createReducer<HospitalSpecialtyModel | null, HospitalSpecialtiesActionTypes>(null)
  .handleAction([resetHospitalSpecialtyState, loadHospitalSpecialtyAsync.failure], (state, action) => null)
  .handleAction([loadHospitalSpecialtyAsync.success], (state, action) => action.payload)
// #endregion HospitalSpecialties

const hospitalSpecialtiesState = combineReducers({
  isLoadingHospitalSpecialties,
  loadHospitalSpecialtiesErrors,
  hospitalSpecialties,

  isLoadingHospitalSpecialty,
  loadHospitalSpecialtyErrors,
  hospitalSpecialty
})

export default hospitalSpecialtiesState
export type HospitalSpecialtiesState = ReturnType<typeof hospitalSpecialtiesState>
