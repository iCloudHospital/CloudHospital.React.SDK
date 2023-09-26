import { RestException } from '@models/exceptions'
import {
  HospitalsConsultationTimetablesApi,
  HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-consultation-timetables-api'
import { ConsultationTimetableModel } from 'ch-api-client-typescript2/lib/models/consultation-timetable-model'
import { configuration, instance } from './HttpClient'

// #region HospitalConsultationTimetables
export const getHospitalConsultationTimeTable = async (
  payload: HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest
): Promise<ConsultationTimetableModel> => {
  return new HospitalsConsultationTimetablesApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdConsultationtimetablesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalConsultationTimetables

const hospitalConsultationTimeTables = {
  getHospitalConsultationTimeTable
}

export default hospitalConsultationTimeTables
