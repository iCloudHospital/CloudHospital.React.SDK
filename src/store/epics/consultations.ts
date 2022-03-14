import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  loadConsultationsAsync,
  loadConsultationAsync,
  cancelConsultationAsync,
  loadCompletedConsultationsAsync,
  resetConsultationState,
} from '../actions/consultations'
import { setMessage } from '../actions/toastMessages'

export const loadConsultationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadConsultationsAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultations(action.payload)).pipe(
        map(loadConsultationsAsync.success),
        catchError((restException: RestException) =>
          of(loadConsultationsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultation(action.payload)).pipe(
        map(loadConsultationAsync.success),
        catchError((restException: RestException) =>
          of(loadConsultationAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadCompletedConsultationsEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(loadCompletedConsultationsAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultations(action.payload)).pipe(
        map(loadCompletedConsultationsAsync.success),
        catchError((restException: RestException) =>
          of(loadCompletedConsultationsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const cancelConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(cancelConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.cancelConsultation(action.payload)).pipe(
        switchMap((res) => [
          cancelConsultationAsync.success(res),
          setMessage({ text: 'Cancel consultation success', status: 200 }),
        ]),
        catchError((restException: RestException) =>
          of(
            setMessage(restException),
            cancelConsultationAsync.failure(restException),
          ),
        ),
      ),
    ),
  )

const consultationsEpic = combineEpics(
  loadConsultationsEpic,
  loadConsultationEpic,
  loadCompletedConsultationsEpic,
  cancelConsultationEpic,
)

export default consultationsEpic
