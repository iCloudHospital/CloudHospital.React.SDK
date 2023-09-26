import {
  ProfilesApi,
  ProfilesApiApiV2ProfilesChangeemailPostRequest,
  ProfilesApiApiV2ProfilesPostRequest,
  ProfilesApiApiV2ProfilesProfileIdDeleteRequest,
  ProfilesApiApiV2ProfilesPutRequest
} from 'ch-api-client-typescript2/lib/api/profiles-api'
import { PatientModel } from 'ch-api-client-typescript2/lib/models/patient-model'
import { UserModel } from 'ch-api-client-typescript2/lib/models/user-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const postProfile = async (payload: ProfilesApiApiV2ProfilesPostRequest): Promise<UserModel> => {
  return new ProfilesApi(configuration, undefined, instance)
    .apiV2ProfilesPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const changeEmail = async (payload: ProfilesApiApiV2ProfilesChangeemailPostRequest): Promise<boolean> => {
  return new ProfilesApi(configuration, undefined, instance)
    .apiV2ProfilesChangeemailPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getProfile = async (): Promise<PatientModel> => {
  return new ProfilesApi(configuration, undefined, instance)
    .apiV2ProfilesGet()
    .then((res) => {
      return res.data as PatientModel
    })
    .catch((error: any) => {
      const restException = error.response?.data as RestException
      throw restException
    })
}

export const putProfile = async (payload: ProfilesApiApiV2ProfilesPutRequest): Promise<PatientModel> => {
  // TODO: remove chadmin
  return new ProfilesApi(configuration, undefined, instance)
    .apiV2ProfilesPut(payload)
    .then((res) => {
      return res.data as PatientModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const deleteProfile = async (payload: ProfilesApiApiV2ProfilesProfileIdDeleteRequest): Promise<boolean> => {
  // TODO: remove chadmin
  return new ProfilesApi(configuration, undefined, instance)
    .apiV2ProfilesProfileIdDelete(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const profiles = {
  postProfile,
  changeEmail,
  getProfile,
  putProfile
}

export default profiles
