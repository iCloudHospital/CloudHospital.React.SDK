import { CheckNotificationsCommand, NotificationModel, NotificationsModel } from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { NotificationsSearchOption } from '../../models/notifications'

export const loadNotificationsAsync = createAsyncAction(
  'LOAD_NOTIFICATIONS_REQUEST',
  'LOAD_NOTIFICATIONS_SUCCESS',
  'LOAD_NOTIFICATIONS_FAILURE'
)<NotificationsSearchOption, NotificationsModel, RestException>()

export const checkNotificationAsync = createAsyncAction(
  'CHECK_NOTIFICATION_REQUEST',
  'CHECK_NOTIFICATION_SUCCESS',
  'CHECK_NOTIFICATION_FAILURE'
)<CheckNotificationsCommand, boolean, RestException>()

export const setReceivedNotification = createAction('RECEIVED_NOTIFICATION')<NotificationModel | null>()

export type NotificationsActionTypes =
  | ActionType<typeof loadNotificationsAsync>
  | ActionType<typeof checkNotificationAsync>
  | ActionType<typeof setReceivedNotification>
