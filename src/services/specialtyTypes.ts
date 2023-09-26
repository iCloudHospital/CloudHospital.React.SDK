import {
  SpecialtyTypesApi,
  SpecialtyTypesApiApiV2SpecialtytypesGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialty-types-api'
import { SpecialtyTypeModel } from 'ch-api-client-typescript2/lib/models/specialty-type-model'
import { SpecialtyTypesModel } from 'ch-api-client-typescript2/lib/models/specialty-types-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region SpecialtyTypes
export const getSpecialtyTypes = async (
  payload?: SpecialtyTypesApiApiV2SpecialtytypesGetRequest
): Promise<SpecialtyTypesModel> => {
  return new SpecialtyTypesApi(configuration, undefined, instance)
    .apiV2SpecialtytypesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getSpecialtyTypeBySpecialtyTypeId = async (
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdGetRequest
): Promise<SpecialtyTypeModel> => {
  return new SpecialtyTypesApi(configuration, undefined, instance)
    .apiV2SpecialtytypesSpecialtyTypeIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getSpecialtyTypeBySlug = async (
  payload: SpecialtyTypesApiApiV2SpecialtytypesSlugGetRequest
): Promise<SpecialtyTypeModel> => {
  return new SpecialtyTypesApi(configuration, undefined, instance)
    .apiV2SpecialtytypesSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion SpecialtyTypes

const specialtyTypes = {
  getSpecialtyTypes,
  getSpecialtyTypeBySpecialtyTypeId,
  getSpecialtyTypeBySlug
}

export default specialtyTypes
