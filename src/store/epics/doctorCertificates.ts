import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { loadDoctorCertificateAsync, loadDoctorCertificatesAsync } from '../actions/doctorCertificates'

export const loadDoctorCertificatesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorCertificatesAsync.request)),
    switchMap((action) =>
      from(apis.doctorCertificates.loadDoctorCertificates(action.payload)).pipe(
        map(loadDoctorCertificatesAsync.success),
        catchError((restException: RestException) => of(loadDoctorCertificatesAsync.failure(restException)))
      )
    )
  )

export const loadDoctorCertificateEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorCertificateAsync.request)),
    switchMap((action) =>
      from(apis.doctorCertificates.loadDoctorCertificate(action.payload.doctorId, action.payload.certificateId)).pipe(
        map(loadDoctorCertificateAsync.success),
        catchError((restException: RestException) => of(loadDoctorCertificateAsync.failure(restException)))
      )
    )
  )

const doctorCertificatesEpic = combineEpics(loadDoctorCertificatesEpic, loadDoctorCertificateEpic)
export default doctorCertificatesEpic
