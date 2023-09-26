import { ImagesApi, ImagesApiApiV2ImagesPostRequest } from 'ch-api-client-typescript2/lib/api/images-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const postImages = async (payload: ImagesApiApiV2ImagesPostRequest): Promise<MediaModel[]> => {
  return new ImagesApi(configuration, undefined, instance)
    .apiV2ImagesPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const images = {
  postImages
}

export default images
