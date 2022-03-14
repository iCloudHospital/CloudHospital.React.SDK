import { RestException } from '../models/exceptions'
import { configuration, instance } from '../utils/interceptor'
import { CommunicationsApi, CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib'
import { log } from '../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadCommunicationUser(): Promise<CommunicationUserTokenModel> {
  log('loadCommunicationUser')
  return new CommunicationsApi(configuration, apiRoot, instance)
    .apiV2CommunicationsGet()
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadCommunicationUser
}
