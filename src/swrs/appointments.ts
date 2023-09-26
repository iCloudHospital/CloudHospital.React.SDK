import { nameOf, useGenericSWR, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import {
  AppointmentsApiApiV2AppointmentsAppointmentIdGetRequest,
  AppointmentsApiApiV2AppointmentsAppointmentIdPayPostRequest,
  AppointmentsApiApiV2AppointmentsAppointmentIdPutRequest,
  AppointmentsApiApiV2AppointmentsGetRequest,
  AppointmentsApiApiV2AppointmentsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/appointments-api'
import { AppointmentModel } from 'ch-api-client-typescript2/lib/models/appointment-model'
import { AppointmentTimetablesModel } from 'ch-api-client-typescript2/lib/models/appointment-timetables-model'
import { AppointmentType } from 'ch-api-client-typescript2/lib/models/appointment-type'
import { AppointmentsModel } from 'ch-api-client-typescript2/lib/models/appointments-model'
import {
  loadAppointment,
  loadAppointments,
  loadAppointmentTimetables,
  postAppointment,
  postAppointmentPayment,
  putAppointment
} from '@services/appointment'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/appointments
export const createAppointmentSwrMutation = (operationName?: string) => {
  const {
    data: createAppointmentSuccess,
    error: createAppointmentError,
    trigger: createAppointment,
    reset: resetCreateAppointment,
    isMutating: isLoadingCreateAppointment
  } = useGenericSWRMutation<string, RestException, AppointmentsApiApiV2AppointmentsRequestIdPostRequest>(
    operationName ?? '' + nameOf(() => postAppointment),
    postAppointment
  )

  return {
    createAppointmentSuccess,
    createAppointmentError,
    createAppointment,
    resetCreateAppointment,
    isLoadingCreateAppointment
  }
}
// #endregion POST api/v2/appointments

// #region GET api/v2/appointments
export const loadAppointmentsSwr = (
  payload: AppointmentsApiApiV2AppointmentsGetRequest,
  shouldFetch?: boolean,
  operationName?: string,
  config?: SWRConfiguration<AppointmentsModel, RestException>
) => {
  const {
    data: appointments,
    error: loadAppointmentError,
    isLoading: isLoadingAppointments,
    isValidating: isValidatingAppointments,
    mutate: revalidate
  } = useGenericSWR<AppointmentsModel, RestException, AppointmentsApiApiV2AppointmentsGetRequest>(
    operationName ?? '' + nameOf(() => loadAppointments),
    loadAppointments,
    payload,
    shouldFetch,
    config
  )

  return {
    appointments,
    loadAppointmentError,
    isLoadingAppointments,
    isValidatingAppointments,
    revalidate
  }
}
// #region GET api/v2/appointments

// #region GET api/v2/appointments/{appointmentId}
export const loadAppointmentSwr = (
  payload: AppointmentsApiApiV2AppointmentsAppointmentIdGetRequest,
  shouldFetch?: boolean,
  operationName?: string
) => {
  const {
    data: appointment,
    error: loadAppointmentError,
    isValidating: isLoadingAppointment,
    mutate: revalidate
  } = useGenericSWR<AppointmentModel, RestException, AppointmentsApiApiV2AppointmentsAppointmentIdGetRequest>(
    operationName ?? '' + nameOf(() => loadAppointment),
    loadAppointment,
    payload,
    shouldFetch
  )

  return {
    appointment,
    loadAppointmentError,
    isLoadingAppointment,
    revalidate
  }
}
// #endregion GET api/v2/appointments/{appointmentId}

// #region PUT api/v2/appointments
export const putAppointmentSwrMutation = (operationName?: string) => {
  const {
    data: updateAppointmentSuccess,
    error: updateAppointmentError,
    trigger: updateAppointment,
    reset: resetupdateAppointment,
    isMutating: isLoadingUpdateAppointment
  } = useGenericSWRMutation<string, RestException, AppointmentsApiApiV2AppointmentsAppointmentIdPutRequest>(
    operationName ?? '' + nameOf(() => putAppointment),
    putAppointment
  )

  return {
    updateAppointmentSuccess,
    updateAppointmentError,
    updateAppointment,
    resetupdateAppointment,
    isLoadingUpdateAppointment
  }
}
// #endregion PUT api/v2/appointments

// #region POST api/v2/appointments/{appointmentId}/pay
export const postAppointmentPaymentSwrMutation = (
  operationName: string = '',
  config?: SWRMutationConfiguration<string, RestException, any, string>
) => {
  const {
    data: postAppointmentPaymentKeySuccess,
    error: postAppointmentPaymentKeyError,
    trigger: postAppointmentPaymentKey,
    reset: resetPostAppointmentPaymentKey,
    isMutating: isLoadingUpdateAppointment
  } = useGenericSWRMutation<string, RestException, AppointmentsApiApiV2AppointmentsAppointmentIdPayPostRequest>(
    operationName + nameOf(() => postAppointmentPayment),
    postAppointmentPayment,
    config
  )

  return {
    postAppointmentPaymentKeySuccess,
    postAppointmentPaymentKeyError,
    postAppointmentPaymentKey,
    resetPostAppointmentPaymentKey,
    isLoadingUpdateAppointment
  }
}
// #endregion POST api/v2/appointments/{appointmentId}/pay

// #region GET api/v2/*/appointmenttimetables
export const loadAppointmentTimetablesSwr = (
  payload: {
    type: AppointmentType
    payload: {
      hospitalId?: string | null
      doctorAffiliationId?: string | null
      dealId?: string | null
      dealPackageId?: string | null
      specialtyId?: string | null
      serviceId?: string | null
      year?: number | undefined
      month?: number | undefined
      timeZone?: string | undefined,
      isExternal?: boolean
    }
  },
  shouldFetch?: boolean,
  operationName?: string
) => {
  const {
    data: appointmentTimetables,
    error: loadAppointmentTimetablesError,
    isValidating: isLoadingAppointmentTimetables,
    mutate: revalidate
  } = useGenericSWR<AppointmentTimetablesModel, RestException, typeof payload>(
    operationName ?? '' + nameOf(() => loadAppointmentTimetables),
    loadAppointmentTimetables,
    payload,
    shouldFetch
  )
  return {
    appointmentTimetables,
    loadAppointmentTimetablesError,
    isLoadingAppointmentTimetables,
    revalidate
  }
}
// #endregion GET api/v2/*/appointmenttimetables
