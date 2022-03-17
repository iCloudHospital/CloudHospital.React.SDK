import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { DoctorMediasSearchOption } from '../models/doctorMedias'
import { DoctorsApi, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region DoctorMedias
export function loadDoctorMedias(doctorMediasSearchOption: DoctorMediasSearchOption): Promise<MediasModel> {
  const { doctorId, id, mediaType, page, limit, lastRetrieved } = doctorMediasSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdMediasGet(doctorId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorMedia(doctorId: string, mediaId: string): Promise<MediaModel> {
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdMediasMediaIdGet(doctorId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion DoctorMedias

export default {
  loadDoctorMedias,
  loadDoctorMedia
}
