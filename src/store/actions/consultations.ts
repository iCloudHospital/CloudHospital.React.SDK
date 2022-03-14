import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ConsultationsSearchOption, ConsultationSearchOption } from '../../models/consultations'
import { ConsultationsModel, ConsultationModel } from 'ch-api-client-typescript2/lib'

export const loadConsultationsAsync = createAsyncAction(
  'LOAD_CONSULTATIONS_REQUEST',
  'LOAD_CONSULTATIONS_SUCCESS',
  'LOAD_CONSULTATIONS_FAILURE'
)<ConsultationsSearchOption, ConsultationsModel, RestException>()

export const loadCompletedConsultationsAsync = createAsyncAction(
  'LOAD_COMPLETED_CONSULTATION_REQUEST',
  'LOAD_COMPLETED_CONSULTATION_SUCCESS',
  'LOAD_COMPLETED_CONSULTATION_FAILURE'
)<ConsultationsSearchOption, ConsultationsModel, RestException>()

export const loadConsultationAsync = createAsyncAction(
  'LOAD_CONSULTATION_REQUEST',
  'LOAD_CONSULTATION_SUCCESS',
  'LOAD_CONSULTATION_FAILURE'
)<ConsultationSearchOption, ConsultationModel, RestException>()

export const cancelConsultationAsync = createAsyncAction(
  'CANCEL_CONSULTATION_REQUEST',
  'CANCEL_CONSULTATION_SUCCESS',
  'CANCEL_CONSULTATION_FAILURE'
)<string, boolean, RestException>()

export const resetConsultationsState = createAction('RESET_CONSULTATIONS_STATE')<undefined>()

export const resetConsultationState = createAction('RESET_CONSULTATION_STATE')<undefined>()

export type ConsultationsActionTypes =
  | ActionType<typeof loadConsultationsAsync>
  | ActionType<typeof loadCompletedConsultationsAsync>
  | ActionType<typeof loadConsultationAsync>
  | ActionType<typeof cancelConsultationAsync>
  | ActionType<typeof resetConsultationsState>
  | ActionType<typeof resetConsultationState>
