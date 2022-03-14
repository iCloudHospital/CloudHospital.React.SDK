import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  ConsultationsActionTypes,
  loadConsultationsAsync,
  loadConsultationAsync,
  cancelConsultationAsync,
  resetConsultationState
} from '../actions/consultations'
import { ConsultationsModel, ConsultationModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'

export const isLoadingConsultations = createReducer<boolean, ConsultationsActionTypes>(false as boolean)
  .handleAction([loadConsultationsAsync.success, loadConsultationsAsync.failure], (state, action) => false)
  .handleAction([loadConsultationsAsync.request], (state, action) => true)

export const loadConsultationsErrors = createReducer<RestException | null, ConsultationsActionTypes>(null)
  .handleAction([loadConsultationsAsync.request, loadConsultationsAsync.success], (state, action) => null)
  .handleAction([loadConsultationsAsync.failure], (state, action) => action.payload)

export const consultations = createReducer<ConsultationsModel | null, ConsultationsActionTypes>(null)
  .handleAction([loadConsultationsAsync.failure], (state, action) => null)
  .handleAction([loadConsultationsAsync.success], (state, action) => action.payload)

export const isLoadingConsultation = createReducer<boolean, ConsultationsActionTypes>(false as boolean)
  .handleAction([loadConsultationAsync.success, loadConsultationAsync.failure], (state, action) => false)
  .handleAction([loadConsultationAsync.request], (state, action) => true)

export const loadConsultationErrors = createReducer<RestException | null, ConsultationsActionTypes>(null)
  .handleAction([loadConsultationAsync.request, loadConsultationAsync.success], (state, action) => null)
  .handleAction([loadConsultationAsync.failure], (state, action) => action.payload)

export const consultation = createReducer<ConsultationModel | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationState, loadConsultationAsync.request, loadConsultationAsync.failure],
    (state, action) => null
  )
  .handleAction([loadConsultationAsync.success], (state, action) => action.payload)

export const cancelConsultationSuccess = createReducer<boolean, ConsultationsActionTypes>(false as boolean)
  .handleAction(
    [resetConsultationState, cancelConsultationAsync.request, cancelConsultationAsync.failure],
    (state, action) => false
  )
  .handleAction([cancelConsultationAsync.success], (state, action) => action.payload)

const consultationsState = combineReducers({
  isLoadingConsultations,
  loadConsultationsErrors,
  consultations,

  isLoadingConsultation,
  loadConsultationErrors,
  consultation
})

export default consultationsState
export type ConsultationsState = ReturnType<typeof consultationsState>
