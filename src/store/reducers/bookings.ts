import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  BookingsActionTypes,
  loadBookingsAsync,
  loadBookingAsync,
  cancelBookingAsync,
  loadCompletedBookingsAsync,
  resetBookingState,
  postBookingAsync,
  putBookingAsync
} from '../actions/bookings'
import { BookingsModel, BookingModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'

export const isLoadingBookings = createReducer<boolean, BookingsActionTypes>(false as boolean)
  .handleAction([
    loadBookingsAsync.success,
    loadBookingsAsync.failure,
    postBookingAsync.success,
    postBookingAsync.failure,
    putBookingAsync.success,
    putBookingAsync.failure
  ], (state, action) => false)
  .handleAction([loadBookingsAsync.request, postBookingAsync.request, putBookingAsync.request], (state, action) => true)

export const loadBookingsErrors = createReducer<RestException | null, BookingsActionTypes>(null)
  .handleAction([loadBookingsAsync.request, loadBookingsAsync.success], (state, action) => null)
  .handleAction([loadBookingsAsync.failure, loadCompletedBookingsAsync.failure], (state, action) => action.payload)

export const bookings = createReducer<BookingsModel | null, BookingsActionTypes>(null)
  .handleAction([loadBookingsAsync.failure], (state, action) => null)
  .handleAction([loadBookingsAsync.success], (state, action) => action.payload)

export const isLoadingBooking = createReducer<boolean, BookingsActionTypes>(false as boolean)
  .handleAction([loadBookingAsync.success, loadBookingAsync.failure], (state, action) => false)
  .handleAction([loadBookingAsync.request], (state, action) => true)

export const loadBookingErrors = createReducer<RestException | null, BookingsActionTypes>(null)
  .handleAction([
    loadBookingAsync.request,
    loadBookingAsync.success,
    postBookingAsync.request,
    postBookingAsync.success,
    putBookingAsync.request,
    putBookingAsync.success,
  ], (state, action) => null)
  .handleAction([loadBookingAsync.failure, postBookingAsync.failure, putBookingAsync.failure], (state, action) => action.payload)

export const booking = createReducer<BookingModel | null, BookingsActionTypes>(null)
  .handleAction([loadBookingAsync.request, loadBookingAsync.failure], (state, action) => null)
  .handleAction([loadBookingAsync.success], (state, action) => action.payload)

export const cancelBookingSuccess = createReducer<boolean, BookingsActionTypes>(false as boolean)
  .handleAction(
    [resetBookingState, cancelBookingAsync.request, cancelBookingAsync.failure],
    (state, action) => false
  )
  .handleAction([cancelBookingAsync.success], (state, action) => action.payload)

export const postBookingSuccess = createReducer<BookingModel | null, BookingsActionTypes>(null)
  .handleAction(
    [resetBookingState, postBookingAsync.request, postBookingAsync.failure],
    (state, action) => null
  )
  .handleAction([postBookingAsync.success], (state, action) => action.payload)

export const putBookingSuccess = createReducer<BookingModel | null, BookingsActionTypes>(null)
  .handleAction(
    [resetBookingState, putBookingAsync.request, putBookingAsync.failure],
    (state, action) => null
  )
  .handleAction([putBookingAsync.success], (state, action) => action.payload)
  
const bookingsState = combineReducers({
  isLoadingBookings,
  loadBookingsErrors,
  bookings,

  isLoadingBooking,
  loadBookingErrors,
  booking,

  cancelBookingSuccess,
  postBookingSuccess,
  putBookingSuccess
})

export default bookingsState
export type BookingsState = ReturnType<typeof bookingsState>
