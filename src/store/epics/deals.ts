import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadDealsAsync,
  appendDealsAsync,
  loadDealAsync,
  loadDealPackageAsync,
  loadDealPackagesAsync,
  loadDealServicesAsync,
  loadDealServiceAsync,
  loadDealsSimpleAsync,
  appendDealsSimpleAsync
} from '../actions/deals'

// #region Deals
export const loadDealsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealsAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDeals(action.payload)).pipe(
        map(loadDealsAsync.success),
        catchError((restException: RestException) => of(loadDealsAsync.failure(restException)))
      )
    )
  )

export const appendDealsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendDealsAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDeals(action.payload)).pipe(
        map(appendDealsAsync.success),
        catchError((restException: RestException) => of(appendDealsAsync.failure(restException)))
      )
    )
  )

export const loadDealEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDeal(action.payload)).pipe(
        map(loadDealAsync.success),
        catchError((restException: RestException) => of(loadDealAsync.failure(restException)))
      )
    )
  )
// #endregion Deals

// #region DealsSimple
export const loadDealsSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealsSimpleAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealsSimple(action.payload)).pipe(
        map(loadDealsSimpleAsync.success),
        catchError((restException: RestException) => of(loadDealsSimpleAsync.failure(restException)))
      )
    )
  )

export const appendDealsSimpleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendDealsSimpleAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealsSimple(action.payload)).pipe(
        map(appendDealsSimpleAsync.success),
        catchError((restException: RestException) => of(appendDealsSimpleAsync.failure(restException)))
      )
    )
  )
// #endregion DealsSimple

// #region Deal Packages
export const loadDealPackagesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealPackagesAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealPackages(action.payload)).pipe(
        map(loadDealPackagesAsync.success),
        catchError((restException: RestException) => of(loadDealPackagesAsync.failure(restException)))
      )
    )
  )

export const loadDealPackageEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealPackageAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealPackage(action.payload)).pipe(
        map(loadDealPackageAsync.success),
        catchError((restException: RestException) => of(loadDealPackageAsync.failure(restException)))
      )
    )
  )
// #endregion Deal Packages

// #region Deal Services
export const loadDealServicesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealServicesAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealServices(action.payload)).pipe(
        map(loadDealServicesAsync.success),
        catchError((restException: RestException) => of(loadDealServicesAsync.failure(restException)))
      )
    )
  )

export const loadDealServiceEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDealServiceAsync.request)),
    switchMap((action) =>
      from(apis.deals.loadDealService(action.payload)).pipe(
        map(loadDealServiceAsync.success),
        catchError((restException: RestException) => of(loadDealServiceAsync.failure(restException)))
      )
    )
  )
// #endregion Deal Packages

const dealsEpic = combineEpics(
  loadDealsEpic,
  appendDealsEpic,
  loadDealEpic,

  loadDealsSimpleEpic,
  appendDealsSimpleEpic,

  loadDealPackagesEpic,
  loadDealPackageEpic,

  loadDealServicesEpic,
  loadDealServiceEpic
)

export default dealsEpic
