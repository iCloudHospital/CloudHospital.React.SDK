import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdCertificatesCertificateIdGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdCertificatesGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorCertificateModel } from 'ch-api-client-typescript2/lib/models/doctor-certificate-model'
import { DoctorCertificatesModel } from 'ch-api-client-typescript2/lib/models/doctor-certificates-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadDoctorCertificates = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdCertificatesGetRequest
): Promise<DoctorCertificatesModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdCertificatesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadDoctorCertificate = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdCertificatesCertificateIdGetRequest
): Promise<DoctorCertificateModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdCertificatesCertificateIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorCertificates = {
  loadDoctorCertificates,
  loadDoctorCertificate
}

export default doctorCertificates
