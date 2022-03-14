import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

import { HospitalAccreditationsModel, HospitalAccreditationModel } from 'ch-api-client-typescript2/lib'

import {
  HospitalAccreditationsActionTypes,
  loadHospitalAccreditationsAsync,
  appendHospitalAccreditationsAsync,
  loadHospitalAccreditationAsync,
  resetHospitalAccreditationsState,
  resetHospitalAccreditationState
} from '../actions/hospitalAccreditations'

// #region HospitalAccreditations
export const isLoadingHospitalAccreditations = createReducer<boolean, HospitalAccreditationsActionTypes>(
  false as boolean
)
  .handleAction(
    [
      resetHospitalAccreditationsState,
      loadHospitalAccreditationsAsync.success,
      loadHospitalAccreditationsAsync.failure,
      appendHospitalAccreditationsAsync.success,
      appendHospitalAccreditationsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadHospitalAccreditationsAsync.request, appendHospitalAccreditationsAsync.request],
    (state, action) => true
  )

export const loadHospitalAccreditationsErrors = createReducer<RestException | null, HospitalAccreditationsActionTypes>(
  null
)
  .handleAction(
    [
      resetHospitalAccreditationsState,
      loadHospitalAccreditationsAsync.request,
      loadHospitalAccreditationsAsync.success,
      appendHospitalAccreditationsAsync.request,
      appendHospitalAccreditationsAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalAccreditationsAsync.failure, appendHospitalAccreditationsAsync.failure],
    (state, action) => action.payload
  )

export const hospitalAccreditations = createReducer<
  HospitalAccreditationsModel | null,
  HospitalAccreditationsActionTypes
>(null)
  .handleAction(
    [
      resetHospitalAccreditationsState,
      loadHospitalAccreditationsAsync.failure,
      appendHospitalAccreditationsAsync.failure
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalAccreditationsAsync.success, appendHospitalAccreditationsAsync.success],
    (state, action) => action.payload
  )

export const isLoadingHospitalAccreditation = createReducer<boolean, HospitalAccreditationsActionTypes>(
  false as boolean
)
  .handleAction(
    [resetHospitalAccreditationState, loadHospitalAccreditationAsync.success, loadHospitalAccreditationAsync.failure],
    (state, action) => false
  )
  .handleAction([loadHospitalAccreditationAsync.request], (state, action) => true)

export const loadHospitalAccreditationErrors = createReducer<RestException | null, HospitalAccreditationsActionTypes>(
  null
)
  .handleAction(
    [resetHospitalAccreditationsState, loadHospitalAccreditationAsync.request, loadHospitalAccreditationAsync.success],
    (state, action) => null
  )
  .handleAction([loadHospitalAccreditationAsync.failure], (state, action) => action.payload)

export const hospitalAccreditation = createReducer<
  HospitalAccreditationModel | null,
  HospitalAccreditationsActionTypes
>(null)
  .handleAction([resetHospitalAccreditationState, loadHospitalAccreditationAsync.failure], (state, action) => null)
  .handleAction([loadHospitalAccreditationAsync.success], (state, action) => action.payload)

// #endregion HospitalAccreditations

const hospitalAccreditationsState = combineReducers({
  isLoadingHospitalAccreditations,
  loadHospitalAccreditationsErrors,
  hospitalAccreditations,

  isLoadingHospitalAccreditation,
  loadHospitalAccreditationErrors,
  hospitalAccreditation
})

export default hospitalAccreditationsState
export type HospitalAccreditationsState = ReturnType<typeof hospitalAccreditationsState>
