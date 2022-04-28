import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { loadDoctorEducationAsync, loadDoctorEducationsAsync } from '../actions/doctorEducations'

export const loadDoctorEducationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorEducationsAsync.request)),
    switchMap((action) =>
      from(apis.doctorEducations.loadDoctorEducations(action.payload)).pipe(
        map(loadDoctorEducationsAsync.success),
        catchError((restException: RestException) => of(loadDoctorEducationsAsync.failure(restException)))
      )
    )
  )

export const loadDoctorEducationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorEducationAsync.request)),
    switchMap((action) =>
      from(apis.doctorEducations.loadDoctorEducation(action.payload.doctorId, action.payload.educationId)).pipe(
        map(loadDoctorEducationAsync.success),
        catchError((restException: RestException) => of(loadDoctorEducationAsync.failure(restException)))
      )
    )
  )

const doctorEducationsEpic = combineEpics(loadDoctorEducationsEpic, loadDoctorEducationEpic)
export default doctorEducationsEpic
