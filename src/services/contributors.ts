import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  ContributorsApi,
  ContributorsModel,
  ContributorModel,
  ContributorSnsHandlesModel,
  SnsHandleModel
} from 'ch-api-client-typescript2/lib'
import {
  ContributorSearchOption,
  ContributorsSearchOption,
  ContributorSnsHandlesSearchOption,
  ContributorSnsHnadleSearchOption
} from '../models/contributors'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Contributors
export function loadContributors(contributorsSearchOption: ContributorsSearchOption): Promise<ContributorsModel> {
  const {
    id,
    name,
    email,
    description,
    website,
    hospitalId,
    interviewerOnly,
    languageCode,
    showHidden,
    page,
    limit,
    lastRetrieved
  } = contributorsSearchOption
  return new ContributorsApi(undefined, apiRoot, instance)
    .apiV2ContributorsGet(
      id,
      name,
      email,
      description,
      website,
      hospitalId,
      interviewerOnly,
      showHidden,
      languageCode,
      showHidden,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadContributor(contributorSearchOption: ContributorSearchOption): Promise<ContributorModel> {
  const { contributorId, slug, languageCode } = contributorSearchOption
  if (slug) {
    return new ContributorsApi(undefined, apiRoot, instance)
      .apiV2ContributorsSlugGet(slug, languageCode)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new ContributorsApi(undefined, apiRoot, instance)
      .apiV2ContributorsContributorIdGet(contributorId, languageCode)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Contributors

// #region ContributorSnsHandles
export function loadContributorSnsHandles(
  contributorSnsHandlesSearchOption: ContributorSnsHandlesSearchOption
): Promise<ContributorSnsHandlesModel> {
  const { contributorId, contributorId2, id, snsType, handle, page, limit, lastRetrieved } =
    contributorSnsHandlesSearchOption
  return new ContributorsApi(undefined, apiRoot, instance)
    .apiV2ContributorsContributorIdHandlesGet(
      contributorId,
      contributorId2,
      id,
      snsType,
      handle,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as ContributorSnsHandlesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadContributorSnsHandle(
  contributorSnsHandleSearchOption: ContributorSnsHnadleSearchOption
): Promise<SnsHandleModel> {
  const { contributorId, handleId } = contributorSnsHandleSearchOption
  return new ContributorsApi(undefined, apiRoot, instance)
    .apiV2ContributorsContributorIdGet(contributorId, handleId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion ContributorSnsHandles

export default {
  loadContributors,
  loadContributor,

  loadContributorSnsHandles,
  loadContributorSnsHandle
}
