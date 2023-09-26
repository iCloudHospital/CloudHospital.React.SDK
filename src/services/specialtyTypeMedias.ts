import {
  SpecialtyTypesApi,
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest,
  SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/specialty-types-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region SpecialtyTypeMedias
export const getSpecialtyTypeMedias = async (
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasGetRequest
): Promise<MediasModel> => {
  return new SpecialtyTypesApi(configuration, undefined, instance)
    .apiV2SpecialtytypesSpecialtyTypeIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getSpecialtyTypeMediaByMediaId = async (
  payload: SpecialtyTypesApiApiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new SpecialtyTypesApi(configuration, undefined, instance)
    .apiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion SpecialtyTypeMedias

const specialtyTypes = {
  getSpecialtyTypeMedias,
  getSpecialtyTypeMediaByMediaId
}

export default specialtyTypes
