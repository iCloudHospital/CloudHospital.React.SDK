import { nameOf, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import { ImagesApiApiV2ImagesPostRequest, MediaModel } from 'ch-api-client-typescript2/lib'
import { postImages } from '../services/images'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v2/images
export const postImageSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<MediaModel[], RestException, undefined, string>
) => {
  return useGenericSWRMutation<MediaModel[], RestException, ImagesApiApiV2ImagesPostRequest>(
    operationName + nameOf(() => postImages),
    postImages,
    config
  )
}
// #endregion POST api/v2/images
