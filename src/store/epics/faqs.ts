import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  appendFaqsAsync,
  loadFaqAsync,
  loadFaqsAsync,
  resetFaqsState,
  resetFaqState,
} from '../actions/faqs'
import { setMessage } from '../actions/toastMessages'

export const loadFaqsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadFaqsAsync.request)),
    switchMap((action) =>
      from(apis.faqs.loadFaqs(action.payload)).pipe(
        map(loadFaqsAsync.success),
        catchError((restException: RestException) =>
          of(loadFaqsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const appendFaqsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendFaqsAsync.request)),
    switchMap((action) =>
      from(apis.faqs.loadFaqs(action.payload)).pipe(
        map(appendFaqsAsync.success),
        catchError((restException: RestException) =>
          of(appendFaqsAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadFaqEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadFaqAsync.request)),
    switchMap((action) =>
      from(apis.faqs.loadFaq(action.payload)).pipe(
        map(loadFaqAsync.success),
        catchError((restException: RestException) =>
          of(loadFaqAsync.failure(restException)),
        ),
      ),
    ),
  )

const faqsEpic = combineEpics(loadFaqsEpic, appendFaqsEpic, loadFaqEpic)

export default faqsEpic
