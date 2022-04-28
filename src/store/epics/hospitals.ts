import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalsAsync,
  loadHospitalAsync,
  appendHospitalsAsync,
  loadHospitalMediasAsync,
  appendHospitalMediasAsync,
  loadHospitalMediaAsync,
  loadTranslatedHospitalAsync,
  loadHospitalsSimpleAsync,
  appendHospitalsSimpleAsync
} from '../actions/hospitals'

// #region Hospitals
export const loadHospitalsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalsAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitals(action.payload)).pipe(
        map(loadHospitalsAsync.success),
        catchError((restException: RestException) => of(loadHospitalsAsync.failure(restException)))
      )
    )
  )

export const appendHospitalsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalsAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitals(action.payload)).pipe(
        map(appendHospitalsAsync.success),
        catchError((restException: RestException) => of(appendHospitalsAsync.failure(restException)))
      )
    )
  )

export const loadHospitalsSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalsSimpleAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitalsSimple(action.payload)).pipe(
        map(loadHospitalsSimpleAsync.success),
        catchError((restException: RestException) => of(loadHospitalsSimpleAsync.failure(restException)))
      )
    )
  )

export const appendHospitalsSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalsSimpleAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitalsSimple(action.payload)).pipe(
        map(appendHospitalsSimpleAsync.success),
        catchError((restException: RestException) => of(appendHospitalsSimpleAsync.failure(restException)))
      )
    )
  )

export const loadHospitalEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospital(action.payload)).pipe(
        map(loadHospitalAsync.success),
        catchError((restException: RestException) => of(loadHospitalAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedHospitalEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedHospitalAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospital(action.payload)).pipe(
        map(loadTranslatedHospitalAsync.success),
        catchError((restException: RestException) => of(loadTranslatedHospitalAsync.failure(restException)))
      )
    )
  )
// #endregion Hospitals

// #region HospitalMedias
export const loadHospitalMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalMediasAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitalMedias(action.payload)).pipe(
        map(loadHospitalMediasAsync.success),
        catchError((restException: RestException) => of(loadHospitalMediasAsync.failure(restException)))
      )
    )
  )

export const appendHospitalMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalMediasAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitalMedias(action.payload)).pipe(
        map(appendHospitalMediasAsync.success),
        catchError((restException: RestException) => of(appendHospitalMediasAsync.failure(restException)))
      )
    )
  )

export const loadHospitalMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalMediaAsync.request)),
    switchMap((action) =>
      from(apis.hospitals.loadHospitalMedia(action.payload.hospitalId, action.payload.mediaId)).pipe(
        map(loadHospitalMediaAsync.success),
        catchError((restException: RestException) => of(loadHospitalMediaAsync.failure(restException)))
      )
    )
  )
// #endregion HospitalMedias

const hospitalsEpic = combineEpics(
  loadHospitalsEpic,
  appendHospitalsEpic,
  loadHospitalsSimpleEpic,
  appendHospitalsSimpleEpic,
  loadHospitalEpic,
  loadTranslatedHospitalEpic,

  loadHospitalMediasEpic,
  appendHospitalMediasEpic,
  loadHospitalMediaEpic
)
export default hospitalsEpic
