import { nameOf, useGenericSWR, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  GroupChannelsApiApiV2GroupchannelsChannelUrlInviteHospitalIdManagerPostRequest,
  GroupChannelsApiApiV2GroupchannelsChannelUrlInvitePostRequest,
  GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest,
  GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest,
  GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest
} from 'ch-api-client-typescript2/lib/api/group-channels-api'
import { SendBirdGroupChannelModel } from 'ch-api-client-typescript2/lib/models/send-bird-group-channel-model'
import {
  getDealGroupChannelByDealId,
  getDoctorGroupChannelByDoctorId,
  getHospitalGroupChannelByHospitalId,
  postChannelUrlInvite,
  postChannelUrlInviteHospitalIdManager
} from '@services/groupChannels'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/groupchannels/{chanelUrl}/inite
export const postGroupChannelsChannelUrlInviteSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SendBirdGroupChannelModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsChannelUrlInvitePostRequest
  >(operationName + nameOf(() => postChannelUrlInvite), postChannelUrlInvite, config)
}
// #endregion POST api/v2/groupchannels/{chanelUrl}

// #region POST api/v2/groupchannels/{chanelUrl}/invite/{hospitalId}/manager
export const getChannelUrlInviteHospitalIdManagerSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    boolean,
    RestException,
    GroupChannelsApiApiV2GroupchannelsChannelUrlInviteHospitalIdManagerPostRequest
  >(operationName + nameOf(() => postChannelUrlInviteHospitalIdManager), postChannelUrlInviteHospitalIdManager, config)
}
// #endregion POST api/v2/groupchannels/{chanelUrl}/invite/{hospitalId}/manager

// #region GET api/v2/groupchannels/hospital/{hospitalId}
export const getHospitalGroupChannelByHospitalIdSWR = (
  operationName = '',
  payload: GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SendBirdGroupChannelModel, RestException>
) => {
  return useGenericSWR<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest
  >(
    operationName + nameOf(() => getHospitalGroupChannelByHospitalId),
    getHospitalGroupChannelByHospitalId,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalGroupChannelByHospitalIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SendBirdGroupChannelModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsHospitalHospitalIdGetRequest
  >(operationName + nameOf(() => getHospitalGroupChannelByHospitalId), getHospitalGroupChannelByHospitalId, config)
}
// #endregion GET api/v2/groupchannels/hospital/{hospitalId}

// #region GET api/v2/groupchannels/doctor/{doctorId}
export const getDoctorGroupChannelByDoctorIdSWR = (
  operationName = '',
  payload: GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SendBirdGroupChannelModel, RestException>
) => {
  return useGenericSWR<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest
  >(
    operationName + nameOf(() => getDoctorGroupChannelByDoctorId),
    getDoctorGroupChannelByDoctorId,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorGroupChannelByDoctorIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SendBirdGroupChannelModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsDoctorDoctorIdGetRequest
  >(operationName + nameOf(() => getDoctorGroupChannelByDoctorId), getDoctorGroupChannelByDoctorId, config)
}
// #endregion GET api/v2/groupchannels/doctor/{doctorId}

// #region GET api/v2/groupchannels/deal/{dealId}
export const getDealGroupChannelByDealIdSWR = (
  operationName = '',
  payload: GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<SendBirdGroupChannelModel, RestException>
) => {
  return useGenericSWR<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest
  >(
    operationName + nameOf(() => getDealGroupChannelByDealId),
    getDealGroupChannelByDealId,
    payload,
    shouldFetch,
    config
  )
}

export const getDealGroupChannelByDealIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<SendBirdGroupChannelModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    SendBirdGroupChannelModel,
    RestException,
    GroupChannelsApiApiV2GroupchannelsDealDealIdGetRequest
  >(operationName + nameOf(() => getDealGroupChannelByDealId), getDealGroupChannelByDealId, config)
}
// #endregion GET api/v2/groupchannels/deal/{dealId}
