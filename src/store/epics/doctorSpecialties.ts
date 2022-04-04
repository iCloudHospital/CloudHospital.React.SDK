import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { loadDoctorSpecialtiesAsync } from '../actions/doctorSpecialties'

export const loadDoctorSpecialtiesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorSpecialtiesAsync.request)),
    switchMap((action) =>
      from(apis.doctorSpecialties.loadDoctorSpecialties(action.payload)).pipe(
        map(loadDoctorSpecialtiesAsync.success),
        catchError((restException: RestException) => of(loadDoctorSpecialtiesAsync.failure(restException)))
      )
    )
  )

const doctorSpecialtiesEpic = combineEpics(loadDoctorSpecialtiesEpic)
export default doctorSpecialtiesEpic
