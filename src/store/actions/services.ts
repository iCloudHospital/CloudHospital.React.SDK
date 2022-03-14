import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { HospitalServicesModel, HospitalServiceModel } from 'ch-api-client-typescript2/lib'
import { ServicesSearchOption, ServiceSearchOption } from '../../models/services'
import { RestException } from '../../models/exceptions'

export const loadServicesAsync = createAsyncAction(
  'LOAD_SERVICES_REQUEST',
  'LOAD_SERVICES_SUCCESS',
  'LOAD_SERVICES_FAILURE'
)<ServicesSearchOption, HospitalServicesModel, RestException>()

export const appendServicesAsync = createAsyncAction(
  'APPEND_SERVICES_REQUEST',
  'APPEND_SERVICES_SUCCESS',
  'APPEND_SERVICES_FAILURE'
)<ServicesSearchOption, HospitalServicesModel, RestException>()

export const loadServiceAsync = createAsyncAction(
  'LOAD_SERVICE_REQUEST',
  'LOAD_SERVICE_SUCCESS',
  'LOAD_SERVICE_FAILURE'
)<ServiceSearchOption, HospitalServiceModel, RestException>()

export const resetServicesState = createAction('RESET_SERVICES_STATE')<undefined>()

export const resetServiceState = createAction('RESET_SERVICE_STATE')<undefined>()

export type ServicesActionTypes =
  | ActionType<typeof loadServicesAsync>
  | ActionType<typeof appendServicesAsync>
  | ActionType<typeof loadServiceAsync>
  | ActionType<typeof resetServicesState>
  | ActionType<typeof resetServiceState>
