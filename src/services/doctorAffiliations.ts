import {
  DoctorAffiliationsApi,
  DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest,
  DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest,
  DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/doctor-affiliations-api'
import { DoctorAffiliationModel } from 'ch-api-client-typescript2/lib/models/doctor-affiliation-model'
import { DoctorAffiliationsModel } from 'ch-api-client-typescript2/lib/models/doctor-affiliations-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Doctor Affiliations
export const getDoctorAffiliations = async (
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsGetRequest
): Promise<DoctorAffiliationsModel> => {
  return new DoctorAffiliationsApi(configuration, undefined, instance)
    .apiV2DoctoraffiliationsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorAffiliationById = async (
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsIdGetRequest
): Promise<DoctorAffiliationModel> => {
  return new DoctorAffiliationsApi(configuration, undefined, instance)
    .apiV2DoctoraffiliationsIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorAffiliationBySlug = async (
  payload: DoctorAffiliationsApiApiV2DoctoraffiliationsSlugGetRequest
): Promise<DoctorAffiliationModel> => {
  return new DoctorAffiliationsApi(configuration, undefined, instance)
    .apiV2DoctoraffiliationsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorAffiliations = {
  getDoctorAffiliations,
  getDoctorAffiliationById,
  getDoctorAffiliationBySlug
}

export default doctorAffiliations
