import { NotificationCode } from 'ch-api-client-typescript2/lib'

export interface NotificationsSearchOption {
  notificationCode?: NotificationCode
  unreadCountOnly?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}
