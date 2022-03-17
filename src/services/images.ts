import { instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { MediaModel } from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function postImages(formData: FormData): Promise<MediaModel[]> {
  const url = apiRoot + '/api/v1/images'

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return instance
    .post(url, formData, config)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
export default {
  postImages
}
