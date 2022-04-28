import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import { loadFaqCategoriesAsync, loadFaqCategoryAsync } from '../actions/faqCategories'

export const loadFaqCategoriesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadFaqCategoriesAsync.request)),
    switchMap((action) =>
      from(apis.faqCategories.loadFaqCategories(action.payload)).pipe(
        map(loadFaqCategoriesAsync.success),
        catchError((restException: RestException) => of(loadFaqCategoriesAsync.failure(restException)))
      )
    )
  )

export const loadFaqCategoryEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadFaqCategoryAsync.request)),
    switchMap((action) =>
      from(apis.faqCategories.loadFaqCategory(action.payload)).pipe(
        map(loadFaqCategoryAsync.success),
        catchError((restException: RestException) => of(loadFaqCategoryAsync.failure(restException)))
      )
    )
  )

const faqCategoriesEpic = combineEpics(loadFaqCategoriesEpic, loadFaqCategoryEpic)

export default faqCategoriesEpic
