import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdAccreditationsAccreditationIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdAccreditationsGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalAccreditationModel } from 'ch-api-client-typescript2/lib/models/hospital-accreditation-model'
import { HospitalAccreditationsModel } from 'ch-api-client-typescript2/lib/models/hospital-accreditations-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HospitalAccreditations
export const loadHospitalAccreditations = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdAccreditationsGetRequest
): Promise<HospitalAccreditationsModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdAccreditationsGet(payload)
    .then((res: any) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadHospitalAccreditation = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdAccreditationsAccreditationIdGetRequest
): Promise<HospitalAccreditationModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdAccreditationsAccreditationIdGet(payload)
    .then((res: any) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalAccreditations

const hospitalAccreditations = {
  loadHospitalAccreditations,
  loadHospitalAccreditation
}

export default hospitalAccreditations
