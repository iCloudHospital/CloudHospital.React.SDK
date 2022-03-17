import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { BookingModel, BookingsApi, BookingsModel } from 'ch-api-client-typescript2/lib'
import { BookingSearchOption, BookingsSearchOption } from '../models/bookings'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadBookings(bookingsSearchOption: BookingsSearchOption): Promise<BookingsModel> {
  const { searchString, isOpen, isCompleted, status, dealPackageId, page, limit, lastRetrieved } = bookingsSearchOption
  return new BookingsApi(configuration, apiRoot, instance)
    .apiV2BookingsGet(searchString, isOpen, isCompleted, status, dealPackageId, page, limit, lastRetrieved)
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
  return new BookingsApi(configuration, apiRoot, instance)
    .apiV2BookingsBookingIdGet(bookingId, options)
    .then((res) => {
      return res.data as BookingModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function cancelBooking(bookingId: string): Promise<boolean> {
  return new BookingsApi(configuration, apiRoot, instance)
    .apiV2BookingsBookingIdCancelPut(bookingId)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadBookings,
  loadBooking,
  cancelBooking
}
