import { SendBirdGroupChannelModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { groupChannelsActionTypes, loadDealGroupChannelAsync, loadDoctorGroupChannelAsync, loadHospitalGroupChannelAsync, postInviteGroupChannelAsync } from '../actions/groupChannels'

export const isLoadingGroupChannel = createReducer<boolean, groupChannelsActionTypes>(false as boolean)
  .handleAction(
    [loadHospitalGroupChannelAsync.request, loadDoctorGroupChannelAsync.request, loadDealGroupChannelAsync.request],
    (state, action) => true
  )
  .handleAction(
    [
      loadHospitalGroupChannelAsync.success,
      loadHospitalGroupChannelAsync.failure,
      loadDoctorGroupChannelAsync.success,
      loadDoctorGroupChannelAsync.failure,
      loadDealGroupChannelAsync.success,
      loadDealGroupChannelAsync.failure
    ],
    (state, action) => false
  )

export const loadGroupChannelErrors = createReducer<RestException | null, groupChannelsActionTypes>(null)
  .handleAction(
    [
      loadHospitalGroupChannelAsync.request,
      loadHospitalGroupChannelAsync.success,
      loadDoctorGroupChannelAsync.request,
      loadDoctorGroupChannelAsync.success,
      loadDealGroupChannelAsync.request,
      loadDealGroupChannelAsync.success,
      postInviteGroupChannelAsync.request,
      postInviteGroupChannelAsync.success,
    ],
    (state, action) => null
  )
  .handleAction(
    [
      loadHospitalGroupChannelAsync.failure,
      loadDoctorGroupChannelAsync.failure,
      loadDealGroupChannelAsync.failure,
      postInviteGroupChannelAsync.failure
    ],
    (state, action) => action.payload
  )

export const groupChannel = createReducer<SendBirdGroupChannelModel | null, groupChannelsActionTypes>(null)
  .handleAction(
    [
      loadHospitalGroupChannelAsync.request,
      loadHospitalGroupChannelAsync.failure,
      loadDoctorGroupChannelAsync.request,
      loadDoctorGroupChannelAsync.failure,
      loadDealGroupChannelAsync.request,
      loadDealGroupChannelAsync.failure,
    ],
    (state, action) => null
  )
  .handleAction(
    [loadHospitalGroupChannelAsync.success, loadDoctorGroupChannelAsync.success, loadDealGroupChannelAsync.success],
    (state, action) => action.payload
  )

export const postInviteGroupChannelSuccess = createReducer<boolean, groupChannelsActionTypes>(false as boolean)
  .handleAction([postInviteGroupChannelAsync.request, postInviteGroupChannelAsync.failure], (state, action) => false)
  .handleAction([postInviteGroupChannelAsync.success], (state, action) => false)

const groupChannelsState = combineReducers({
  isLoadingGroupChannel,
  loadGroupChannelErrors,
  postInviteGroupChannelSuccess
})

export default groupChannelsState
export type GroupChannelsState = ReturnType<typeof groupChannelsState>