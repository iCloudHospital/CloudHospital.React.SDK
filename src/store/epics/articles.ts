import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  loadArticlesAsync,
  appendArticlesAsync,
  loadArticleAsync,
  loadTranslatedArticleAsync,
  resetArticleState,
} from '../actions/articles'
import { setMessage } from '../actions/toastMessages'

// #region Articles
export const loadArticlesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticlesAsync.request)),
    switchMap((action) =>
      from(apis.articles.loadArticles(action.payload)).pipe(
        map(loadArticlesAsync.success),
        catchError((restException: RestException) =>
          of(loadArticlesAsync.failure(restException)),
        ),
      ),
    ),
  )

export const appendArticlesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendArticlesAsync.request)),
    switchMap((action) =>
      from(apis.articles.loadArticles(action.payload)).pipe(
        map(appendArticlesAsync.success),
        catchError((restException: RestException) =>
          of(appendArticlesAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadArticleEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleAsync.request)),
    switchMap((action) =>
      from(apis.articles.loadArticle(action.payload)).pipe(
        map(loadArticleAsync.success),
        catchError((restException: RestException) =>
          of(loadArticleAsync.failure(restException)),
        ),
      ),
    ),
  )

export const loadTranslatedArticleEpic: RootEpic = (
  action$,
  state$,
  { apis },
) =>
  action$.pipe(
    filter(isActionOf(loadTranslatedArticleAsync.request)),
    switchMap((action) =>
      from(apis.articles.loadArticle(action.payload)).pipe(
        map(loadTranslatedArticleAsync.success),
        catchError((restException: RestException) =>
          of(loadTranslatedArticleAsync.failure(restException)),
        ),
      ),
    ),
  )
// #endregion Articles

const articlesEpic = combineEpics(
  loadArticlesEpic,
  appendArticlesEpic,
  loadArticleEpic,
  loadTranslatedArticleEpic,
)

export default articlesEpic
