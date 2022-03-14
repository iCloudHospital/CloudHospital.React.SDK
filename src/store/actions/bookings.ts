import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { BookingsSearchOption, BookingSearchOption } from '../../models/bookings'
import { RestException } from '../../models/exceptions'
import { BookingsModel, BookingModel } from 'ch-api-client-typescript2/lib'

export const loadBookingsAsync = createAsyncAction(
  'LOAD_BOOKINGS_REQUEST',
  'LOAD_BOOKINGS_SUCCESS',
  'LOAD_BOOKINGS_FAILURE'
)<BookingsSearchOption, BookingsModel, RestException>()

export const loadCompletedBookingsAsync = createAsyncAction(
  'LOAD_COMPLETED_BOOKINGS_REQUEST',
  'LOAD_COMPLETED_BOOKINGS_SUCCESS',
  'LOAD_COMPLETED_BOOKINGS_FAILURE'
)<BookingsSearchOption, BookingsModel, RestException>()

export const loadBookingAsync = createAsyncAction(
  'LOAD_BOOKING_REQUEST',
  'LOAD_BOOKING_SUCCESS',
  'LOAD_BOOKING_FAILURE'
)<BookingSearchOption, BookingModel, RestException>()

export const cancelBookingAsync = createAsyncAction(
  'CANCEL_BOOKING_REQUEST',
  'CANCEL_BOOKING_SUCCESS',
  'CANCEL_BOOKING_FAILURE'
)<string, boolean, RestException>()

export const resetBookingState = createAction('RESET_BOOKING_STATE')<undefined>()

export type BookingsActionTypes =
  | ActionType<typeof loadBookingsAsync>
  | ActionType<typeof loadCompletedBookingsAsync>
  | ActionType<typeof loadBookingAsync>
  | ActionType<typeof cancelBookingAsync>
  | ActionType<typeof resetBookingState>
