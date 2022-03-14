import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import {
  BookingsActionTypes,
  loadBookingsAsync,
  loadBookingAsync,
  cancelBookingAsync,
  loadCompletedBookingsAsync,
  resetBookingState
} from '../actions/bookings'
import { BookingsModel, BookingModel } from 'ch-api-client-typescript2/lib'
import { RestException } from '../../models/exceptions'

export const isLoadingBookings = createReducer<boolean, BookingsActionTypes>(false as boolean)
  .handleAction([loadBookingsAsync.success, loadBookingsAsync.failure], (state, action) => false)
  .handleAction([loadBookingsAsync.request], (state, action) => true)

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
  .handleAction([loadBookingAsync.request, loadBookingAsync.success], (state, action) => null)
  .handleAction([loadBookingAsync.failure], (state, action) => action.payload)

export const booking = createReducer<BookingModel | null, BookingsActionTypes>(null)
  .handleAction([loadBookingAsync.request, loadBookingAsync.failure], (state, action) => null)
  .handleAction([loadBookingAsync.success], (state, action) => action.payload)

const bookingsState = combineReducers({
  isLoadingBookings,
  loadBookingsErrors,
  bookings,

  isLoadingBooking,
  loadBookingErrors,
  booking
})

export default bookingsState
export type BookingsState = ReturnType<typeof bookingsState>
