import { MediaModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'

export const postImagesAsync = createAsyncAction('POST_IMAGES_REQUEST', 'POST_IMAGES_SUCCESS', 'POST_IMAGES_FAILURE')<
  FormData,
  MediaModel[],
  RestException
>()

export const resetImageState = createAction('RESET_IMAGE_STATE')<undefined>()

export type ImagesActionTypes = ActionType<typeof postImagesAsync> | ActionType<typeof resetImageState>
