import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  BookingsApiApiV2BookingsBookingIdGetRequest,
  BookingsApiApiV2BookingsBookingIdPayPostRequest,
  BookingsApiApiV2BookingsBookingIdPutRequest,
  BookingsApiApiV2BookingsGetRequest,
  BookingsApiApiV2BookingsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/bookings-api'
import { BookingModel } from 'ch-api-client-typescript2/lib/models/booking-model'
import { BookingsModel } from 'ch-api-client-typescript2/lib/models/bookings-model'
import { getBookingById, getBookings, postBooking, postBookingPaymentKey, putBooking } from '../services/bookings'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/bookings
export const postBookingSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<BookingModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<BookingModel, RestException, BookingsApiApiV2BookingsRequestIdPostRequest>(
    operationName + nameOf(() => postBooking),
    postBooking,
    config
  )
}
// #endregion POST api/v2/bookings

// #region GET api/v2/bookings
export const getBookingsSWR = (
  operationName = '',
  payload: BookingsApiApiV2BookingsGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<BookingsModel, RestException>
) => {
  return useGenericSWR<BookingsModel, RestException, BookingsApiApiV2BookingsGetRequest>(
    operationName + nameOf(() => getBookings),
    getBookings,
    payload,
    shouldFetch,
    config
  )
}

export const getBookingsSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<BookingsModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<BookingsModel, RestException, BookingsApiApiV2BookingsGetRequest>(
    operationName + nameOf(() => getBookings),
    getBookings,
    config
  )
}

export const getBookingsSWRInfinite = (
  operationName = '',
  payload?: BookingsApiApiV2BookingsGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<BookingsModel, RestException, BookingsApiApiV2BookingsGetRequest>(
    operationName + nameOf(() => getBookings),
    getBookings,
    payload,
    shouldFetch
  )
}
// #endregion GET api/v2/bookings

// #region GET api/v2/bookings/{bookingId}
export const getBookingByIdSWR = (
  operationName = '',
  payload: BookingsApiApiV2BookingsBookingIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<BookingModel, RestException>
) => {
  return useGenericSWR<BookingModel, RestException, BookingsApiApiV2BookingsBookingIdGetRequest>(
    operationName + nameOf(() => getBookingById),
    getBookingById,
    payload,
    shouldFetch,
    config
  )
}

export const getBookingByIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<BookingModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<BookingModel, RestException, BookingsApiApiV2BookingsBookingIdGetRequest>(
    operationName + nameOf(() => getBookingById),
    getBookingById,
    config
  )
}
// #endregion GET api/v2/bookings/{bookingId}

// #region PUT api/v2/bookings
export const putBookingSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<BookingModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<BookingModel, RestException, BookingsApiApiV2BookingsBookingIdPutRequest>(
    operationName + nameOf(() => putBooking),
    putBooking,
    config
  )
}
// #endregion PUT api/v2/bookings

// #region PUT api/v2/bookings/{bookingId}/pay
export const postBookingPaymentKeySWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<string, RestException, undefined, string>
) => {
  return useGenericSWRMutation<string, RestException, BookingsApiApiV2BookingsBookingIdPayPostRequest>(
    operationName + nameOf(() => putBooking),
    postBookingPaymentKey,
    config
  )
}
// #endregion PUT api/v2/bookings/{bookingId}/pay
