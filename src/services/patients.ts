import { RestException } from '../models'
import {
  PatientsApi,
  PatientsApiApiV2PatientsAffiliationsHospitalIdDeleteRequest,
  PatientsApiApiV2PatientsAffiliationsHospitalIdPostRequest
} from 'ch-api-client-typescript2/lib/api/patients-api'
import { configuration, instance } from './HttpClient'

export const postPatientAffiliation = async (
  payload: PatientsApiApiV2PatientsAffiliationsHospitalIdPostRequest
): Promise<boolean> => {
  return new PatientsApi(configuration, undefined, instance)
    .apiV2PatientsAffiliationsHospitalIdPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
export const deletePatientAffiliation = async (
  payload: PatientsApiApiV2PatientsAffiliationsHospitalIdDeleteRequest
): Promise<boolean> => {
  return new PatientsApi(configuration, undefined, instance)
    .apiV2PatientsAffiliationsHospitalIdDelete(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const patients = {
  postPatientAffiliation,
  deletePatientAffiliation
}

export default patients
