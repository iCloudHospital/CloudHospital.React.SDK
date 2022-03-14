import { combineEpics } from 'redux-observable'
import { from, of, tap } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import {
  loadPatientAsync,
  postPatientAsync,
  putPatientAsync,
  deletePatientAsync,
  resetPatientState,
} from '../actions/patients'
import { RestException } from '../../models/exceptions'
import { setMessage } from '../actions/toastMessages'
// import Router from 'next/router'

export const loadPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.loadPatient(action.payload)).pipe(
        map(loadPatientAsync.success),
        catchError((restException: RestException) =>
          of(loadPatientAsync.failure(restException)),
        ),
      ),
    ),
  )

export const postPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postPatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.postPatient(action.payload)).pipe(
        map(postPatientAsync.success),
        catchError((restException: RestException) =>
          of(postPatientAsync.failure(restException)),
        ),
      ),
    ),
  )

export const putPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putPatientAsync.request)),
    switchMap((action) =>
      from(
        apis.patients.putPatient(
          action.payload.patientId,
          action.payload.updatePatientCommand,
        ),
      ).pipe(
        switchMap((res) => [
          putPatientAsync.success(res),
          setMessage({ text: 'Update patient success', status: 200 }),
          resetPatientState(),
        ]),
        catchError((restException: RestException) =>
          of(setMessage(restException), putPatientAsync.failure(restException)),
        ),
      ),
    ),
  )

export const deletePatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(deletePatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.deletePatient(action.payload))
        // TODO Please check router usages
        // .pipe(tap(() => Router.back()))
        .pipe(
          switchMap((res) => [
            deletePatientAsync.success(res),
            setMessage({ text: 'Delete patient success', status: 200 }),
            resetPatientState(),
          ]),
          catchError((restException: RestException) =>
            of(
              setMessage(restException),
              deletePatientAsync.failure(restException),
            ),
          ),
        ),
    ),
  )

const patientsEpic = combineEpics(
  loadPatientEpic,
  postPatientEpic,
  putPatientEpic,
  deletePatientEpic,
)

export default patientsEpic
