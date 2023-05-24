import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdGetRequest,
  HospitalsApiApiV2HospitalsSimpleGetRequest,
  HospitalsApiApiV2HospitalsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalModel } from 'ch-api-client-typescript2/lib/models/hospital-model'
import { HospitalsModel } from 'ch-api-client-typescript2/lib/models/hospitals-model'
import { HospitalsSimpleModel } from 'ch-api-client-typescript2/lib/models/hospitals-simple-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Hospitals
export const getHospitals = async (payload?: HospitalsApiApiV2HospitalsGetRequest): Promise<HospitalsModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalsSimple = async (
  payload: HospitalsApiApiV2HospitalsSimpleGetRequest
): Promise<HospitalsSimpleModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsSimpleGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalByHospitalId = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdGetRequest
): Promise<HospitalModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalBySlug = async (payload: HospitalsApiApiV2HospitalsSlugGetRequest): Promise<HospitalModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Hospitals

const hospitals = {
  getHospitals,
  getHospitalsSimple,
  getHospitalByHospitalId,
  getHospitalBySlug
}

export default hospitals
