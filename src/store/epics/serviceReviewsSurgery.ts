import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  appendServiceReviewsSurgeryAsync,
  deleteServiceReviewSurgeryAsync,
  loadServiceReviewsSurgeryAsync,
  loadServiceReviewSurgeryAsync,
  postServiceReviewSurgeryAsync,
  putServiceReviewSurgeryAsync,
  resetServiceReviewsSurgeryState
} from '../actions/serviceReviewsSurgery'
import { setToastMessage } from '../actions/toastMessages'

export const loadServiceReviewsSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewsSurgeryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(loadServiceReviewsSurgeryAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewsSurgeryAsync.failure(restException)))
      )
    )
  )
export const loadServiceReviewSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadServiceReviewSurgeryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReview(action.payload)).pipe(
        map(loadServiceReviewSurgeryAsync.success),
        catchError((restException: RestException) => of(loadServiceReviewSurgeryAsync.failure(restException)))
      )
    )
  )

export const deleteServiceReviewSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(filter(isActionOf(deleteServiceReviewSurgeryAsync.request))).pipe(
    switchMap((action) =>
      from(apis.serviceReviews.deleteServiceReview(action.payload)).pipe(
        switchMap((action) => [
          deleteServiceReviewSurgeryAsync.success(action),
          setToastMessage({ text: 'Delete serviceReviewSurgery success', type: 'success', statusCode: 200 }),
          resetServiceReviewsSurgeryState()
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            deleteServiceReviewSurgeryAsync.failure(restException)
          )
        )
      )
    )
  )

export const appendServiceReviewsSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendServiceReviewsSurgeryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.loadServiceReviews(action.payload)).pipe(
        map(appendServiceReviewsSurgeryAsync.success),
        catchError((restException: RestException) => of(appendServiceReviewsSurgeryAsync.failure(restException)))
      )
    )
  )
export const putServiceReviewSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putServiceReviewSurgeryAsync.request)),
    switchMap((action) =>
      from(
        apis.serviceReviews.putServiceReview(action.payload.serviceReviewId, action.payload.updateServiceReviewCommand)
      ).pipe(
        map(putServiceReviewSurgeryAsync.success),
        catchError((restException: RestException) => of(putServiceReviewSurgeryAsync.failure(restException)))
      )
    )
  )
export const postServiceReviewsSurgeryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postServiceReviewSurgeryAsync.request)),
    switchMap((action) =>
      from(apis.serviceReviews.postServiceReview(action.payload.createServiceReviewCommand)).pipe(
        map(postServiceReviewSurgeryAsync.success),
        catchError((restException: RestException) => of(postServiceReviewSurgeryAsync.failure(restException)))
      )
    )
  )

const serviceReviewsSurgeryEpic = combineEpics(
  loadServiceReviewsSurgeryEpic,
  appendServiceReviewsSurgeryEpic,
  putServiceReviewSurgeryEpic,
  postServiceReviewsSurgeryEpic
)
export default serviceReviewsSurgeryEpic
