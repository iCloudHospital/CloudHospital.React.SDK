import {
  NotificationsApi,
  NotificationsApiApiV2NotificationsCheckPostRequest,
  NotificationsApiApiV2NotificationsGetRequest
} from 'ch-api-client-typescript2/lib/api/notifications-api'
import { NotificationsModel } from 'ch-api-client-typescript2/lib/models/notifications-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadNotifications = async (
  payload: NotificationsApiApiV2NotificationsGetRequest
): Promise<NotificationsModel> => {
  return new NotificationsApi(configuration, undefined, instance)
    .apiV2NotificationsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const checkNotifications = async (
  payload: NotificationsApiApiV2NotificationsCheckPostRequest
): Promise<boolean> => {
  return new NotificationsApi(configuration, undefined, instance)
    .apiV2NotificationsCheckPost(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const notifications = {
  loadNotifications,
  checkNotifications
}

export default notifications
