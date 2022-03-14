import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, finalize, map, switchMap, tap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalAccreditationsAsync,
  appendHospitalAccreditationsAsync,
  loadHospitalAccreditationAsync,
  resetHospitalAccreditationState
} from '../actions/hospitalAccreditations'
import { setMessage } from '../actions/toastMessages'

// #region HospitalAccreditations
export const loadHospitalAccreditationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalAccreditationsAsync.request)),
    switchMap((action) =>
      from(apis.hospitalAccreditations.loadHospitalAccreditations(action.payload)).pipe(
        map(loadHospitalAccreditationsAsync.success),
        catchError((restException: RestException) => of(loadHospitalAccreditationsAsync.failure(restException)))
      )
    )
  )

export const appendHospitalAccreditationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalAccreditationsAsync.request)),
    switchMap((action) =>
      from(apis.hospitalAccreditations.loadHospitalAccreditations(action.payload)).pipe(
        map(appendHospitalAccreditationsAsync.success),
        catchError((restException: RestException) => of(appendHospitalAccreditationsAsync.failure(restException)))
      )
    )
  )

export const loadHospitalAccreditationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalAccreditationAsync.request)),
    switchMap((action) =>
      from(
        apis.hospitalAccreditations.loadHospitalAccreditation(action.payload.hospitalId, action.payload.accreditationId)
      ).pipe(
        map(loadHospitalAccreditationAsync.success),
        catchError((restException: RestException) => of(loadHospitalAccreditationAsync.failure(restException)))
      )
    )
  )
// #endregion HospitalAccreditations

const hospitalAccreditationsEpic = combineEpics(
  loadHospitalAccreditationsEpic,
  appendHospitalAccreditationsEpic,
  loadHospitalAccreditationEpic
)
export default hospitalAccreditationsEpic
