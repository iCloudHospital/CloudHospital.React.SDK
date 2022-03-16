import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalSpecialtiesAsync,
  appendHospitalSpecialtiesAsync,
  loadHospitalSpecialtyAsync,
  resetHospitalSpecialtyState
} from '../actions/hospitalSpecialties'

import { setMessage } from '../actions/toastMessages'

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

// #endregion HospitalSpecialties

const hospitalSpecialtiesEpic = combineEpics(
  loadHospitalSpecialtiesEpic,
  appendHospitalSpecialtiesEpic,
  loadHospitalSpecialtyEpic
)
export default hospitalSpecialtiesEpic
