import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { IdentityError } from '../../models/exceptions'

import {
  loadAccountAsync,
  postAccountAsync,
  sendVerificationEmailAsync,
  forgotPasswordAsync,
  resetPasswordAsync,
  changePasswordAsync,
  confirmAccountAsync
} from '../actions/accounts'

export const postAccountEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postAccountAsync.request)),
    switchMap((action) =>
      from(apis.accounts.postAccountAsync(action.payload)).pipe(
        map(postAccountAsync.success),
        catchError((identityErrors: IdentityError[]) => of(postAccountAsync.failure(identityErrors)))
      )
    )
  )

export const loadAccountsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadAccountAsync.request)),
    switchMap((action) =>
      from(apis.accounts.loadAccountAsync()).pipe(
        map(loadAccountAsync.success),
        catchError((restException: IdentityError) => of(loadAccountAsync.failure(restException)))
      )
    )
  )

export const sendVerificationMailEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(sendVerificationEmailAsync.request)),
    switchMap((action) =>
      from(apis.accounts.sendVerificationMailAsync()).pipe(
        map(sendVerificationEmailAsync.success),
        catchError((identityError: IdentityError) => of(sendVerificationEmailAsync.failure(identityError)))
      )
    )
  )

export const confirmAccountEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(confirmAccountAsync.request)),
    switchMap((action) =>
      from(apis.accounts.confirmAccountAsync(action.payload)).pipe(
        map(confirmAccountAsync.success),
        catchError((identityErrors: IdentityError[]) => of(confirmAccountAsync.failure(identityErrors)))
      )
    )
  )

export const forgotPasswordEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(forgotPasswordAsync.request)),
    switchMap((action) =>
      from(apis.accounts.forgotPasswordAsync(action.payload)).pipe(
        map(forgotPasswordAsync.success),
        catchError((identityErrors: IdentityError[]) => of(forgotPasswordAsync.failure(identityErrors)))
      )
    )
  )

export const resetPasswordEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(resetPasswordAsync.request)),
    switchMap((action) =>
      from(apis.accounts.resetPasswordAsync(action.payload)).pipe(
        map(resetPasswordAsync.success),
        catchError((identityErrors: IdentityError[]) => of(resetPasswordAsync.failure(identityErrors)))
      )
    )
  )

export const changePasswordEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(changePasswordAsync.request)),
    switchMap((action) =>
      from(apis.accounts.changePasswordAsync(action.payload)).pipe(
        map(changePasswordAsync.success),
        catchError((identityErrors: IdentityError[]) => of(changePasswordAsync.failure(identityErrors)))
      )
    )
  )

const accountsEpic = combineEpics(
  postAccountEpic,
  loadAccountsEpic,
  sendVerificationMailEpic,
  confirmAccountEpic,
  forgotPasswordEpic,
  resetPasswordEpic,
  changePasswordEpic
)

export default accountsEpic
