import { configuration, instance } from '../utils/interceptor'
import { RestException } from '../models/exceptions'
import { DoctorsApi, DoctorEducationsModel, DoctorEducationModel } from 'ch-api-client-typescript2/lib'
import { DoctorEducationsSearchOption } from '../models/doctorEducations'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadDoctorEducations(
  doctorEducationsSearchOption: DoctorEducationsSearchOption
): Promise<DoctorEducationsModel> {
  const { doctorId, doctorId2, doctorName, institution, qualification, graduationDate, page, limit, lastRetrieved } =
    doctorEducationsSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdEducationsGet(
      doctorId,
      doctorId2,
      doctorName,
      institution,
      qualification,
      graduationDate,
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

export function loadDoctorEducation(doctorId: string, educationId: string): Promise<DoctorEducationModel> {
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdEducationsEducationIdGet(doctorId, educationId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadDoctorEducations,
  loadDoctorEducation
}
