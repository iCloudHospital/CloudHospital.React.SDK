import { nameOf, useGenericSWR, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  ChatUsersApiApiV2ChatusersPostRequest,
  ChatUsersApiApiV2ChatusersPutRequest
} from 'ch-api-client-typescript2/lib/api/chat-users-api'
import { ChatUserModel } from 'ch-api-client-typescript2/lib/models/chat-user-model'

import { getChatUser, postChatUser, putChatUser } from '../services/chats'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/chatusers
export const postChatUserSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ChatUserModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ChatUserModel, RestException, ChatUsersApiApiV2ChatusersPostRequest>(
    operationName + nameOf(() => postChatUser),
    postChatUser,
    config
  )
}
// #endregion POST api/v2/chatusers

// #region GET api/v2/chatusers
export const getChatUserSWR = (
  operationName = '',
  payload: never,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ChatUserModel, RestException>
) => {
  return useGenericSWR<ChatUserModel, RestException, never>(
    operationName + nameOf(() => getChatUser),
    getChatUser,
    payload,
    shouldFetch,
    config
  )
}

export const getChatUserSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ChatUserModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ChatUserModel, RestException, never>(
    operationName + nameOf(() => getChatUser),
    getChatUser,
    config
  )
}
// #endregion GET api/v2/chatusers

// #region PUT api/v2/chatusers
export const putChatUserSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ChatUserModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<ChatUserModel, RestException, ChatUsersApiApiV2ChatusersPutRequest>(
    operationName + nameOf(() => putChatUser),
    putChatUser,
    config
  )
}
// #endregion PUT api/v2/chatusers

// #region PUT api/v2/chatusers
export const putChatUserSWR = (
  operationName = '',
  payload: ChatUsersApiApiV2ChatusersPutRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ChatUserModel, RestException>
) => {
  return useGenericSWR<ChatUserModel, RestException, ChatUsersApiApiV2ChatusersPutRequest>(
    operationName + nameOf(() => putChatUser),
    putChatUser,
    payload,
    shouldFetch,
    config
  )
}
// #endregion PUT api/v2/chatusers
