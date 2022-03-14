import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import { appendTagsAsync, loadTagAsync, loadTagsAsync } from '../actions/tags'

export const loadTagsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTagsAsync.request)),
    switchMap((action) =>
      from(apis.tags.loadTags(action.payload)).pipe(
        map(loadTagsAsync.success),
        catchError((restException: RestException) => of(loadTagsAsync.failure(restException)))
      )
    )
  )

export const appendTagsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendTagsAsync.request)),
    switchMap((action) =>
      from(apis.tags.loadTags(action.payload)).pipe(
        map(appendTagsAsync.success),
        catchError((restException: RestException) => of(appendTagsAsync.failure(restException)))
      )
    )
  )

export const loadTagEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadTagAsync.request)),
    switchMap((action) =>
      from(apis.tags.loadTag(action.payload)).pipe(
        map(loadTagAsync.success),
        catchError((restException: RestException) => of(loadTagAsync.failure(restException)))
      )
    )
  )

const tagsEpic = combineEpics(loadTagsEpic, appendTagsEpic, loadTagEpic)

export default tagsEpic
