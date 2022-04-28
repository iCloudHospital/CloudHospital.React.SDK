import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import { loadServicesCategoriesAsync, loadServicesCategoryAsync } from '../actions/servicesCategories'

export const loadServicesCategoriesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServicesCategoriesAsync.request)),
    switchMap((action) =>
      from(apis.servicesCategories.loadServicesCategories(action.payload)).pipe(
        map(loadServicesCategoriesAsync.success),
        catchError((restException: RestException) => of(loadServicesCategoriesAsync.failure(restException)))
      )
    )
  )

export const loadServicesCategoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServicesCategoryAsync.request)),
    switchMap((action) =>
      from(apis.servicesCategories.loadServicesCategory(action.payload)).pipe(
        map(loadServicesCategoryAsync.success),
        catchError((restException: RestException) => of(loadServicesCategoryAsync.failure(restException)))
      )
    )
  )

const servicesCategoriesEpic = combineEpics(loadServicesCategoriesEpic, loadServicesCategoryEpic)

export default servicesCategoriesEpic
