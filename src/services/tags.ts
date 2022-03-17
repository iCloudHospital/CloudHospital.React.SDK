import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import { TagsApi, TagsModel, TagModel } from 'ch-api-client-typescript2/lib'
import { TagsSearchOption } from '../models/tags'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export const loadTags = (tagsSearchOption: TagsSearchOption): Promise<TagsModel> => {
  const { tagId, page, limit, lastRetrieved } = tagsSearchOption
  return new TagsApi(configuration, apiRoot, instance)
    .apiV2TagsGet(tagId, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadTag = (tagId: string, releatedTags?: boolean | undefined): Promise<TagModel> => {
  return new TagsApi(configuration, apiRoot, instance)
    .apiV2TagsTagIdGet(tagId, releatedTags)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadTags,
  loadTag
}
