import { combineEpics, Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { loadServiceAsync, appendServicesAsync, loadServicesAsync } from '../actions/services'
import { RestException } from '../../models/exceptions'

export const loadServicesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServicesAsync.request)),
    switchMap((action) =>
      from(apis.services.loadServices(action.payload)).pipe(
        map(loadServicesAsync.success),
        catchError((restException: RestException) => of(loadServicesAsync.failure(restException)))
      )
    )
  )

export const appendServicesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServicesAsync.request)),
    switchMap((action) =>
      from(apis.services.loadServices(action.payload)).pipe(
        map(appendServicesAsync.success),
        catchError((restException: RestException) => of(appendServicesAsync.failure(restException)))
      )
    )
  )

export const loadServiceEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceAsync.request)),
    switchMap((action) =>
      from(apis.services.loadService(action.payload)).pipe(
        map(loadServiceAsync.success),
        catchError((restException: RestException) => of(loadServiceAsync.failure(restException)))
      )
    )
  )

const languagesEpic = combineEpics(loadServicesEpic, appendServicesEpic, loadServiceEpic)

export default languagesEpic
