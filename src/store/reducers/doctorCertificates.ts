import { DoctorCertificatesModel, DoctorCertificateModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  DoctorCertificatesActionTypes,
  loadDoctorCertificateAsync,
  loadDoctorCertificatesAsync,
  resetDoctorCertificate,
  resetDoctorCertificates
} from '../actions/doctorCertificates'

export const isLoadingDoctorCertificates = createReducer<boolean, DoctorCertificatesActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorCertificates, loadDoctorCertificatesAsync.success, loadDoctorCertificatesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorCertificatesAsync.request], (state, action) => true)

export const loadDoctorCertificatesErrors = createReducer<RestException | null, DoctorCertificatesActionTypes>(null)
  .handleAction(
    [resetDoctorCertificates, loadDoctorCertificatesAsync.request, loadDoctorCertificatesAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorCertificatesAsync.failure], (state, action) => action.payload)

export const doctorCertificates = createReducer<DoctorCertificatesModel | null, DoctorCertificatesActionTypes>(null)
  .handleAction([resetDoctorCertificates, loadDoctorCertificatesAsync.failure], (state, action) => null)
  .handleAction([loadDoctorCertificatesAsync.success], (state, action) => action.payload)

export const isLoadingDoctorCertificate = createReducer<boolean, DoctorCertificatesActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorCertificate, loadDoctorCertificateAsync.success, loadDoctorCertificateAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorCertificateAsync.request], (state, action) => true)

export const loadDoctorCertificateErrors = createReducer<RestException | null, DoctorCertificatesActionTypes>(null)
  .handleAction(
    [resetDoctorCertificate, loadDoctorCertificateAsync.request, loadDoctorCertificateAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorCertificateAsync.failure], (state, action) => action.payload)

export const doctorCertificate = createReducer<DoctorCertificateModel | null, DoctorCertificatesActionTypes>(null)
  .handleAction([resetDoctorCertificate, loadDoctorCertificateAsync.failure], (state, action) => null)
  .handleAction([loadDoctorCertificateAsync.success], (state, action) => action.payload)

const doctorCertificatesState = combineReducers({
  isLoadingDoctorCertificates,
  loadDoctorCertificatesErrors,
  doctorCertificates,

  isLoadingDoctorCertificate,
  loadDoctorCertificateErrors,
  doctorCertificate
})

export default doctorCertificatesState
export type DoctorCertificatesState = ReturnType<typeof doctorCertificatesState>
