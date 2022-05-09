import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { changeEmailAsync, loadProfileAsync, updateProfileAsync } from '../actions/profiles'
import { setToastMessage } from '../actions/toastMessages'

export const loadProfileEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadProfileAsync.request)),
    switchMap((action) =>
      from(apis.profiles.loadProfile()).pipe(
        map(loadProfileAsync.success),
        catchError((restException: RestException) => of(loadProfileAsync.failure(restException)))
      )
    )
  )

export const changeEmailEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(changeEmailAsync.request)),
    switchMap((action) =>
      from(apis.profiles.changeEmail(action.payload)).pipe(
        map(changeEmailAsync.success),
        catchError((restException: RestException) => of(changeEmailAsync.failure(restException)))
      )
    )
  )

export const updateProfileEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(updateProfileAsync.request)),
    switchMap((action) =>
      from(apis.profiles.updateProfile(action.payload)).pipe(
        switchMap((res) => [
          updateProfileAsync.success(res),
          setToastMessage({ text: 'Update Profile success.', type: 'success', statusCode: 200 })
        ]),
        catchError((restException: RestException) =>
          of(
            setToastMessage({ text: restException.title, type: 'error', statusCode: restException.status }),
            updateProfileAsync.failure(restException)
          )
        )
      )
    )
  )

const profilesEpic = combineEpics(loadProfileEpic, changeEmailEpic, updateProfileEpic)

export default profilesEpic
