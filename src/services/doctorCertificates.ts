import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { DoctorCertificatesModel, DoctorCertificateModel, DoctorsApi } from 'ch-api-client-typescript2/lib'
import { DoctorCertificatesSearchOption } from '../models/doctorCertificates'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadDoctorCertificates(
  doctorCertificatesSearchOption: DoctorCertificatesSearchOption
): Promise<DoctorCertificatesModel> {
  const { doctorId, doctorName, certificateId, certificate, activeFrom, activeTo, page, limit, lastRetrieved } =
    doctorCertificatesSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdCertificatesGet(
      doctorId,
      doctorName,
      certificateId,
      certificate,
      activeFrom,
      activeTo,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorCertificate(doctorId: string, certificateId: string): Promise<DoctorCertificateModel> {
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdCertificatesCertificateIdGet(doctorId, certificateId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadDoctorCertificates,
  loadDoctorCertificate
}
