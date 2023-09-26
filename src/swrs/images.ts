import { nameOf, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import { RestException } from '@models/exceptions'
import { postImages } from '@services/images'
import { ImagesApiApiV2ImagesPostRequest } from 'ch-api-client-typescript2/lib/api/images-api'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
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
