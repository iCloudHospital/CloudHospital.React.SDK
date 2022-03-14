import { combineEpics } from 'redux-observable'
import { RootEpic } from 'CHTypes'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { loadCommunicationUserAsync } from '../actions/communications'
import { RestException } from '../../models/exceptions'

export const loadCommunicationUserEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadCommunicationUserAsync.request)),
    switchMap((action) =>
      from(apis.communications.loadCommunicationUser()).pipe(
        map(loadCommunicationUserAsync.success),
        catchError((restException: RestException) => of(loadCommunicationUserAsync.failure(restException)))
      )
    )
  )

const communicationsEpic = combineEpics(loadCommunicationUserEpic)

export default communicationsEpic
