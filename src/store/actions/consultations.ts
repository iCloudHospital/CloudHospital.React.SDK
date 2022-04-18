import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { ConsultationsSearchOption, ConsultationSearchOption } from '../../models/consultations'
import { ConsultationsModel, ConsultationModel, CreateConsultationCommand, UpdateConsultationCommand } from 'ch-api-client-typescript2/lib'

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

export const postConsultationAsync = createAsyncAction(
  'POST_CONSULTATION_REQUEST',
  'POST_CONSULTATION_SUCCESS',
  'POST_CONSULTATION_FAILURE'
)<{ requestId: string; command: CreateConsultationCommand }, boolean, RestException>()

export const putConsultationAsync = createAsyncAction(
  'PUT_CONSULTATION_REQUEST',
  'PUT_CONSULTATION_SUCCESS',
  'PUT_CONSULTATION_FAILURE'
)<{ consultationId: string; command: UpdateConsultationCommand }, boolean, RestException>()

export const createConsultationSecretAsync = createAsyncAction(
  'CREATE_CONSULTATION_SECRET_REQUEST',
  'CREATE_CONSULTATION_SECRET_SUCCESS',
  'CREATE_CONSULTATION_SECRET_FAILURE'
)<string, string, RestException>()

export const resetConsultationsState = createAction('RESET_CONSULTATIONS_STATE')<undefined>()

export const resetConsultationState = createAction('RESET_CONSULTATION_STATE')<undefined>()

export const resetConsultationSecret = createAction('RESET_CONSULTATION_SECRET')<undefined>()

export const resetConsultationDetailErrors = createAction('RESET_CONSULTATION_DETAIL_ERRORS')<undefined>()

export type ConsultationsActionTypes =
  | ActionType<typeof loadConsultationsAsync>
  | ActionType<typeof loadCompletedConsultationsAsync>
  | ActionType<typeof loadConsultationAsync>
  | ActionType<typeof cancelConsultationAsync>
  | ActionType<typeof postConsultationAsync>
  | ActionType<typeof putConsultationAsync>
  | ActionType<typeof createConsultationSecretAsync>
  | ActionType<typeof resetConsultationsState>
  | ActionType<typeof resetConsultationState>
  | ActionType<typeof resetConsultationSecret>
  | ActionType<typeof resetConsultationDetailErrors>
