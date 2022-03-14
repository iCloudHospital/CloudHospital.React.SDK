import { NotificationsModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import { checkNotificationAsync, loadNotificationsAsync, NotificationsActionTypes } from '../actions/notifications'

export const isLoadingNotifications = createReducer<boolean, NotificationsActionTypes>(true as boolean)
  .handleAction([loadNotificationsAsync.success, loadNotificationsAsync.failure], (state, action) => false)
  .handleAction([loadNotificationsAsync.request], (state, action) => true)

export const notificationsErrors = createReducer<RestException | null, NotificationsActionTypes>(null)
  .handleAction([loadNotificationsAsync.request, loadNotificationsAsync.success], (state, action) => null)
  .handleAction([loadNotificationsAsync.failure], (state, action) => action.payload)

export const notifications = createReducer<NotificationsModel | null, NotificationsActionTypes>(null)
  .handleAction([loadNotificationsAsync.failure], (state, action) => null)
  .handleAction([loadNotificationsAsync.success], (state, action) => action.payload)

export const isCheckingNotification = createReducer<boolean, NotificationsActionTypes>(false as boolean)
  .handleAction([checkNotificationAsync.success, checkNotificationAsync.failure], (state, action) => false)
  .handleAction([checkNotificationAsync.request], (state, action) => true)

export const checkNotificationSuccess = createReducer<boolean, NotificationsActionTypes>(false as boolean)
  .handleAction([checkNotificationAsync.request, checkNotificationAsync.failure], (state, action) => false)
  .handleAction([checkNotificationAsync.success], (state, action) => action.payload)

const notificationsState = combineReducers({
  isLoadingNotifications,
  notificationsErrors,
  notifications,
  isCheckingNotification,
  checkNotificationSuccess
})

export default notificationsState
export type NotificationsState = ReturnType<typeof notificationsState>
