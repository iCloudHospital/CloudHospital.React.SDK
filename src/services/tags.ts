import {
  TagsApi,
  TagsApiApiV2TagsGetRequest,
  TagsApiApiV2TagsTagIdGetRequest
} from 'ch-api-client-typescript2/lib/api/tags-api'
import { TagModel } from 'ch-api-client-typescript2/lib/models/tag-model'
import { TagsModel } from 'ch-api-client-typescript2/lib/models/tags-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadTags = async (payload?: TagsApiApiV2TagsGetRequest): Promise<TagsModel> => {
  return new TagsApi(configuration, undefined, instance)
    .apiV2TagsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadTag = async (payload: TagsApiApiV2TagsTagIdGetRequest): Promise<TagModel> => {
  return new TagsApi(configuration, undefined, instance)
    .apiV2TagsTagIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const tags = {
  loadTags,
  loadTag
}

export default tags
