import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  ChatUsersApi,
  ChatUserModel,
  CreateChatUserCommand,
  UpdateChatUserCommand
} from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadChatUser(): Promise<ChatUserModel> {
  return new ChatUsersApi(configuration, apiRoot, instance)
    .apiV2ChatusersCurrentGet()
    .then((res) => {
      return res.data as ChatUserModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postChatUser(createChatUserCommand?: CreateChatUserCommand | undefined): Promise<ChatUserModel> {
  return new ChatUsersApi(configuration, apiRoot, instance)
    .apiV2ChatusersPost(createChatUserCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putChatUser(
  userId: string,
  updateChatUserCommand?: UpdateChatUserCommand | undefined
): Promise<ChatUserModel> {
  return new ChatUsersApi(configuration, apiRoot, instance)
    .apiV2ChatusersUserIdPut(userId, updateChatUserCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function deleteChatUser(userId: string): Promise<boolean> {
  return new ChatUsersApi(configuration, apiRoot, instance)
    .apiV2ChatusersUserIdDelete(userId)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadChatUser,
  postChatUser,
  putChatUser,
  deleteChatUser
}
