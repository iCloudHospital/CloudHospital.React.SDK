import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { NotificationsSearchOption } from '../models/notifications'
import { CheckNotificationsCommand, NotificationsApi, NotificationsModel } from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadNotifications(notificationsSearchOption: NotificationsSearchOption): Promise<NotificationsModel> {
  const { notificationCode, unreadCountOnly, page, limit, lastRetrieved } = notificationsSearchOption
  return new NotificationsApi(configuration, apiRoot, instance)
    .apiV2NotificationsGet(notificationCode, unreadCountOnly, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as NotificationsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function checkNotifications(checkNotificationsCommand: CheckNotificationsCommand): Promise<boolean> {
  return new NotificationsApi(configuration, apiRoot, instance)
    .apiV2NotificationsCheckPost(checkNotificationsCommand)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadNotifications,
  checkNotifications
}
