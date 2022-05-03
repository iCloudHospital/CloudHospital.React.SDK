import { isActionOf } from 'typesafe-actions'
import { loadAboutUsPageAsync, loadAboutUsPagesAsync } from '../actions/aboutUs'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'

export const loadAboutUsPagesEpic: RootEpic = (actions$, state$, { apis }) =>
  actions$.pipe(
    filter(isActionOf(loadAboutUsPagesAsync.request)),
    switchMap((action) =>
      from(apis.aboutUs.loadAboutUsPages(action.payload)).pipe(
        map(loadAboutUsPagesAsync.success),
        catchError((restException: RestException) => of(loadAboutUsPagesAsync.failure(restException)))
      )
    )
  )

export const loadAboutUsPageEpic: RootEpic = (actions$, state$, { apis }) =>
  actions$.pipe(
    filter(isActionOf(loadAboutUsPageAsync.request)),
    switchMap((action) =>
      from(apis.aboutUs.loadAboutUsPage(action.payload)).pipe(
        map(loadAboutUsPageAsync.success),
        catchError((restException: RestException) => of(loadAboutUsPageAsync.failure(restException)))
      )
    )
  )

const aboutUsEpic = combineEpics(loadAboutUsPagesEpic, loadAboutUsPageEpic)

export default aboutUsEpic
