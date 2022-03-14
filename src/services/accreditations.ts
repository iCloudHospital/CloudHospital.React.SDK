import { configuration, instance } from '../utils/interceptor'
import { RestException } from '../models/exceptions'
import { AccreditationsApi, AccreditationsModel, AccreditationModel } from 'ch-api-client-typescript2/lib'
import { AccreditationSearchOption, AccreditationsSearchOption } from '../models/accreditations'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadAccreditations(
  accreditationsSearchOption: AccreditationsSearchOption
): Promise<AccreditationsModel> {
  const { name, logo, country, page, limit, lastRetrieved } = accreditationsSearchOption
  return new AccreditationsApi(configuration, apiRoot, instance)
    .apiV2AccreditationsGet(name, logo, country, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as AccreditationsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadAccreditation(accreditationSearchOption: AccreditationSearchOption): Promise<AccreditationModel> {
  const { accreditationId, options } = accreditationSearchOption
  return new AccreditationsApi(configuration, apiRoot, instance)
    .apiV2AccreditationsAccreditationIdGet(accreditationId, options)
    .then((res) => {
      return res.data as AccreditationModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadAccreditations,
  loadAccreditation
}
