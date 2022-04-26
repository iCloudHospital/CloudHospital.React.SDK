import { PatientModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  PatientsActionTypes,
  loadPatientAsync,
  postPatientAsync,
  putPatientAsync,
  deletePatientAsync,
  resetPatientState
} from '../actions/patients'

export const isLoadingPatient = createReducer<boolean, PatientsActionTypes>(false as boolean)
  .handleAction([resetPatientState, loadPatientAsync.success, loadPatientAsync.failure], (state, action) => false)
  .handleAction([loadPatientAsync.request], (state, action) => true)

export const loadPatientErrors = createReducer<RestException | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, loadPatientAsync.request, loadPatientAsync.success], (state, action) => null)
  .handleAction([loadPatientAsync.failure], (state, action) => action.payload)

export const patient = createReducer<PatientModel | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, loadPatientAsync.request, loadPatientAsync.failure], (state, action) => null)
  .handleAction([loadPatientAsync.success], (state, action) => action.payload)


export const createPatient = createReducer<PatientModel | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, postPatientAsync.request, postPatientAsync.failure], (state, action) => null)
  .handleAction([postPatientAsync.success], (state, action) => action.payload)


export const updatePatient = createReducer<PatientModel | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, putPatientAsync.request, putPatientAsync.failure], (state, action) => null)
  .handleAction([putPatientAsync.success], (state, action) => action.payload)

export const isUpdatingPatient = createReducer<boolean, PatientsActionTypes>(false as boolean)
  .handleAction(
    [
      resetPatientState,
      postPatientAsync.success,
      postPatientAsync.failure,
      putPatientAsync.success,
      putPatientAsync.failure,
      deletePatientAsync.success,
      deletePatientAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [postPatientAsync.request, putPatientAsync.request, deletePatientAsync.request],
    (state, action) => true
  )

export const postPatientErrors = createReducer<RestException | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, postPatientAsync.request, postPatientAsync.success], (state, action) => null)
  .handleAction([postPatientAsync.failure], (state, action) => action.payload)

export const postPatientSuccess = createReducer<PatientModel | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, postPatientAsync.request, postPatientAsync.failure], (state, action) => null)
  .handleAction([postPatientAsync.success], (state, action) => action.payload)

export const putPatientErrors = createReducer<RestException | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, putPatientAsync.request, putPatientAsync.success], (state, action) => null)
  .handleAction([putPatientAsync.failure], (state, action) => action.payload)

export const putPatientSuccess = createReducer<PatientModel | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, putPatientAsync.request, putPatientAsync.failure], (state, action) => null)
  .handleAction([putPatientAsync.success], (state, action) => action.payload)

export const deletePatientErrors = createReducer<RestException | null, PatientsActionTypes>(null)
  .handleAction([resetPatientState, deletePatientAsync.request, deletePatientAsync.success], (state, action) => null)
  .handleAction([deletePatientAsync.failure], (state, action) => action.payload)

export const deletePatientSuccess = createReducer<boolean, PatientsActionTypes>(false as boolean)
  .handleAction([resetPatientState, deletePatientAsync.request, deletePatientAsync.failure], (state, action) => false)
  .handleAction([deletePatientAsync.success], (state, action) => true)

const patientsState = combineReducers({
  isLoadingPatient,
  loadPatientErrors,
  patient,
  createPatient,
  updatePatient,

  isUpdatingPatient,
  postPatientErrors,
  postPatientSuccess,

  putPatientErrors,
  putPatientSuccess,

  deletePatientErrors,
  deletePatientSuccess
})

export default patientsState
export type PatientsState = ReturnType<typeof patientsState>
