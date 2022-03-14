import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalServicesAsync,
  appendHospitalServicesAsync,
  loadHospitalServiceAsync,
  loadHospitalServiceMediasAsync,
  appendHospitalServiceMediasAsync,
  loadHospitalServiceMediaAsync,
  resetHospitalServiceState,
} from '../actions/hospitalServices'
import { setMessage } from '../actions/toastMessages'

// #region HospitalServices
export const loadHospitalServicesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalServicesAsync.request)),
    switchMap((action) =>
      from(apis.hospitalServices.loadHospitalServices(action.payload)).pipe(
        map(loadHospitalServicesAsync.success),
        catchError((restException: RestException) =>
          of(loadHospitalServicesAsync.failure(restException)),
        ),
      ),
    ),
  )

export const appendHospitalServicesEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(appendHospitalServicesAsync.request)),
    switchMap((action) =>
      from(apis.hospitalServices.loadHospitalServices(action.payload)).pipe(
        map(appendHospitalServicesAsync.success),
        catchError((restException: RestException) =>
          of(appendHospitalServicesAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadHospitalServiceEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalServiceAsync.request)),
    switchMap((action) =>
      from(apis.hospitalServices.loadHospitalService(action.payload)).pipe(
        map(loadHospitalServiceAsync.success),
        catchError((restException: RestException) =>
          of(
            setMessage({ text: restException.title }),
            loadHospitalServiceAsync.failure(restException),
          ),
        ),
      ),
    ),
  )
// #endregion HospitalServices

// #region HospitalServiceMedias
export const loadHospitalServiceMediasEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(loadHospitalServiceMediasAsync.request)),
    switchMap((action) =>
      from(
        apis.hospitalServices.loadHospitalServiceMedias(action.payload),
      ).pipe(
        map(loadHospitalServiceMediasAsync.success),
        catchError((restException: RestException) =>
          of(loadHospitalServiceMediasAsync.failure(restException)),
        ),
      ),
    ),
  )

export const appendHospitalServiceMediasEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(appendHospitalServiceMediasAsync.request)),
    switchMap((action) =>
      from(
        apis.hospitalServices.loadHospitalServiceMedias(action.payload),
      ).pipe(
        map(appendHospitalServiceMediasAsync.success),
        catchError((restException: RestException) =>
          of(appendHospitalServiceMediasAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadHospitalServiceMediaEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(loadHospitalServiceMediaAsync.request)),
    switchMap((action) =>
      from(apis.hospitalServices.loadHospitalServiceMedia(action.payload)).pipe(
        map(loadHospitalServiceMediaAsync.success),
        catchError((restException: RestException) =>
          of(loadHospitalServiceMediaAsync.failure(restException)),
        ),
      ),
    ),
  )

// #endregion HospitalServiceMedias

const hospitalServicesEpic = combineEpics(
  loadHospitalServicesEpic,
  appendHospitalServicesEpic,
  loadHospitalServiceEpic,

  loadHospitalServiceMediasEpic,
  appendHospitalServiceMediasEpic,
  loadHospitalServiceMediaEpic,
)
export default hospitalServicesEpic
