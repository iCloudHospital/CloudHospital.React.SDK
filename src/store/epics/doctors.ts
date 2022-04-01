import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadDoctorsAsync,
  loadDoctorAsync,
  loadTranslatedDoctorAsync,
  loadDoctorAffiliationsAsync,
  loadDoctorAffiliationAsync,
  appendDoctorsAsync,
  loadDoctorsSimpleAsync
} from '../actions/doctors'

// #region Doctors
export const loadDoctorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorsAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctors(action.payload)).pipe(
        map(loadDoctorsAsync.success),
        catchError((restException: RestException) => of(loadDoctorsAsync.failure(restException)))
      )
    )
  )

export const appendDoctorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendDoctorsAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctors(action.payload)).pipe(
        map(appendDoctorsAsync.success),
        catchError((restException: RestException) => of(appendDoctorsAsync.failure(restException)))
      )
    )
  )

export const loadDoctorEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctor(action.payload)).pipe(
        map(loadDoctorAsync.success),
        catchError((restException: RestException) => of(loadDoctorAsync.failure(restException)))
      )
    )
  )

export const loadDoctorsSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorsSimpleAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctorsSimple(action.payload)).pipe(
        map(loadDoctorsSimpleAsync.success),
        catchError((restException: RestException) => of(loadDoctorsSimpleAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedDoctorEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedDoctorAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctor(action.payload)).pipe(
        map(loadTranslatedDoctorAsync.success),
        catchError((restException: RestException) => of(loadTranslatedDoctorAsync.failure(restException)))
      )
    )
  )
// #endregion Doctors

// #region Doctor Affiliations
export const loadDoctorAffiliationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorAffiliationsAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctorAffiliations(action.payload)).pipe(
        map(loadDoctorAffiliationsAsync.success),
        catchError((restException: RestException) => of(loadDoctorAffiliationsAsync.failure(restException)))
      )
    )
  )

export const loadDoctorAffiliationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorAffiliationAsync.request)),
    switchMap((action) =>
      from(apis.doctors.loadDoctorAffiliation(action.payload)).pipe(
        map(loadDoctorAffiliationAsync.success),
        catchError((restException: RestException) => of(loadDoctorAffiliationAsync.failure(restException)))
      )
    )
  )

// #endregion Doctor Affiliations

const doctorsEpic = combineEpics(
  loadDoctorsEpic,
  appendDoctorsEpic,
  loadDoctorEpic,
  loadTranslatedDoctorEpic,
  loadDoctorAffiliationsEpic,
  loadDoctorAffiliationEpic
)

export default doctorsEpic
