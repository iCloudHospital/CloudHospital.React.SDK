import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdGetRequest,
  DoctorsApiApiV2DoctorsGetRequest,
  DoctorsApiApiV2DoctorsSimpleGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorModel } from 'ch-api-client-typescript2/lib/models/doctor-model'
import { DoctorsModel } from 'ch-api-client-typescript2/lib/models/doctors-model'
import { DoctorsSimpleModel } from 'ch-api-client-typescript2/lib/models/doctors-simple-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Doctors
export const getDoctors = async (payload?: DoctorsApiApiV2DoctorsGetRequest): Promise<DoctorsModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorsSimple = async (
  payload: DoctorsApiApiV2DoctorsSimpleGetRequest
): Promise<DoctorsSimpleModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsSimpleGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorByDoctorId = async (payload: DoctorsApiApiV2DoctorsDoctorIdGetRequest): Promise<DoctorModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Doctors

const doctors = {
  getDoctors,
  getDoctorsSimple,
  getDoctorByDoctorId
}

export default doctors
