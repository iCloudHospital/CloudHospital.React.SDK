
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'
import { HospitalsApi, HospitalsApiApiV2HospitalsHospitalIdContactsGetRequest } from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalContactsModel } from 'ch-api-client-typescript2/lib/models/hospital-contacts-model'

// #region HospitalContacts 
export const loadHospitalContacts = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdContactsGetRequest
): Promise<HospitalContactsModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdContactsGet(payload)
    .then((res) => {
      return res?.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalContacts


const hospitalContacts = {
  loadHospitalContacts
}

export default hospitalContacts
