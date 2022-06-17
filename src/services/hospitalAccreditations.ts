import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { HospitalsApi, HospitalAccreditationModel, HospitalAccreditationsModel } from 'ch-api-client-typescript2/lib'

import { HospitalAccreditationsSearchOption } from '../models/hospitalAccreditations'

const apiRoot = HttpClient.getBaseUrl()

// #region HospitalAccreditations
export function loadHospitalAccreditations(
  hospitalAccreditationsSearchOption: HospitalAccreditationsSearchOption
): Promise<HospitalAccreditationsModel> {
  const { hospitalId, hospitalName, accreditationId, accreditationName, page, limit, lastRetrieved } =
    hospitalAccreditationsSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdAccreditationsGet(
      hospitalId,
      hospitalName,
      accreditationId,
      accreditationName,
      page,
      limit,
      lastRetrieved
    )
    .then((res: any) => {
      return res.data as HospitalAccreditationsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalAccreditation(
  hospitalId: string,
  accreditationId: string
): Promise<HospitalAccreditationModel> {
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdAccreditationsAccreditationIdGet(hospitalId, accreditationId)
    .then((res: any) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalAccreditations

export default {
  loadHospitalAccreditations,
  loadHospitalAccreditation
}
