import { combineEpics } from 'redux-observable'
import { RootEpic } from 'CHTypes'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { loadHospitalGroupChannelAsync, loadDoctorGroupChannelAsync, loadDealGroupChannelAsync, postInviteGroupChannelAsync } from '../actions/groupChannels'
import { InviteSendBirdGroupChannelCommand } from 'ch-api-client-typescript2/lib'

export const loadHospitalGroupChannelEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalGroupChannelAsync.request)),
    switchMap((action) =>
      from(apis.groupChannels.loadHospitalGroupChannel(action.payload)).pipe(
        map(loadHospitalGroupChannelAsync.success),
        catchError((restException: RestException) => of(loadHospitalGroupChannelAsync.failure(restException)))
      )
    )
  )

export const loadDoctorGroupChannelEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorGroupChannelAsync.request)),
    switchMap((action) =>
      from(apis.groupChannels.loadDoctorGroupChannel(action.payload.doctorId, action.payload.hospitalId)).pipe(
        map(loadDoctorGroupChannelAsync.success),
        catchError((restException: RestException) => of(loadDoctorGroupChannelAsync.failure(restException)))
      )
    )
  )

export const loadDealGroupChannelEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealGroupChannelAsync.request)),
    switchMap((action) =>
      from(apis.groupChannels.loadDealGroupChannel(action.payload.dealId, action.payload.hospitalId)).pipe(
        map(loadDealGroupChannelAsync.success),
        catchError((restException: RestException) => of(loadDealGroupChannelAsync.failure(restException)))
      )
    )
  )

export const postInviteGroupChannelEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postInviteGroupChannelAsync.request)),
    switchMap((action) =>
      from(apis.groupChannels.postInviteGroupChannel(action.payload.channelUrl, action.payload.user_ids)).pipe(
        map(postInviteGroupChannelAsync.success),
        catchError((restException: RestException) => of(postInviteGroupChannelAsync.failure(restException)))
      )
    )
  )

const groupChannelsEpic = combineEpics(
  loadHospitalGroupChannelEpic,
  loadDoctorGroupChannelEpic,
  loadDealGroupChannelEpic,
  postInviteGroupChannelEpic
)

export default groupChannelsEpic
