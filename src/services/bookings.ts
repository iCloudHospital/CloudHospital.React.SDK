import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  BookingModel,
  BookingsApi,
  BookingsModel,
  CreateBookingCommand,
  UpdateBookingCommand
} from 'ch-api-client-typescript2/lib'
import { BookingSearchOption, BookingsSearchOption } from '../models/bookings'
import { log } from '../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadBookings(bookingsSearchOption: BookingsSearchOption): Promise<BookingsModel> {
  const { searchString, isOpen, isCompleted, status, dealPackageId, hospitalId, page, limit, lastRetrieved } =
    bookingsSearchOption
  return new BookingsApi(undefined, apiRoot, instance)
    .apiV2BookingsGet(searchString, isOpen, isCompleted, status, dealPackageId, hospitalId, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as BookingsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadBooking(bookingSearchOption: BookingSearchOption): Promise<BookingModel> {
  const { bookingId, options } = bookingSearchOption
  return new BookingsApi(undefined, apiRoot, instance)
    .apiV2BookingsBookingIdGet(bookingId, options)
    .then((res) => {
      return res.data as BookingModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postBooking(requestId: string, createBookingCommand?: CreateBookingCommand): Promise<BookingModel> {
  return new BookingsApi(undefined, apiRoot, instance)
    .apiV2BookingsRequestIdPost(requestId, createBookingCommand)
    .then((res) => {
      log('post Booking: ', res.data)
      return res.data as BookingModel
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putBooking(bookingId: string, updateBookingCommand?: UpdateBookingCommand): Promise<BookingModel> {
  return new BookingsApi(undefined, apiRoot, instance)
    .apiV2BookingsBookingIdPut(bookingId, updateBookingCommand)
    .then((res) => {
      log('put Booking: ', res.data)
      return res.data as BookingModel
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadBookings,
  loadBooking,
  postBooking,
  putBooking
}
