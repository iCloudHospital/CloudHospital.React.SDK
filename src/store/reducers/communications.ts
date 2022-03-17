import { CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  CommunicationsActionTypes,
  showCommunications,
  setGroupCallId,
  loadCommunicationUserAsync
} from '../actions/communications'

export const isCommunicationsOpen = createReducer<boolean, CommunicationsActionTypes>(false as boolean).handleAction(
  [showCommunications],
  (state, action) => {
    console.log('show communications: ', action.payload)
    return action.payload
  }
)

export const groupCallLocator = createReducer<string | null, CommunicationsActionTypes>(null).handleAction(
  [setGroupCallId],
  (state, action) => action.payload
)

export const isLoadingCommunicationUser = createReducer<boolean, CommunicationsActionTypes>(false as boolean)
  .handleAction([loadCommunicationUserAsync.success, loadCommunicationUserAsync.failure], (state, action) => false)
  .handleAction([loadCommunicationUserAsync.request], (state, action) => true)

export const loadCommuncationUserErrors = createReducer<RestException | null, CommunicationsActionTypes>(null)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.success], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.failure], (state, action) => action.payload)

export const communicationUser = createReducer<CommunicationUserTokenModel | null, CommunicationsActionTypes>(null)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.failure], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.success], (state, action) => action.payload)

export const communicationUserIdentifier = createReducer<string | null | undefined, CommunicationsActionTypes>(null)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.failure], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.success], (state, action) => action.payload.communicationUserId)

export const credential = createReducer<string | null | undefined, CommunicationsActionTypes>(null)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.failure], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.success], (state, action) => action.payload.token)

const communicationsState = combineReducers({
  isCommunicationsOpen,
  groupCallLocator,
  isLoadingCommunicationUser,
  loadCommuncationUserErrors,
  communicationUser,
  communicationUserIdentifier,
  credential
})

export default communicationsState
export type CommunicationsState = ReturnType<typeof communicationsState>
