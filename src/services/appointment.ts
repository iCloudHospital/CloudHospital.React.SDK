import { RestException } from '@models/exceptions'
import {
  AppointmentsApi,
  AppointmentsApiApiV2AppointmentsAppointmentIdGetRequest,
  AppointmentsApiApiV2AppointmentsAppointmentIdPayPostRequest,
  AppointmentsApiApiV2AppointmentsAppointmentIdPutRequest,
  AppointmentsApiApiV2AppointmentsGetRequest,
  AppointmentsApiApiV2AppointmentsRequestIdPostRequest
} from 'ch-api-client-typescript2/lib/api/appointments-api'
import { DealsApi } from 'ch-api-client-typescript2/lib/api/deals-api'
import { DoctorAffiliationsApi } from 'ch-api-client-typescript2/lib/api/doctor-affiliations-api'
import { HospitalsApi } from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { AppointmentModel } from 'ch-api-client-typescript2/lib/models/appointment-model'
import { AppointmentTimetablesModel } from 'ch-api-client-typescript2/lib/models/appointment-timetables-model'
import { AppointmentType } from 'ch-api-client-typescript2/lib/models/appointment-type'
import { AppointmentsModel } from 'ch-api-client-typescript2/lib/models/appointments-model'
import { configuration, instance } from './HttpClient'

export const loadAppointments = async (
  payload?: AppointmentsApiApiV2AppointmentsGetRequest
): Promise<AppointmentsModel> => {
  return new AppointmentsApi(configuration, undefined, instance)
    .apiV2AppointmentsGet(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadAppointment = async (
  payload: AppointmentsApiApiV2AppointmentsAppointmentIdGetRequest
): Promise<AppointmentModel> => {
  return new AppointmentsApi(configuration, undefined, instance)
    .apiV2AppointmentsAppointmentIdGet(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postAppointment = async (
  payload: AppointmentsApiApiV2AppointmentsRequestIdPostRequest
): Promise<string> => {
  return new AppointmentsApi(configuration, undefined, instance)
    .apiV2AppointmentsRequestIdPost(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const putAppointment = async (
  payload: AppointmentsApiApiV2AppointmentsAppointmentIdPutRequest
): Promise<string> => {
  return new AppointmentsApi(configuration, undefined, instance)
    .apiV2AppointmentsAppointmentIdPut(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const postAppointmentPayment = async (
  payload: AppointmentsApiApiV2AppointmentsAppointmentIdPayPostRequest
): Promise<string> => {
  return new AppointmentsApi(configuration, undefined, instance)
    .apiV2AppointmentsAppointmentIdPayPost(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadAppointmentTimetables = async ({
  type,
  payload
}: {
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
}): Promise<AppointmentTimetablesModel> => {
  switch (type) {
    case AppointmentType.Hospital:
      return new HospitalsApi(configuration, undefined, instance)
        .apiV2HospitalsHospitalIdAppointmenttimetablesGet({ ...payload, hospitalId: payload.hospitalId as string })
        .then((res) => {
          return res?.data
        })
        .catch((error: any) => {
          const restException = error.response.data as RestException
          throw restException
        })
    case AppointmentType.Doctor:
      return new DoctorAffiliationsApi(configuration, undefined, instance)
        .apiV2DoctoraffiliationsDoctorAffiliationIdAppointmenttimetablesGet({
          ...payload,
          doctorAffiliationId: payload.doctorAffiliationId as string
        })
        .then((res) => {
          return res?.data
        })
        .catch((error: any) => {
          const restException = error.response.data as RestException
          throw restException
        })
    case AppointmentType.DealPackage:
      return new DealsApi(configuration, undefined, instance)
        .apiV2DealsDealIdPackagesPackageIdAppointmenttimetablesGet({
          ...payload,
          dealId: payload.dealId as string,
          packageId: payload.dealPackageId as string
        })
        .then((res) => {
          return res?.data
        })
        .catch((error: any) => {
          const restException = error.response.data as RestException
          throw restException
        })
    case AppointmentType.HospitalSpecialty:
      return new HospitalsApi(configuration, undefined, instance)
        .apiV2HospitalsHospitalIdSpecialtiesHospitalSpecialtyIdAppointmenttimetablesGet({
          ...payload,
          hospitalId: payload.hospitalId as string,
          hospitalSpecialtyId: payload.specialtyId as string
        })
        .then((res) => {
          return res?.data
        })
        .catch((error: any) => {
          const restException = error.response.data as RestException
          throw restException
        })
    case AppointmentType.HospitalService:
      return new HospitalsApi(configuration, undefined, instance)
        .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdAppointmenttimetablesGet({
          ...payload,
          hospitalId: payload.hospitalId as string,
          specialtyId: payload.specialtyId as string,
          serviceId: payload.serviceId as string
        })
        .then((res) => {
          return res?.data
        })
        .catch((error: any) => {
          const restException = error.response.data as RestException
          throw restException
        })
    default:
      throw 'Type was not defined'
  }
}

const appointments = {
  loadAppointments,
  loadAppointment,
  postAppointment,
  putAppointment,
  postAppointmentPayment
}

export default appointments
