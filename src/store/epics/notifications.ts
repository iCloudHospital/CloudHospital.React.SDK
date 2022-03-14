import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { checkNotificationAsync, loadNotificationsAsync } from '../actions/notifications'
import { RestException } from '../../models/exceptions'

export const loadNotificationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadNotificationsAsync.request)),
    switchMap((action) =>
      from(apis.notifications.loadNotifications(action.payload)).pipe(
        map(loadNotificationsAsync.success),
        catchError((restException: RestException) => of(loadNotificationsAsync.failure(restException)))
      )
    )
  )

export const checkNotificationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(checkNotificationAsync.request)),
    switchMap((action) =>
      from(apis.notifications.checkNotifications(action.payload)).pipe(
        map(checkNotificationAsync.success),
        catchError((restException: RestException) => of(checkNotificationAsync.failure(restException)))
      )
    )
  )

const notificationsEpic = combineEpics(loadNotificationsEpic, checkNotificationEpic)

export default notificationsEpic
