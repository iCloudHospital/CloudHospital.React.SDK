import { instance } from './HttpClient'
import { ChangeEmailCommand, ProfilesApi, UserModel, UpdateProfileCommand } from 'ch-api-client-typescript2/lib'
import { RestException } from '../models/exceptions'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadProfile(): Promise<UserModel> {
  return new ProfilesApi(undefined, apiRoot, instance)
    .apiV2ProfilesGet()
    .then((res) => {
      return res.data as UserModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function changeEmail(changeEmailCommand: ChangeEmailCommand): Promise<boolean> {
  return new ProfilesApi(undefined, apiRoot, instance)
    .apiV2ProfilesChangeemailPost(changeEmailCommand)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function updateProfile(updateProfileCommand: UpdateProfileCommand): Promise<UserModel> {
  // TODO: remove chadmin
  return new ProfilesApi(undefined, apiRoot, instance)
    .apiV2ProfilesPut(updateProfileCommand)
    .then((res) => {
      return res.data as UserModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadProfile,
  changeEmail,
  updateProfile
}
