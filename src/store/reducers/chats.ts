import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  ChatsActionTypes,
  loadChatUserAsync,
  postChatUserAsync,
  putChatUserAsync,
  showChat,
  resetChatUserState,
  showDefaultChat
} from '../actions/chats'
import { ChatUserModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'

export const isLoadingChatUser = createReducer<boolean, ChatsActionTypes>(false as boolean)
  .handleAction([resetChatUserState, loadChatUserAsync.success, loadChatUserAsync.failure], (state, action) => false)
  .handleAction([loadChatUserAsync.request], (state, action) => true)

export const loadChatUserErrors = createReducer<RestException | null, ChatsActionTypes>(null)
  .handleAction([resetChatUserState, loadChatUserAsync.request, loadChatUserAsync.success], (state, action) => null)
  .handleAction([loadChatUserAsync.failure], (state, action) => action.payload)

export const chatUser = createReducer<ChatUserModel | null, ChatsActionTypes>(null)
  .handleAction([resetChatUserState, loadChatUserAsync.request, loadChatUserAsync.failure], (state, action) => null)
  .handleAction([loadChatUserAsync.success], (state, action) => action.payload)

export const isUpdatingChatUser = createReducer<boolean, ChatsActionTypes>(false as boolean)
  .handleAction([postChatUserAsync.request, putChatUserAsync.request], (state, action) => true)
  .handleAction(
    [postChatUserAsync.success, postChatUserAsync.failure, putChatUserAsync.success, putChatUserAsync.failure],
    (state, action) => false
  )

export const postChatUserErrors = createReducer<RestException | null, ChatsActionTypes>(null)
  .handleAction([postChatUserAsync.failure], (state, action) => action.payload)
  .handleAction([postChatUserAsync.request, postChatUserAsync.success], (state, action) => null)

export const postChatUserCompleted = createReducer<ChatUserModel | null, ChatsActionTypes>(null)
  .handleAction([resetChatUserState, postChatUserAsync.request, postChatUserAsync.failure], (state, action) => null)
  .handleAction([postChatUserAsync.success], (state, action) => action.payload)

export const putChatUserErrors = createReducer<RestException | null, ChatsActionTypes>(null)
  .handleAction([putChatUserAsync.failure], (state, action) => action.payload)
  .handleAction([putChatUserAsync.request, putChatUserAsync.success], (state, action) => null)

export const putChatUserCompleted = createReducer<ChatUserModel | null, ChatsActionTypes>(null)
  .handleAction([resetChatUserState, putChatUserAsync.request, putChatUserAsync.failure], (state, action) => null)
  .handleAction([putChatUserAsync.success], (state, action) => action.payload)

export const isChatOpen = createReducer<boolean, ChatsActionTypes>(false as boolean).handleAction(
  [showChat],
  (state, action) => action.payload
)

export const defaultChatVisibility = createReducer<boolean, ChatsActionTypes>(false as boolean).handleAction(
  [showDefaultChat],
  (state, action) => action.payload
)

const chatsState = combineReducers({
  isLoadingChatUser,
  loadChatUserErrors,
  chatUser,

  isUpdatingChatUser,
  postChatUserErrors,
  postChatUserCompleted,
  putChatUserErrors,
  putChatUserCompleted,
  isChatOpen,
  defaultChatVisibility
})

export default chatsState
export type ChatsState = ReturnType<typeof chatsState>
