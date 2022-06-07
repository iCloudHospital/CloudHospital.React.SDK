import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  ConsultationsActionTypes,
  loadConsultationsAsync,
  loadConsultationAsync,
  resetConsultationState,
  postConsultationAsync,
  putConsultationAsync,
  postConsultationPaymentKeyAsync,
  resetConsultationPaymentKey,
  resetConsultationDetailErrors,
  postConsultationPaidAsync
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
  .handleAction(
    [
      loadConsultationAsync.success,
      loadConsultationAsync.failure,
      postConsultationAsync.success,
      postConsultationAsync.failure,
      putConsultationAsync.success,
      putConsultationAsync.failure
    ],
     (state, action) => false)
  .handleAction([loadConsultationAsync.request, postConsultationAsync.request, putConsultationAsync.request], (state, action) => true)

export const loadConsultationErrors = createReducer<RestException | null, ConsultationsActionTypes>(null)
  .handleAction(
    [
      loadConsultationAsync.request,
      loadConsultationAsync.success,
      postConsultationAsync.request,
      postConsultationAsync.success,
      putConsultationAsync.request,
      putConsultationAsync.success,
      resetConsultationDetailErrors
    ],
    (state, action) => null)
  .handleAction(
    [
      loadConsultationAsync.failure,
      postConsultationAsync.failure,
      putConsultationAsync.failure
    ],
    (state, action) => action.payload)

export const consultation = createReducer<ConsultationModel | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationState, loadConsultationAsync.request, loadConsultationAsync.failure],
    (state, action) => null
  )
  .handleAction([loadConsultationAsync.success], (state, action) => action.payload)

export const postConsultationSuccess = createReducer<ConsultationModel | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationState, postConsultationAsync.request, postConsultationAsync.failure],
    (state, action) => null
  )
  .handleAction([postConsultationAsync.success], (state, action) => action.payload)

export const putConsultationSuccess = createReducer<ConsultationModel | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationState, putConsultationAsync.request, putConsultationAsync.failure],
    (state, action) => null
  )
  .handleAction([putConsultationAsync.success], (state, action) => action.payload)

export const consultationPaid = createReducer<string | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationPaymentKey, postConsultationPaidAsync.request, postConsultationPaidAsync.failure],
    (state, action) => null
  )
  .handleAction([postConsultationPaidAsync.success], (state, action) => action.payload)


export const consultationPaymentKey = createReducer<string | null, ConsultationsActionTypes>(null)
  .handleAction(
    [resetConsultationPaymentKey, postConsultationPaymentKeyAsync.request, postConsultationPaymentKeyAsync.failure],
    (state, action) => null
  )
  .handleAction([postConsultationPaymentKeyAsync.success], (state, action) => action.payload)

const consultationsState = combineReducers({
  isLoadingConsultations,
  loadConsultationsErrors,
  consultations,

  isLoadingConsultation,
  loadConsultationErrors,
  consultation,

  postConsultationSuccess,
  putConsultationSuccess,

  consultationPaid,
  consultationPaymentKey
})

export default consultationsState
export type ConsultationsState = ReturnType<typeof consultationsState>
