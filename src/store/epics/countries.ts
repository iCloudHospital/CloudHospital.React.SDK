import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import {
  appendCountriesAsync,
  loadCountriesAsync,
  loadCountryAsync,
  loadTranslatedCountryAsync
} from '../actions/countries'
import { RestException } from '../../models/exceptions'

export const loadCountriesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadCountriesAsync.request)),
    switchMap((action) =>
      from(apis.countries.loadCountries(action.payload)).pipe(
        map(loadCountriesAsync.success),
        catchError((restException: RestException) => of(loadCountriesAsync.failure(restException)))
      )
    )
  )

export const loadCountryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadCountryAsync.request)),
    switchMap((action) =>
      from(apis.countries.loadCountry(action.payload)).pipe(
        map(loadCountryAsync.success),
        catchError((restException: RestException) => of(loadCountryAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedCountryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedCountryAsync.request)),
    switchMap((action) =>
      from(apis.countries.loadCountry(action.payload)).pipe(
        map(loadTranslatedCountryAsync.success),
        catchError((restException: RestException) => of(loadTranslatedCountryAsync.failure(restException)))
      )
    )
  )

export const appendCountriesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendCountriesAsync.request)),
    switchMap((action) =>
      from(apis.countries.loadCountries(action.payload)).pipe(
        map(appendCountriesAsync.success),
        catchError((restException: RestException) => of(appendCountriesAsync.failure(restException)))
      )
    )
  )

const countriesEpic = combineEpics(loadCountriesEpic, loadTranslatedCountryEpic, appendCountriesEpic, loadCountryEpic)

export default countriesEpic
