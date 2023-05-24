import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

import {
  BookingsApi,
  BookingsApiApiV2BookingsBookingIdGetRequest,
  BookingsApiApiV2BookingsBookingIdPayPostRequest,
  BookingsApiApiV2BookingsBookingIdPutRequest,
  BookingsApiApiV2BookingsGetRequest,
  BookingsApiApiV2BookingsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/bookings-api'
import { BookingModel } from 'ch-api-client-typescript2/lib/models/booking-model'
import { BookingsModel } from 'ch-api-client-typescript2/lib/models/bookings-model'
import { log } from '../utils/log'

export const postBooking = async (payload: BookingsApiApiV2BookingsRequestIdPostRequest): Promise<BookingModel> => {
  return new BookingsApi(configuration, undefined, instance)
    .apiV2BookingsRequestIdPost(payload)
    .then((res) => {
      log('post Booking: ', res.data)
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getBookings = async (payload?: BookingsApiApiV2BookingsGetRequest): Promise<BookingsModel> => {
  return new BookingsApi(configuration, undefined, instance)
    .apiV2BookingsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getBookingById = async (payload: BookingsApiApiV2BookingsBookingIdGetRequest): Promise<BookingModel> => {
  return new BookingsApi(configuration, undefined, instance)
    .apiV2BookingsBookingIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putBooking = async (payload: BookingsApiApiV2BookingsBookingIdPutRequest): Promise<BookingModel> => {
  return new BookingsApi(configuration, undefined, instance)
    .apiV2BookingsBookingIdPut(payload)
    .then((res) => {
      log('put Booking: ', res.data)
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postBookingPaymentKey = async (
  payload: BookingsApiApiV2BookingsBookingIdPayPostRequest
): Promise<string> => {
  return new BookingsApi(configuration, undefined, instance)
    .apiV2BookingsBookingIdPayPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const bookings = {
  getBookings,
  getBookingById,
  postBooking,
  putBooking,
  postBookingPaymentKey
}

export default bookings
