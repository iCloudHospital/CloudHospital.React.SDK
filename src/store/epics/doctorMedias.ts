import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {} from '../actions/deals'
import { loadDoctorMediasAsync, appendDoctorMediasAsync, loadDoctorMediaAsync } from '../actions/doctorMedias'

// #region DoctorMedias
export const loadDoctorMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorMediasAsync.request)),
    switchMap((action) =>
      from(apis.doctorMedias.loadDoctorMedias(action.payload)).pipe(
        map(loadDoctorMediasAsync.success),
        catchError((restException: RestException) => of(loadDoctorMediasAsync.failure(restException)))
      )
    )
  )

export const appendDoctorMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendDoctorMediasAsync.request)),
    switchMap((action) =>
      from(apis.doctorMedias.loadDoctorMedias(action.payload)).pipe(
        map(appendDoctorMediasAsync.success),
        catchError((restException: RestException) => of(appendDoctorMediasAsync.failure(restException)))
      )
    )
  )

export const loadDoctorMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorMediaAsync.request)),
    switchMap((action) =>
      from(apis.doctorMedias.loadDoctorMedia(action.payload.doctorId, action.payload.mediaId)).pipe(
        map(loadDoctorMediaAsync.success),
        catchError((restException: RestException) => of(loadDoctorMediaAsync.failure(restException)))
      )
    )
  )

// #endregion DoctorMedias

const doctorMediasEpic = combineEpics(loadDoctorMediasEpic, appendDoctorMediasEpic, loadDoctorMediaEpic)

export default doctorMediasEpic
