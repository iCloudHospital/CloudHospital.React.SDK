import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { DoctorsApi, DoctorSpecialtiesModel, DoctorSpecialtyModel } from 'ch-api-client-typescript2/lib'
import { DoctorSpecialtiesSearchOption } from '../models/doctorSpecialties'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadDoctorSpecialties(
  doctorSpecialtiesSearchOption: DoctorSpecialtiesSearchOption
): Promise<DoctorSpecialtiesModel> {
  const { doctorId, doctorName, specialtyId, specialtyName, page, limit, lastRetrieved } = doctorSpecialtiesSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdSpecialtiesGet(doctorId, doctorName, specialtyId, specialtyName, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorSpecialty(doctorId: string, specialtyId: string): Promise<DoctorSpecialtyModel> {
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdSpecialtiesSpecialtyIdGet(doctorId, specialtyId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadDoctorSpecialties,
  loadDoctorSpecialty
}
