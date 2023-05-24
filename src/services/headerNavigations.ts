import {
  HeaderNavigationsApi,
  HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest
} from 'ch-api-client-typescript2/lib/api/header-navigations-api'
import { HeaderNavigationItemModel } from 'ch-api-client-typescript2/lib/models/header-navigation-item-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HeaderNavigations
export const getHeaderNavigations = async (
  payload: HeaderNavigationsApiApiV2HeadernavigationsLanguageCodeGetRequest
): Promise<HeaderNavigationItemModel[]> => {
  return new HeaderNavigationsApi(configuration, undefined, instance)
    .apiV2HeadernavigationsLanguageCodeGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const headerNavigations = {
  getHeaderNavigations
}

export default headerNavigations
