import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { DoctorSpecialtiesModel, DoctorSpecialtyModel } from 'ch-api-client-typescript2/lib'
import {
  DoctorSpecialtiesActionTypes,
  loadDoctorSpecialtiesAsync,
  resetDoctorSpecialtiesState
} from '../actions/doctorSpecialties'

export const isLoadingDoctorSpecialties = createReducer<boolean, DoctorSpecialtiesActionTypes>(false as boolean)
  .handleAction([loadDoctorSpecialtiesAsync.success, loadDoctorSpecialtiesAsync.failure], (state, action) => false)
  .handleAction([loadDoctorSpecialtiesAsync.request], (state, action) => true)

export const loadDoctorSpecialtiesErrors = createReducer<RestException | null, DoctorSpecialtiesActionTypes>(null)
  .handleAction([loadDoctorSpecialtiesAsync.request, loadDoctorSpecialtiesAsync.success], (state, action) => null)
  .handleAction([loadDoctorSpecialtiesAsync.failure], (state, action) => action.payload)

export const doctorSpecialties = createReducer<DoctorSpecialtiesModel | null, DoctorSpecialtiesActionTypes>(null)
  .handleAction([resetDoctorSpecialtiesState, loadDoctorSpecialtiesAsync.failure], (state, action) => null)
  .handleAction([loadDoctorSpecialtiesAsync.success], (state, action) => action.payload)

const doctorSpecialtiesState = combineReducers({
  isLoadingDoctorSpecialties,
  loadDoctorSpecialtiesErrors,
  doctorSpecialties
})

export default doctorSpecialtiesState
export type DoctorSpecialtiesState = ReturnType<typeof doctorSpecialtiesState>
