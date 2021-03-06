import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  loadConsultationsAsync,
  loadConsultationAsync,
  loadCompletedConsultationsAsync,
  postConsultationAsync,
  putConsultationAsync,
  postConsultationPaymentKeyAsync
} from '../actions/consultations'
import { setToastMessage } from '../actions/toastMessages'

export const loadConsultationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadConsultationsAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultations(action.payload)).pipe(
        map(loadConsultationsAsync.success),
        catchError((restException: RestException) => of(loadConsultationsAsync.failure(restException)))
      )
    )
  )

export const loadConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultation(action.payload)).pipe(
        map(loadConsultationAsync.success),
        catchError((restException: RestException) => of(loadConsultationAsync.failure(restException)))
      )
    )
  )

export const loadCompletedConsultationsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadCompletedConsultationsAsync.request)),
    switchMap((action) =>
      from(apis.consultations.loadConsultations(action.payload)).pipe(
        map(loadCompletedConsultationsAsync.success),
        catchError((restException: RestException) => of(loadCompletedConsultationsAsync.failure(restException)))
      )
    )
  )

export const postConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.postConsultation(action.payload.requestId, action.payload.command)).pipe(
        map(postConsultationAsync.success),
        catchError((restException: RestException) => of(postConsultationAsync.failure(restException)))
      )
    )
  )

export const putConsultationEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(putConsultationAsync.request)),
    switchMap((action) =>
      from(apis.consultations.putConsultation(action.payload.consultationId, action.payload.command)).pipe(
        map(putConsultationAsync.success),
        catchError((restException: RestException) => of(putConsultationAsync.failure(restException)))
      )
    )
  )

export const postConsultationPaymentKeyEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(postConsultationPaymentKeyAsync.request)),
    switchMap((action) =>
      from(apis.consultations.postConsultationPaymentKey(action.payload)).pipe(
        map(postConsultationPaymentKeyAsync.success),
        catchError((restException: RestException) => of(postConsultationPaymentKeyAsync.failure(restException)))
      )
    )
  )

const consultationsEpic = combineEpics(
  loadConsultationsEpic,
  loadConsultationEpic,
  loadCompletedConsultationsEpic,
  postConsultationEpic,
  putConsultationEpic,
  postConsultationPaymentKeyEpic
)

export default consultationsEpic
