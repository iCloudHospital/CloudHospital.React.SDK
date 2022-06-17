import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  GroupChannelsApi,
  SendBirdGroupChannelModel,
  InviteSendBirdGroupChannelCommand
} from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function postInviteGroupChannel(channelUrl: string, userIds: string[]): Promise<boolean> {
  const data = {
    // eslint-disable-next-line @typescript-eslint/camelcase, camelcase
    user_ids: userIds
  } as InviteSendBirdGroupChannelCommand

  return new GroupChannelsApi(configuration, apiRoot, instance)
    .apiV2GroupchannelsChannelUrlInvitePost(channelUrl, data)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalGroupChannel(hospitalId: string): Promise<SendBirdGroupChannelModel> {
  return new GroupChannelsApi(configuration, apiRoot, instance)
    .apiV2GroupchannelsHospitalHospitalIdGet(hospitalId)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorGroupChannel(doctorId: string, hospitalId?: string | undefined): Promise<SendBirdGroupChannelModel> {
  return new GroupChannelsApi(configuration, apiRoot, instance)
    .apiV2GroupchannelsDoctorDoctorIdGet(doctorId, hospitalId)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDealGroupChannel(dealId: string, hospitalId?: string | undefined): Promise<SendBirdGroupChannelModel> {
  return new GroupChannelsApi(configuration, apiRoot, instance)
    .apiV2GroupchannelsDealDealIdGet(dealId, hospitalId)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  postInviteGroupChannel,
  loadHospitalGroupChannel,
  loadDoctorGroupChannel,
  loadDealGroupChannel
}
