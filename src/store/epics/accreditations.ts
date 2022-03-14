import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  appendAccreditationsAsync,
  loadAccreditationAsync,
  loadAccreditationsAsync,
  resetAccreditationState
} from '../actions/accreditations'
import { setMessage } from '../actions/toastMessages'
import { resetHospitalAccreditationsState } from '../actions/hospitalAccreditations'

export const loadAccreditationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadAccreditationsAsync.request)),
    switchMap((action) =>
      from(apis.accreditations.loadAccreditations(action.payload)).pipe(
        map(loadAccreditationsAsync.success),
        catchError((restException: RestException) => of(loadAccreditationsAsync.failure(restException)))
      )
    )
  )

export const appendAccreditationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendAccreditationsAsync.request)),
    switchMap((action) =>
      from(apis.accreditations.loadAccreditations(action.payload)).pipe(
        map(appendAccreditationsAsync.success),
        catchError((restException: RestException) => of(appendAccreditationsAsync.failure(restException)))
      )
    )
  )

export const loadAccreditationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadAccreditationAsync.request)),
    switchMap((action) =>
      from(apis.accreditations.loadAccreditation(action.payload)).pipe(
        map(loadAccreditationAsync.success),
        catchError((restException: RestException) => of(loadAccreditationAsync.failure(restException)))
      )
    )
  )

const accreditationsEpic = combineEpics(loadAccreditationsEpic, appendAccreditationsEpic, loadAccreditationEpic)

export default accreditationsEpic
