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
  postConsultationAsync,
  putConsultationAsync,
  createConsultationSecretAsync,
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

export const postConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.postConsultation(action.payload.requestId, action.payload.command)).pipe(
        switchMap((res) => [
          postConsultationAsync.success(res),
          setMessage({ text: 'postConsultation success', status: 200 }),
        ]),
        catchError((restException: RestException) => 
          of(
            setMessage(restException),
            postConsultationAsync.failure(restException)
          )
        )
      )
    )
  )

export const putConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.putConsultation(action.payload.consultationId, action.payload.command)).pipe(
        switchMap((res) => [
          putConsultationAsync.success(res),
          setMessage({ text: 'putConsultation success', status: 200 }),
        ]),
        catchError((restException: RestException) => 
          of(
            setMessage(restException),
            putConsultationAsync.failure(restException)
          )
        )
      )
    )
  )

export const createConsultationSecretEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(createConsultationSecretAsync.request)),
    switchMap((action) =>
      from(apis.consultations.createSecret(action.payload)).pipe(
        switchMap((res) => [
          createConsultationSecretAsync.success(res),
          setMessage({ text: 'createSecret success', status: 200 }),
        ]),
        catchError((restException: RestException) => 
          of(
            setMessage(restException),
              createConsultationSecretAsync.failure(restException)
            )
          )
      )
    )
  )

const consultationsEpic = combineEpics(
  loadConsultationsEpic,
  loadConsultationEpic,
  loadCompletedConsultationsEpic,
  cancelConsultationEpic,
  postConsultationEpic,
  putConsultationEpic,
  createConsultationSecretEpic
)

export default consultationsEpic
