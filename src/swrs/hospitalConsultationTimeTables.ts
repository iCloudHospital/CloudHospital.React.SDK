import { nameOf, useGenericSWR, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import { HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest } from 'ch-api-client-typescript2/lib/api/hospitals-consultation-timetables-api'
import { ConsultationTimetableModel } from 'ch-api-client-typescript2/lib/models/consultation-timetable-model'
import { getHospitalConsultationTimeTable } from '@services/hospitalConsultationTimeTables'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/hospitals/{hospitalId}/consultationtimetables
export const getHospitalConsultationTimeTableSWR = (
  operationName = '',
  payload: HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<ConsultationTimetableModel, RestException>
) => {
  return useGenericSWR<
    ConsultationTimetableModel,
    RestException,
    HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest
  >(
    operationName + nameOf(() => getHospitalConsultationTimeTable),
    getHospitalConsultationTimeTable,
    payload,
    shouldFetch,
    config
  )
}

export const getHospitalConsultationTimeTableSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<ConsultationTimetableModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    ConsultationTimetableModel,
    RestException,
    HospitalsConsultationTimetablesApiApiV2HospitalsHospitalIdConsultationtimetablesGetRequest
  >(operationName + nameOf(() => getHospitalConsultationTimeTable), getHospitalConsultationTimeTable, config)
}
// #endregion GET api/v2/hospitals/{hospitalId}/consultationtimetables
