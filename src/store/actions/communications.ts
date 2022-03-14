import { CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAsyncAction, createAction } from 'typesafe-actions'
import { GroupCallLocator } from '@azure/communication-calling'
import { RestException } from '../../models/exceptions'

export const showCommunications = createAction('SHOW_COMMUNICATIONS')<boolean>()
export const setGroupCallLocator = createAction('SET_GROUPCALL_LOCATOR')<GroupCallLocator | null>()

export const loadCommunicationUserAsync = createAsyncAction(
  'LOAD_COMMUNICATIONUSER_REQUEST',
  'LOAD_COMMUNICATIONUSER_SUCCESS',
  'LOAD_COMMUNICATIONUSER_FAILURE'
)<undefined, CommunicationUserTokenModel, RestException>()

export const revokeCommunicationUserAsync = createAsyncAction(
  'REVOKE_COMMUNICATIONUSER_REQUEST',
  'REVOKE_COMMUNICATIONUSER_SUCCESS',
  'REVOKE_COMMUNICATIONUSER_FAILURE'
)<undefined, CommunicationUserTokenModel, RestException>()

export const deleteCommunicationUserAsync = createAsyncAction(
  'DELETE_COMMUNICATIONUSER_REQUEST',
  'DELETE_COMMUNICATIONUSER_SUCCESS',
  'DELETE_COMMUNICATIONUSER_FAILURE'
)<undefined, boolean, RestException>()

export type CommunicationsActionTypes =
  | ActionType<typeof showCommunications>
  | ActionType<typeof setGroupCallLocator>
  | ActionType<typeof loadCommunicationUserAsync>
  | ActionType<typeof revokeCommunicationUserAsync>
  | ActionType<typeof deleteCommunicationUserAsync>
