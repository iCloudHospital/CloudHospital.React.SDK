import { combineEpics } from 'redux-observable'
import { RootEpic } from 'CHTypes'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { loadChatUserAsync, postChatUserAsync, putChatUserAsync } from '../actions/chats'
import { RestException } from '../../models/exceptions'

export const loadChatUserEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadChatUserAsync.request)),
    switchMap((action) =>
      from(apis.chats.loadChatUser()).pipe(
        map(loadChatUserAsync.success),
        catchError((restException: RestException) => of(loadChatUserAsync.failure(restException)))
      )
    )
  )

export const postChatUserEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postChatUserAsync.request)),
    switchMap((action) =>
      from(apis.chats.postChatUser(action.payload)).pipe(
        map(postChatUserAsync.success),
        catchError((restException: RestException) => of(postChatUserAsync.failure(restException)))
      )
    )
  )

export const putChatUserEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putChatUserAsync.request)),
    switchMap((action) =>
      from(apis.chats.putChatUser(action.payload.userId, action.payload.updateChatUserCommand)).pipe(
        map(putChatUserAsync.success),
        catchError((restException: RestException) => of(putChatUserAsync.failure(restException)))
      )
    )
  )

const chatsEpic = combineEpics(loadChatUserEpic, postChatUserEpic, putChatUserEpic)

export default chatsEpic
