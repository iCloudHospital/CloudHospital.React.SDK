import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HospitalMedias
export const getHospitalMedias = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdMediasGetRequest
): Promise<MediasModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalMediaByMediaId = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalMedias

const hospitalMedias = {
  getHospitalMedias,
  getHospitalMediaByMediaId
}

export default hospitalMedias
