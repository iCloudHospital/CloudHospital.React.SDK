import { CommunicationsApi } from 'ch-api-client-typescript2/lib/api/communications-api'
import { CommunicationUserTokenModel } from 'ch-api-client-typescript2/lib/models/communication-user-token-model'
import { RestException } from '@models/exceptions'
import { log } from '../utils/log'
import { configuration, instance } from './HttpClient'

export const getCommunicationUser = async (): Promise<CommunicationUserTokenModel> => {
  log('getCommunicationUser')
  return new CommunicationsApi(configuration, undefined, instance)
    .apiV2CommunicationsGet()
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const communications = {
  getCommunicationUser
}

export default communications
