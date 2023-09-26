import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSlugGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalSpecialtiesModel } from 'ch-api-client-typescript2/lib/models/hospital-specialties-model'
import { HospitalSpecialtiesSimpleModel } from 'ch-api-client-typescript2/lib/models/hospital-specialties-simple-model'
import { HospitalSpecialtyModel } from 'ch-api-client-typescript2/lib/models/hospital-specialty-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HospitalSpecialties
export const getHospitalSpecialties = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesGetRequest
): Promise<HospitalSpecialtiesModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalSpecialtiesSimple = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSimpleGetRequest
): Promise<HospitalSpecialtiesSimpleModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSimpleGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalSpecialtyBySpecialtyId = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGetRequest
): Promise<HospitalSpecialtyModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalSpecialtyBySpecialtySlug = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSlugGetRequest
): Promise<HospitalSpecialtyModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

// #endregion HospitalSpecialties

const hospitalSpecialties = {
  getHospitalSpecialties,
  getHospitalSpecialtiesSimple,
  getHospitalSpecialtyBySpecialtyId,
  getHospitalSpecialtyBySpecialtySlug
}

export default hospitalSpecialties
