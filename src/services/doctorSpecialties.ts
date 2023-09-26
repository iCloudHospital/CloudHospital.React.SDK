import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorSpecialtiesModel } from 'ch-api-client-typescript2/lib/models/doctor-specialties-model'
import { DoctorSpecialtyModel } from 'ch-api-client-typescript2/lib/models/doctor-specialty-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const getDoctorSpecialties = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdSpecialtiesGetRequest
): Promise<DoctorSpecialtiesModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdSpecialtiesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorSpecialtyBySpecialtyId = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGetRequest
): Promise<DoctorSpecialtyModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorSpecialties = {
  getDoctorSpecialties,
  getDoctorSpecialtyBySpecialtyId
}

export default doctorSpecialties
