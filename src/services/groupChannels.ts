import {
  GroupChannelsApi,
  GroupChannelsApiApiV2GroupchannelsChannelUrlInviteHospitalIdManagerPostRequest,
  GroupChannelsApiApiV2GroupchannelsChannelUrlInvitePostRequest,
  GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest,
  GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest,
  GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest
} from 'ch-api-client-typescript2/lib/api/group-channels-api'
import { SendBirdGroupChannelModel } from 'ch-api-client-typescript2/lib/models/send-bird-group-channel-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const postChannelUrlInvite = async (
  payload: GroupChannelsApiApiV2GroupchannelsChannelUrlInvitePostRequest
): Promise<SendBirdGroupChannelModel> => {
  return new GroupChannelsApi(configuration, undefined, instance)
    .apiV2GroupchannelsChannelUrlInvitePost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postChannelUrlInviteHospitalIdManager = async (
  payload: GroupChannelsApiApiV2GroupchannelsChannelUrlInviteHospitalIdManagerPostRequest
): Promise<boolean> => {
  return new GroupChannelsApi(configuration, undefined, instance)
    .apiV2GroupchannelsChannelUrlInviteHospitalIdManagerPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const errorResponse = error.response
      throw errorResponse
      // const restException = error.response.data as RestException
      // throw restException
    })
}

export const getHospitalGroupChannelByHospitalId = async (
  payload: GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest
): Promise<SendBirdGroupChannelModel> => {
  return new GroupChannelsApi(configuration, undefined, instance)
    .apiV2GroupchannelsHospitalHospitalIdGet(payload)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorGroupChannelByDoctorId = async (
  payload: GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest
): Promise<SendBirdGroupChannelModel> => {
  return new GroupChannelsApi(configuration, undefined, instance)
    .apiV2GroupchannelsDoctorDoctorIdGet(payload)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDealGroupChannelByDealId = async (
  payload: GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest
): Promise<SendBirdGroupChannelModel> => {
  return new GroupChannelsApi(configuration, undefined, instance)
    .apiV2GroupchannelsDealDealIdGet(payload)
    .then((res) => {
      return res.data as SendBirdGroupChannelModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const groupChannels = {
  postChannelUrlInvite,
  postChannelUrlInviteHospitalIdManager,
  getHospitalGroupChannelByHospitalId,
  getDoctorGroupChannelByDoctorId,
  getDealGroupChannelByDealId
}

export default groupChannels
