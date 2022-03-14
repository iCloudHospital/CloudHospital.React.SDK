import { DoctorEducationsModel, DoctorEducationModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  DoctorEducationsActionTypes,
  loadDoctorEducationAsync,
  loadDoctorEducationsAsync,
  resetDoctorEducationState,
  resetDoctorEducationsState
} from '../actions/doctorEducations'

export const isLoadingDoctorEducations = createReducer<boolean, DoctorEducationsActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorEducationsState, loadDoctorEducationsAsync.success, loadDoctorEducationsAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorEducationsAsync.request], (state, action) => true)

export const loadDoctorEducationsErrors = createReducer<RestException | null, DoctorEducationsActionTypes>(null)
  .handleAction(
    [resetDoctorEducationsState, loadDoctorEducationsAsync.request, loadDoctorEducationsAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorEducationsAsync.failure], (state, action) => action.payload)

export const doctorEducations = createReducer<DoctorEducationsModel | null, DoctorEducationsActionTypes>(null)
  .handleAction([resetDoctorEducationsState, loadDoctorEducationsAsync.failure], (state, action) => null)
  .handleAction([loadDoctorEducationsAsync.success], (state, action) => action.payload)

export const isLoadingDoctorEducation = createReducer<boolean, DoctorEducationsActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorEducationState, loadDoctorEducationAsync.success, loadDoctorEducationAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorEducationAsync.request], (state, action) => true)

export const loadDoctorEducationErrors = createReducer<RestException | null, DoctorEducationsActionTypes>(null)
  .handleAction(
    [resetDoctorEducationState, loadDoctorEducationAsync.request, loadDoctorEducationAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorEducationAsync.failure], (state, action) => action.payload)

export const doctorEducation = createReducer<DoctorEducationModel | null, DoctorEducationsActionTypes>(null)
  .handleAction([resetDoctorEducationState, loadDoctorEducationAsync.failure], (state, action) => null)
  .handleAction([loadDoctorEducationAsync.success], (state, action) => action.payload)

const doctorEducationsState = combineReducers({
  isLoadingDoctorEducations,
  loadDoctorEducationsErrors,
  doctorEducations,

  isLoadingDoctorEducation,
  loadDoctorEducationErrors,
  doctorEducation
})

export default doctorEducationsState
export type DoctorEducationsState = ReturnType<typeof doctorEducationsState>
