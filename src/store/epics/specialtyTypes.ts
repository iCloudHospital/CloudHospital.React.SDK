import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  appendSpecialtyTypesAsync,
  loadSpecialtyTypeAsync,
  loadSpecialtyTypesAsync,
  loadTranslatedSpecialtyTypeAsync
} from '../actions/specialtyTypes'

export const loadSpecialtyTypesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadSpecialtyTypesAsync.request)),
    switchMap((action) =>
      from(apis.specialtyTypes.loadSpecialtyTypes(action.payload)).pipe(
        map(loadSpecialtyTypesAsync.success),
        catchError((restException: RestException) => of(loadSpecialtyTypesAsync.failure(restException)))
      )
    )
  )

export const appendSpecialtyTypesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendSpecialtyTypesAsync.request)),
    switchMap((action) =>
      from(apis.specialtyTypes.loadSpecialtyTypes(action.payload)).pipe(
        map(appendSpecialtyTypesAsync.success),
        catchError((restException: RestException) => of(appendSpecialtyTypesAsync.failure(restException)))
      )
    )
  )

export const loadSpecialtyTypeEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadSpecialtyTypeAsync.request)),
    switchMap((action) =>
      from(apis.specialtyTypes.loadSpecialtyType(action.payload)).pipe(
        map(loadSpecialtyTypeAsync.success),
        catchError((restException: RestException) => of(loadSpecialtyTypeAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedSpecialtyTypeEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedSpecialtyTypeAsync.request)),
    switchMap((action) =>
      from(apis.specialtyTypes.loadSpecialtyType(action.payload)).pipe(
        map(loadTranslatedSpecialtyTypeAsync.success),
        catchError((restException: RestException) => of(loadTranslatedSpecialtyTypeAsync.failure(restException)))
      )
    )
  )

const specialtyTypesEpic = combineEpics(
  loadSpecialtyTypesEpic,
  appendSpecialtyTypesEpic,
  loadSpecialtyTypeEpic,
  loadTranslatedSpecialtyTypeEpic
)

export default specialtyTypesEpic
