import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  appendContributorsAsync,
  appendContributorSnsHandlesAsync,
  loadContributorAsync,
  loadContributorsAsync,
  loadContributorSnsHandleAsync,
  loadContributorSnsHandlesAsync,
  loadTranslatedContributorAsync
} from '../actions/contributors'

// #region Contributors
export const loadContributorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadContributorsAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributors(action.payload)).pipe(
        map(loadContributorsAsync.success),
        catchError((restException: RestException) => of(loadContributorsAsync.failure(restException)))
      )
    )
  )

export const appendContributorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendContributorsAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributors(action.payload)).pipe(
        map(appendContributorsAsync.success),
        catchError((restException: RestException) => of(appendContributorsAsync.failure(restException)))
      )
    )
  )

export const loadContributorEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadContributorAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributor(action.payload)).pipe(
        map(loadContributorAsync.success),
        catchError((restException: RestException) => of(loadContributorAsync.failure(restException)))
      )
    )
  )

export const loadTranslatedContributorEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedContributorAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributor(action.payload)).pipe(
        map(loadTranslatedContributorAsync.success),
        catchError((restException: RestException) => of(loadTranslatedContributorAsync.failure(restException)))
      )
    )
  )
// #endregion Contributors

// #region ContributorSnsHandles
export const loadContributorSnsHandlesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadContributorSnsHandlesAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributorSnsHandles(action.payload)).pipe(
        map(loadContributorSnsHandlesAsync.success),
        catchError((restException: RestException) => of(loadContributorSnsHandlesAsync.failure(restException)))
      )
    )
  )

export const appendContributorSnsHandlesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendContributorSnsHandlesAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributorSnsHandles(action.payload)).pipe(
        map(appendContributorSnsHandlesAsync.success),
        catchError((restException: RestException) => of(appendContributorSnsHandlesAsync.failure(restException)))
      )
    )
  )

export const loadContributorSnsHandleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadContributorSnsHandleAsync.request)),
    switchMap((action) =>
      from(apis.contributors.loadContributorSnsHandle(action.payload)).pipe(
        map(loadContributorSnsHandleAsync.success),
        catchError((restException: RestException) => of(loadContributorSnsHandleAsync.failure(restException)))
      )
    )
  )
// #endregion ContributorSnsHandles

const contributorsEpic = combineEpics(
  loadContributorsEpic,
  appendContributorsEpic,
  loadContributorEpic,
  loadTranslatedContributorEpic,

  loadContributorSnsHandlesEpic,
  loadContributorSnsHandleEpic
)

export default contributorsEpic
