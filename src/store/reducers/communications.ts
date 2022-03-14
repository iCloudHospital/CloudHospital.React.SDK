import { CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  CommunicationsActionTypes,
  showCommunications,
  setGroupCallLocator,
  loadCommunicationUserAsync
} from '../actions/communications'
import { GroupCallLocator } from '@azure/communication-calling'
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common'

export const isCommunicationsOpen = createReducer<boolean, CommunicationsActionTypes>(false as boolean).handleAction(
  [showCommunications],
  (state, action) => {
    console.log('show communications: ', action.payload)
    return action.payload
  }
)

export const groupCallLocator = createReducer<GroupCallLocator | null, CommunicationsActionTypes>(null).handleAction(
  [setGroupCallLocator],
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

export const communicationUserIdentifier = createReducer<CommunicationUserIdentifier | null, CommunicationsActionTypes>(
  null
)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.failure], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.success], (state, action) => {
    return action.payload.communicationUserId
      ? {
          communicationUserId: action.payload.communicationUserId
        }
      : null
  })

export const credential = createReducer<AzureCommunicationTokenCredential | null, CommunicationsActionTypes>(null)
  .handleAction([loadCommunicationUserAsync.request, loadCommunicationUserAsync.failure], (state, action) => null)
  .handleAction([loadCommunicationUserAsync.success], (state, action) => {
    return action.payload.token ? new AzureCommunicationTokenCredential(action.payload.token) : null
  })

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
