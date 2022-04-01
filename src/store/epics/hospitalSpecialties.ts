import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalSpecialtiesAsync,
  appendHospitalSpecialtiesAsync,
  loadHospitalSpecialtyAsync,
  loadHospitalSpecialtiesSimpleAsync
} from '../actions/hospitalSpecialties'

// #region HospitalSpecialties
export const loadHospitalSpecialtiesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalSpecialtiesAsync.request)),
    switchMap((action) =>
      from(apis.hospitalSpecialties.loadHospitalSpecialties(action.payload)).pipe(
        map(loadHospitalSpecialtiesAsync.success),
        catchError((restException: RestException) => of(loadHospitalSpecialtiesAsync.failure(restException)))
      )
    )
  )

export const appendHospitalSpecialtiesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalSpecialtiesAsync.request)),
    switchMap((action) =>
      from(apis.hospitalSpecialties.loadHospitalSpecialties(action.payload)).pipe(
        map(appendHospitalSpecialtiesAsync.success),
        catchError((restException: RestException) => of(appendHospitalSpecialtiesAsync.failure(restException)))
      )
    )
  )

export const loadHospitalSpecialtyEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalSpecialtyAsync.request)),
    switchMap((action) =>
      from(apis.hospitalSpecialties.loadHospitalSpecialty(action.payload.hospitalId, action.payload.specialtyId)).pipe(
        map(loadHospitalSpecialtyAsync.success),
        catchError((restException: RestException) => of(loadHospitalSpecialtyAsync.failure(restException)))
      )
    )
  )

export const loadHospitalSpecialtiesSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalSpecialtiesSimpleAsync.request)),
    switchMap((action) =>
      from(apis.hospitalSpecialties.loadHospitalSpecialtiesSimple(action.payload)).pipe(
        map(loadHospitalSpecialtiesSimpleAsync.success),
        catchError((restException: RestException) => of(loadHospitalSpecialtiesSimpleAsync.failure(restException)))
      )
    )
  )

// #endregion HospitalSpecialties

const hospitalSpecialtiesEpic = combineEpics(
  loadHospitalSpecialtiesEpic,
  appendHospitalSpecialtiesEpic,
  loadHospitalSpecialtyEpic,
  loadHospitalSpecialtiesSimpleEpic
)
export default hospitalSpecialtiesEpic
