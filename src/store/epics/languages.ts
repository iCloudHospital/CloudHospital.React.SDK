import { combineEpics, Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { appendLanguagesAsync, loadLanguageAsync, loadLanguagesAsync } from '../actions/languages'
import { RestException } from '../../models/exceptions'

export const loadLanguagesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadLanguagesAsync.request)),
    switchMap((action) =>
      from(apis.languages.loadLanguages(action.payload)).pipe(
        map(loadLanguagesAsync.success),
        catchError((restException: RestException) => of(loadLanguagesAsync.failure(restException)))
      )
    )
  )

export const appendLanguagesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendLanguagesAsync.request)),
    switchMap((action) =>
      from(apis.languages.loadLanguages(action.payload)).pipe(
        map(appendLanguagesAsync.success),
        catchError((restException: RestException) => of(appendLanguagesAsync.failure(restException)))
      )
    )
  )

export const loadLanguageEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadLanguageAsync.request)),
    switchMap((action) =>
      from(apis.languages.loadLanguage(action.payload)).pipe(
        map(loadLanguageAsync.success),
        catchError((restException: RestException) => of(loadLanguageAsync.failure(restException)))
      )
    )
  )

const languagesEpic = combineEpics(loadLanguagesEpic, appendLanguagesEpic, loadLanguageEpic)

export default languagesEpic
