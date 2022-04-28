import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  appendSpecialtiesAsync,
  loadSpecialtiesAsync,
  loadSpecialtyAsync,
  loadTranslatedSpecialtyAsync
} from '../actions/specialties'

export const loadSpecialtiesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadSpecialtiesAsync.request)),
    switchMap((action) =>
      from(apis.specialties.loadSpecialties(action.payload)).pipe(
        map(loadSpecialtiesAsync.success),
        // TODO: tap toastMessage
        catchError((restException: RestException) => of(loadSpecialtiesAsync.failure(restException)))
      )
    )
  )

export const appendSpecialtiesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendSpecialtiesAsync.request)),
    switchMap((action) =>
      from(apis.specialties.loadSpecialties(action.payload)).pipe(
        map(appendSpecialtiesAsync.success),
        catchError((restException: RestException) => of(appendSpecialtiesAsync.failure(restException)))
      )
    )
  )

export const loadSpecialtyEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadSpecialtyAsync.request)),
    switchMap((action) =>
      from(apis.specialties.loadSpecialty(action.payload)).pipe(
        map(loadSpecialtyAsync.success),
        catchError((restException: RestException) => of(loadSpecialtyAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedSpecialtyEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedSpecialtyAsync.request)),
    switchMap((action) =>
      from(apis.specialties.loadSpecialty(action.payload)).pipe(
        map(loadTranslatedSpecialtyAsync.success),
        catchError((restException: RestException) => of(loadTranslatedSpecialtyAsync.failure(restException)))
      )
    )
  )

const specialtiesEpic = combineEpics(
  loadSpecialtiesEpic,
  appendSpecialtiesEpic,
  loadSpecialtyEpic,
  loadTranslatedSpecialtyEpic
)

export default specialtiesEpic
