import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadBookingsAsync,
  loadBookingAsync,
  loadCompletedBookingsAsync,
  postBookingAsync,
  putBookingAsync
} from '../actions/bookings'
import { setToastMessage } from '../actions/toastMessages'

export const loadBookingsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadBookingsAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBookings(action.payload)).pipe(
        map(loadBookingsAsync.success),
        catchError((restException: RestException) => of(loadBookingsAsync.failure(restException)))
      )
    )
  )

export const loadBookingEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadBookingAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBooking(action.payload)).pipe(
        map(loadBookingAsync.success),
        catchError((restException: RestException) => of(loadBookingAsync.failure(restException)))
      )
    )
  )

export const loadCompletedBookingsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadCompletedBookingsAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBookings(action.payload)).pipe(
        map(loadCompletedBookingsAsync.success),
        catchError((restException: RestException) => of(loadCompletedBookingsAsync.failure(restException)))
      )
    )
  )

export const postBookingEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postBookingAsync.request)),
    switchMap((action) =>
      from(apis.bookings.postBooking(action.payload.requestId, action.payload.command)).pipe(
        map(postBookingAsync.success),
        catchError((restException: RestException) => of(postBookingAsync.failure(restException)))
      )
    )
  )

export const putBookingEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putBookingAsync.request)),
    switchMap((action) =>
      from(apis.bookings.putBooking(action.payload.bookingId, action.payload.command)).pipe(
        map(putBookingAsync.success),
        catchError((restException: RestException) => of(putBookingAsync.failure(restException)))
      )
    )
  )

const bookingsEpic = combineEpics(
  loadBookingsEpic,
  loadBookingEpic,
  loadCompletedBookingsEpic,
  postBookingEpic,
  putBookingEpic
)

export default bookingsEpic
