import { SendBirdGroupChannelModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

export const loadHospitalGroupChannelAsync = createAsyncAction(
  'LOAD_HOSPITAL_GROUP_CHANNEL_REQUEST',
  'LOAD_HOSPITAL_GROUP_CHANNEL_SUCCESS',
  'LOAD_HOSPITAL_GROUP_CHANNEL_FAILURE'
)<string, SendBirdGroupChannelModel, RestException>()

export const loadDoctorGroupChannelAsync = createAsyncAction(
  'LOAD_DOCTOR_GROUP_CHANNEL_REQUEST',
  'LOAD_DOCTOR_GROUP_CHANNEL_SUCCESS',
  'LOAD_DOCTOR_GROUP_CHANNEL_FAILURE'
)<{ doctorId: string; hospitalId?: string | undefined }, SendBirdGroupChannelModel, RestException>()

export const loadDealGroupChannelAsync = createAsyncAction(
  'LOAD_DEAL_GROUP_CHANNEL_REQUEST',
  'LOAD_DEAL_GROUP_CHANNEL_SUCCESS',
  'LOAD_DEAL_GROUP_CHANNEL_FAILURE'
)<{ dealId: string; hospitalId?: string | undefined }, SendBirdGroupChannelModel, RestException>()

export const postInviteGroupChannelAsync = createAsyncAction(
  'POST_INVITE_GROUP_CHANNEL_REQUEST',
  'POST_INVITE_GROUP_CHANNEL_SUCCESS',
  'POST_INVITE_GROUP_CHANNEL_FAILURE'
)<{ channelUrl: string; user_ids: string[] }, boolean, RestException>()

export const resetGroupChannel = createAction('RESET_GROUP_CHANNEL_SUCCESS')<undefined>()

export type groupChannelsActionTypes =
  | ActionType<typeof loadHospitalGroupChannelAsync>
  | ActionType<typeof loadDoctorGroupChannelAsync>
  | ActionType<typeof loadDealGroupChannelAsync>
  | ActionType<typeof postInviteGroupChannelAsync>
  | ActionType<typeof resetGroupChannel>
