import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region DoctorMedias
export const getDoctorMedias = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdMediasGetRequest
): Promise<MediasModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorMediaByMediaId = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion DoctorMedias

const doctorMedias = {
  getDoctorMedias,
  getDoctorMediaByMediaId
}

export default doctorMedias
