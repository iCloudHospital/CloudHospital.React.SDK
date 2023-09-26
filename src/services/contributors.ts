import {
  ContributorsApi,
  ContributorsApiApiV2ContributorsContributorIdGetRequest,
  ContributorsApiApiV2ContributorsContributorIdHandlesGetRequest,
  ContributorsApiApiV2ContributorsContributorIdHandlesHandleIdGetRequest,
  ContributorsApiApiV2ContributorsGetRequest,
  ContributorsApiApiV2ContributorsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/contributors-api'
import { ContributorModel } from 'ch-api-client-typescript2/lib/models/contributor-model'
import { ContributorSnsHandlesModel } from 'ch-api-client-typescript2/lib/models/contributor-sns-handles-model'
import { ContributorsModel } from 'ch-api-client-typescript2/lib/models/contributors-model'
import { SnsHandleModel } from 'ch-api-client-typescript2/lib/models/sns-handle-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Contributors
export const getContributors = async (
  payload?: ContributorsApiApiV2ContributorsGetRequest
): Promise<ContributorsModel> => {
  return new ContributorsApi(configuration, undefined, instance)
    .apiV2ContributorsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getContributorById = async (
  payload: ContributorsApiApiV2ContributorsContributorIdGetRequest
): Promise<ContributorModel> => {
  return new ContributorsApi(configuration, undefined, instance)
    .apiV2ContributorsContributorIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getContributorBySlug = async (
  payload: ContributorsApiApiV2ContributorsSlugGetRequest
): Promise<ContributorModel> => {
  return new ContributorsApi(configuration, undefined, instance)
    .apiV2ContributorsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Contributors

// #region ContributorSnsHandles
export const getContributorSnsHandles = async (
  payload: ContributorsApiApiV2ContributorsContributorIdHandlesGetRequest
): Promise<ContributorSnsHandlesModel> => {
  return new ContributorsApi(configuration, undefined, instance)
    .apiV2ContributorsContributorIdHandlesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getContributorSnsHandle = async (
  payload: ContributorsApiApiV2ContributorsContributorIdHandlesHandleIdGetRequest
): Promise<SnsHandleModel> => {
  return new ContributorsApi(configuration, undefined, instance)
    .apiV2ContributorsContributorIdHandlesHandleIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ContributorSnsHandles

const contributors = {
  getContributors,
  getContributorById,
  getContributorBySlug,
  getContributorSnsHandles,
  getContributorSnsHandle
}

export default contributors
