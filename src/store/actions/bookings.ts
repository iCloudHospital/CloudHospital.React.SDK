import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { BookingsSearchOption, BookingSearchOption } from '../../models/bookings'
import { RestException } from '../../models/exceptions'
import { BookingsModel, BookingModel, CreateBookingCommand, UpdateBookingCommand } from 'ch-api-client-typescript2/lib'

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

export const postBookingAsync = createAsyncAction(
  'POST_BOOKING_REQUEST',
  'POST_BOOKING_SUCCESS',
  'POST_BOOKING_FAILURE'
)<{ requestId: string; command?: CreateBookingCommand }, BookingModel, RestException>()

export const putBookingAsync = createAsyncAction(
  'PUT_BOOKING_REQUEST',
  'PUT_BOOKING_SUCCESS',
  'PUT_BOOKING_FAILURE'
)<{ bookingId: string; command?: UpdateBookingCommand }, BookingModel, RestException>()

export const resetBookingState = createAction('RESET_BOOKING_STATE')<undefined>()
export const resetBookingErrors = createAction('RESET_BOOKING_ERRORS')<undefined>()

export type BookingsActionTypes =
  | ActionType<typeof loadBookingsAsync>
  | ActionType<typeof loadCompletedBookingsAsync>
  | ActionType<typeof loadBookingAsync>
  | ActionType<typeof postBookingAsync>
  | ActionType<typeof putBookingAsync>
  | ActionType<typeof resetBookingState>
  | ActionType<typeof resetBookingErrors>
