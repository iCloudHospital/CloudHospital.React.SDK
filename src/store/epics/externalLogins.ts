import { Epic, combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { deleteExternalLoginAsync, loadExternalLoginsAsync, postExternalLoginAsync } from '../actions/externalLogins'
import { IdentityError } from '../../models/exceptions'

export const postExternalLoginEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postExternalLoginAsync.request)),
    switchMap((action) =>
      from(apis.externalLogins.postExternalLogin(action.payload)).pipe(
        map(postExternalLoginAsync.success),
        catchError((identityError: IdentityError[]) => of(postExternalLoginAsync.failure(identityError)))
      )
    )
  )

export const loadExternalLoginsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadExternalLoginsAsync.request)),
    switchMap((action) =>
      from(apis.externalLogins.loadExternalLogins()).pipe(
        map(loadExternalLoginsAsync.success),
        catchError((identityError: IdentityError[]) => of(loadExternalLoginsAsync.failure(identityError)))
      )
    )
  )

export const deleteExternalLoginEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(deleteExternalLoginAsync.request)),
    switchMap((action) =>
      from(apis.externalLogins.deleteExternalLogin(action.payload)).pipe(
        map(deleteExternalLoginAsync.success),
        catchError((identityError: IdentityError[]) => of(deleteExternalLoginAsync.failure(identityError)))
      )
    )
  )

const externalLoginsEpic = combineEpics(postExternalLoginEpic, loadExternalLoginsEpic, deleteExternalLoginEpic)

export default externalLoginsEpic
