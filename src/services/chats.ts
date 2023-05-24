import {
  ChatUsersApi,
  ChatUsersApiApiV2ChatusersPostRequest,
  ChatUsersApiApiV2ChatusersPutRequest
} from 'ch-api-client-typescript2/lib/api/chat-users-api'
import { ChatUserModel } from 'ch-api-client-typescript2/lib/models/chat-user-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const postChatUser = async (payload?: ChatUsersApiApiV2ChatusersPostRequest): Promise<ChatUserModel> => {
  return new ChatUsersApi(configuration, undefined, instance)
    .apiV2ChatusersPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getChatUser = async (): Promise<ChatUserModel> => {
  return new ChatUsersApi(configuration, undefined, instance)
    .apiV2ChatusersCurrentGet()
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putChatUser = async (payload?: ChatUsersApiApiV2ChatusersPutRequest): Promise<ChatUserModel> => {
  return new ChatUsersApi(configuration, undefined, instance)
    .apiV2ChatusersPut(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const deleteChatUser = async (): Promise<boolean> => {
  return new ChatUsersApi(configuration, undefined, instance)
    .apiV2ChatusersDelete()
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const chats = {
  getChatUser,
  postChatUser,
  putChatUser,
  deleteChatUser
}

export default chats
