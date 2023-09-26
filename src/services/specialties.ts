import {
  SpecialtiesApi,
  SpecialtiesApiApiV2SpecialtiesGetRequest,
  SpecialtiesApiApiV2SpecialtiesSlugGetRequest,
  SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialties-api'
import { SpecialtiesModel } from 'ch-api-client-typescript2/lib/models/specialties-model'
import { SpecialtyModel } from 'ch-api-client-typescript2/lib/models/specialty-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Specialties
export const getSpecialties = async (payload?: SpecialtiesApiApiV2SpecialtiesGetRequest): Promise<SpecialtiesModel> => {
  return new SpecialtiesApi(configuration, undefined, instance)
    .apiV2SpecialtiesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getSpecialtyBySpecialtyId = async (
  payload: SpecialtiesApiApiV2SpecialtiesSpecialtyIdGetRequest
): Promise<SpecialtyModel> => {
  return new SpecialtiesApi(configuration, undefined, instance)
    .apiV2SpecialtiesSpecialtyIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getSpecialtyBySlug = async (
  payload: SpecialtiesApiApiV2SpecialtiesSlugGetRequest
): Promise<SpecialtyModel> => {
  return new SpecialtiesApi(configuration, undefined, instance)
    .apiV2SpecialtiesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Specialties

const specialties = {
  getSpecialties,
  getSpecialtyBySpecialtyId,
  getSpecialtyBySlug
}

export default specialties
