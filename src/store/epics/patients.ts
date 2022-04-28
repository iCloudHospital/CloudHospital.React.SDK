import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import {
  loadPatientAsync,
  postPatientAsync,
  putPatientAsync,
  deletePatientAsync,
  resetPatientState
} from '../actions/patients'
import { RestException } from '../../models/exceptions'
import { setToastMessage } from '../actions/toastMessages'

export const loadPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.loadPatient(action.payload)).pipe(
        map(loadPatientAsync.success),
        catchError((restException: RestException) => of(loadPatientAsync.failure(restException)))
      )
    )
  )

export const postPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postPatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.postPatient(action.payload)).pipe(
        map(postPatientAsync.success),
        catchError((restException: RestException) => of(postPatientAsync.failure(restException)))
      )
    )
  )

export const putPatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putPatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.putPatient(action.payload.patientId, action.payload.updatePatientCommand)).pipe(
        switchMap((res) => [
          putPatientAsync.success(res),
          setToastMessage({ text: 'Update patient success', type: 'success', statusCode: 200 }),
          resetPatientState()
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            putPatientAsync.failure(restException)
          )
        )
      )
    )
  )

export const deletePatientEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(deletePatientAsync.request)),
    switchMap((action) =>
      from(apis.patients.deletePatient(action.payload)).pipe(
        switchMap((res) => [
          deletePatientAsync.success(res),
          setToastMessage({ text: 'Delete patient success', type: 'success', statusCode: 200 }),
          resetPatientState()
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            deletePatientAsync.failure(restException)
          )
        )
      )
    )
  )

const patientsEpic = combineEpics(loadPatientEpic, postPatientEpic, putPatientEpic, deletePatientEpic)

export default patientsEpic
