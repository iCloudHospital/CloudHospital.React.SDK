import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  appendServiceReviewsRealStoryAsync,
  deleteServiceReviewRealStoryAsync,
  loadServiceReviewsRealStoryAsync,
  loadServiceReviewRealStoryAsync,
  postServiceReviewRealStoryAsync,
  putServiceReviewRealStoryAsync,
  resetServiceReviewsRealStoryState
} from '../actions/serviceReviewsRealStory'
import { setToastMessage } from '../actions/toastMessages'

export const loadServiceReviewsRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewsRealStoryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(loadServiceReviewsRealStoryAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewsRealStoryAsync.failure(restException)))
      )
    )
  )
export const loadServiceReviewRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewRealStoryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReview(action.payload)).pipe(
        map(loadServiceReviewRealStoryAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewRealStoryAsync.failure(restException)))
      )
    )
  )

export const deleteServiceReviewRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(filter(isActionOf(deleteServiceReviewRealStoryAsync.request))).pipe(
    switchMap((action) =>
      from(apis.serviceReviews.deleteServiceReview(action.payload)).pipe(
        switchMap((action) => [
          deleteServiceReviewRealStoryAsync.success(action),
          setToastMessage({ text: 'Delete serviceReviewRealStory success', type: 'success', statusCode: 200 }),
          resetServiceReviewsRealStoryState()
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            deleteServiceReviewRealStoryAsync.failure(restException)
          )
        )
      )
    )
  )

export const appendServiceReviewsRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServiceReviewsRealStoryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(appendServiceReviewsRealStoryAsync.success),
        catchError((restException: RestException) => of(appendServiceReviewsRealStoryAsync.failure(restException)))
      )
    )
  )
export const putServiceReviewRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putServiceReviewRealStoryAsync.request)),
    switchMap((action) =>
      from(
        apis.serviceReviews.putServiceReview(action.payload.serviceReviewId, action.payload.updateServiceReviewCommand)
      ).pipe(
        map(putServiceReviewRealStoryAsync.success),
        catchError((restException: RestException) => of(putServiceReviewRealStoryAsync.failure(restException)))
      )
    )
  )
export const postServiceReviewsRealStoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postServiceReviewRealStoryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.postServiceReview(action.payload.createServiceReviewCommand)).pipe(
        map(postServiceReviewRealStoryAsync.success),
        catchError((restException: RestException) => of(postServiceReviewRealStoryAsync.failure(restException)))
      )
    )
  )

const serviceReviewsRealStoryEpic = combineEpics(
  loadServiceReviewsRealStoryEpic,
  appendServiceReviewsRealStoryEpic,
  putServiceReviewRealStoryEpic,
  postServiceReviewsRealStoryEpic
)
export default serviceReviewsRealStoryEpic
