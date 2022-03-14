import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import { postImagesAsync } from '../actions/images'

export const postImagesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postImagesAsync.request)),
    switchMap((action) =>
      from(apis.images.postImages(action.payload)).pipe(
        map(postImagesAsync.success),
        catchError((restException: RestException) => of(postImagesAsync.failure(restException)))
      )
    )
  )

const imagesEpic = combineEpics(postImagesEpic)

export default imagesEpic
