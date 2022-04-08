import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadServiceReviewsAsync,
  loadServiceReviewAsync,
  appendServiceReviewsAsync,
  loadServiceReviewMediasAsync,
  appendServiceReviewMediasAsync,
  loadServiceReviewMediaAsync,
  postServiceReviewMediaAsync,
  putServiceReviewMediaAsync,
  deleteServiceReviewMediaAsync,
  postServiceReviewAsync,
  putServiceReviewAsync,
  deleteServiceReviewAsync,
  resetServiceReviewState,
  resetServiceReviewMediaState
} from '../actions/serviceReviews'
import { setMessage } from '../actions/toastMessages'
// import Router from '/next/router'

// #region ServiceReviews
export const loadServiceReviewsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewsAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(loadServiceReviewsAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewsAsync.failure(restException)))
      )
    )
  )

export const appendServiceReviewsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServiceReviewsAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(appendServiceReviewsAsync.success),
        catchError((restException: RestException) => of(appendServiceReviewsAsync.failure(restException)))
      )
    )
  )

export const loadServiceReviewEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReview(action.payload)).pipe(
        map(loadServiceReviewAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewAsync.failure(restException)))
      )
    )
  )

export const postServiceReviewEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postServiceReviewAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.postServiceReview(action.payload.createServiceReviewCommand))
        // .pipe(tap(() => Router.back()))
        .pipe(
          switchMap((res) => [
            postServiceReviewAsync.success(res),
            setMessage({ text: 'Create serviceReview success', status: 200 }),
            resetServiceReviewState()
          ]),
          catchError((restException: RestException) =>
            of(setMessage(restException), postServiceReviewAsync.failure(restException))
          )
        )
    )
  )

export const putServiceReviewEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(filter(isActionOf(putServiceReviewAsync.request))).pipe(
    switchMap((action) =>
      from(
        apis.serviceReviews.putServiceReview(action.payload.serviceReviewId, action.payload.updateServiceReviewCommand)
      ).pipe(
        switchMap((res) => [
          putServiceReviewAsync.success(res),
          setMessage({ text: 'Update serviceReview success', status: 200 }),
          resetServiceReviewState()
        ]),
        catchError((restException: RestException) =>
          of(setMessage(restException), putServiceReviewAsync.failure(restException))
        )
      )
    )
  )

export const deleteServiceReviewEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(filter(isActionOf(deleteServiceReviewAsync.request))).pipe(
    switchMap((action) =>
      from(apis.serviceReviews.deleteServiceReview(action.payload))
        // .pipe(tap(() => Router.back()))
        .pipe(
          switchMap((res) => [
            deleteServiceReviewAsync.success(res),
            setMessage({ text: 'Delete serviceReview success', status: 200 }),
            resetServiceReviewState()
          ]),
          catchError((restException: RestException) =>
            of(setMessage(restException), deleteServiceReviewAsync.failure(restException))
          )
        )
    )
  )

// #endregion ServiceReviews

// #region ServiceReviewMedias
export const loadServiceReviewMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewMediasAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviewMedias(action.payload)).pipe(
        map(loadServiceReviewMediasAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewMediasAsync.failure(restException)))
      )
    )
  )

export const appendServiceReviewMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServiceReviewMediasAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviewMedias(action.payload)).pipe(
        map(appendServiceReviewMediasAsync.success),
        catchError((restException: RestException) => of(appendServiceReviewMediasAsync.failure(restException)))
      )
    )
  )

export const loadServiceReviewMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewMediaAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviewMedia(action.payload.serviceReviewId, action.payload.mediaId)).pipe(
        map(loadServiceReviewMediaAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewMediaAsync.failure(restException)))
      )
    )
  )

export const postServiceReviewMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postServiceReviewMediaAsync.request)),
    switchMap((action) =>
      from(
        apis.serviceReviews.postServiceReviewMedia(action.payload.serviceReviewId, action.payload.createMediaCommand)
      ).pipe(
        switchMap((res) => [
          postServiceReviewMediaAsync.success(res),
          setMessage({ text: 'Create serviceReview media success', status: 200 }),
          resetServiceReviewMediaState()
        ]),
        catchError((restException: RestException) =>
          of(setMessage(restException), postServiceReviewMediaAsync.failure(restException))
        )
      )
    )
  )

export const putServiceReviewMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putServiceReviewMediaAsync.request)),
    switchMap((action) =>
      from(
        apis.serviceReviews.putServiceReviewMedia(
          action.payload.serviceReviewId,
          action.payload.mediaId,
          action.payload.updateMediaCommand
        )
      ).pipe(
        switchMap((res) => [
          putServiceReviewMediaAsync.success(res),
          setMessage({ text: 'Update serviceReview media success.', status: 200 })
        ]),
        catchError((restException: RestException) =>
          of(setMessage(restException), putServiceReviewMediaAsync.failure(restException))
        )
      )
    )
  )

export const deleteServiceReviewMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(deleteServiceReviewMediaAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.deleteServiceReviewMedia(action.payload.serviceReviewId, action.payload.mediaId)).pipe(
        switchMap((res) => [
          deleteServiceReviewMediaAsync.success(res),
          setMessage({ text: 'Delete serviceReview media success.', status: 200 })
        ]),
        catchError((restException: RestException) => of(deleteServiceReviewMediaAsync.failure(restException)))
      )
    )
  )
// #endregion ServiceReviewMedias

const serviceReviewsEpic = combineEpics(
  loadServiceReviewsEpic,
  appendServiceReviewsEpic,
  loadServiceReviewEpic,
  postServiceReviewEpic,
  putServiceReviewEpic,
  deleteServiceReviewEpic,

  loadServiceReviewMediasEpic,
  appendServiceReviewMediasEpic,
  loadServiceReviewMediaEpic,
  postServiceReviewMediaEpic,
  putServiceReviewMediaEpic,
  deleteServiceReviewMediaEpic
)
export default serviceReviewsEpic
