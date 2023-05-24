import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorEducationModel } from 'ch-api-client-typescript2/lib/models/doctor-education-model'
import { DoctorEducationsModel } from 'ch-api-client-typescript2/lib/models/doctor-educations-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #endregion Doctor Educations
export const getDoctorEducations = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdEducationsGetRequest
): Promise<DoctorEducationsModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdEducationsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorEducationById = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdEducationsEducationIdGetRequest
): Promise<DoctorEducationModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdEducationsEducationIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorEducations = {
  getDoctorEducations,
  getDoctorEducationById
}

export default doctorEducations
