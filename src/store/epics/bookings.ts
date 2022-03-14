import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadBookingsAsync,
  loadBookingAsync,
  cancelBookingAsync,
  loadCompletedBookingsAsync,
  resetBookingState,
} from '../actions/bookings'
import { setMessage } from '../actions/toastMessages'

export const loadBookingsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadBookingsAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBookings(action.payload)).pipe(
        map(loadBookingsAsync.success),
        catchError((restException: RestException) =>
          of(loadBookingsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadBookingEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadBookingAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBooking(action.payload)).pipe(
        map(loadBookingAsync.success),
        catchError((restException: RestException) =>
          of(loadBookingAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadCompletedBookingsEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(loadCompletedBookingsAsync.request)),
    switchMap((action) =>
      from(apis.bookings.loadBookings(action.payload)).pipe(
        map(loadCompletedBookingsAsync.success),
        catchError((restException: RestException) =>
          of(loadCompletedBookingsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const cancelBookingEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(cancelBookingAsync.request)),
    switchMap((action) =>
      from(apis.bookings.cancelBooking(action.payload)).pipe(
        switchMap((res) => [
          cancelBookingAsync.success(res),
          setMessage({ text: 'Cancel booking success.', status: 200 }),
        ]),
        catchError((restException: RestException) =>
          of(
            setMessage(restException),
            cancelBookingAsync.failure(restException),
          ),
        ),
      ),
    ),
  )

const bookingsEpic = combineEpics(
  loadBookingsEpic,
  loadBookingEpic,
  loadCompletedBookingsEpic,
  cancelBookingEpic,
)

export default bookingsEpic
