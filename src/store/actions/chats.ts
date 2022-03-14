import { CreateChatUserCommand, ChatUserModel, UpdateChatUserCommand } from 'ch-api-client-typescript2/lib'
import { ActionType, createAsyncAction, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

export const loadChatUserAsync = createAsyncAction(
  'LOAD_CHATUSER_REQUEST',
  'LOAD_CHATUSER_SUCCESS',
  'LOAD_CHATUSER_FAILURE'
)<undefined, ChatUserModel, RestException>()

export const postChatUserAsync = createAsyncAction(
  'POST_CHATUSER_REQUEST',
  'POST_CHATUSER_SUCCESS',
  'POST_CHATUSER_FAILURE'
)<CreateChatUserCommand, ChatUserModel, RestException>()

export const putChatUserAsync = createAsyncAction(
  'PUT_CHATUSER_REQUEST',
  'PUT_CHATUSER_SUCCESS',
  'PUT_CHATUSER_FAILURE'
)<{ userId: string; updateChatUserCommand?: UpdateChatUserCommand | undefined }, ChatUserModel, RestException>()

export const resetChatUserState = createAction('RESET_CHATUSER-STATE')<undefined>()

export const showChat = createAction('SHOW_CHAT')<boolean>()

export const showDefaultChat = createAction('SHOW_DEFAULT_CHAT')<boolean>()

export type ChatsActionTypes =
  | ActionType<typeof loadChatUserAsync>
  | ActionType<typeof postChatUserAsync>
  | ActionType<typeof putChatUserAsync>
  | ActionType<typeof resetChatUserState>
  | ActionType<typeof showChat>
  | ActionType<typeof showDefaultChat>
