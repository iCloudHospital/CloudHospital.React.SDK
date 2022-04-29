import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  appendServiceReviewsPhotoAsync,
  deleteServiceReviewPhotoAsync,
  loadServiceReviewsPhotoAsync,
  loadServiceReviewPhotoAsync,
  postServiceReviewPhotoAsync,
  putServiceReviewPhotoAsync,
  resetServiceReviewsPhotoState
} from '../actions/serviceReviewsPhoto'
import { setToastMessage } from '../actions/toastMessages'

export const loadServiceReviewsPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewsPhotoAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(loadServiceReviewsPhotoAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewsPhotoAsync.failure(restException)))
      )
    )
  )
export const loadServiceReviewPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewPhotoAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReview(action.payload)).pipe(
        map(loadServiceReviewPhotoAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewPhotoAsync.failure(restException)))
      )
    )
  )

export const deleteServiceReviewPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(filter(isActionOf(deleteServiceReviewPhotoAsync.request))).pipe(
    switchMap((action) =>
      from(apis.serviceReviews.deleteServiceReview(action.payload)).pipe(
        switchMap((action) => [
          deleteServiceReviewPhotoAsync.success(action),
          setToastMessage({ text: 'Delete serviceReviewPhoto success', type: 'success', statusCode: 200 }),
          resetServiceReviewsPhotoState()
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            deleteServiceReviewPhotoAsync.failure(restException)
          )
        )
      )
    )
  )

export const appendServiceReviewsPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServiceReviewsPhotoAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(appendServiceReviewsPhotoAsync.success),
        catchError((restException: RestException) => of(appendServiceReviewsPhotoAsync.failure(restException)))
      )
    )
  )
export const putServiceReviewPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putServiceReviewPhotoAsync.request)),
    switchMap((action) =>
      from(
        apis.serviceReviews.putServiceReview(action.payload.serviceReviewId, action.payload.updateServiceReviewCommand)
      ).pipe(
        map(putServiceReviewPhotoAsync.success),
        catchError((restException: RestException) => of(putServiceReviewPhotoAsync.failure(restException)))
      )
    )
  )
export const postServiceReviewsPhotoEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postServiceReviewPhotoAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.postServiceReview(action.payload.createServiceReviewCommand)).pipe(
        map(postServiceReviewPhotoAsync.success),
        catchError((restException: RestException) => of(postServiceReviewPhotoAsync.failure(restException)))
      )
    )
  )

const serviceReviewsPhotoEpic = combineEpics(
  loadServiceReviewsPhotoEpic,
  appendServiceReviewsPhotoEpic,
  putServiceReviewPhotoEpic,
  postServiceReviewsPhotoEpic
)
export default serviceReviewsPhotoEpic
