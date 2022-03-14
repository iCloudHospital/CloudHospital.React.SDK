import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  loadArticleSourcesAsync,
  appendArticleSourcesAsync,
  loadArticleSourceAsync,
  resetArticleSourceState
} from '../actions/articleSources'
import { setMessage } from '../actions/toastMessages'

// #region ArticleSources
export const loadArticleSourcesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleSourcesAsync.request)),
    switchMap((action) =>
      from(apis.articleSources.loadArticleSources(action.payload)).pipe(
        map(loadArticleSourcesAsync.success),
        catchError((restException: RestException) => of(loadArticleSourcesAsync.failure(restException)))
      )
    )
  )

export const appendArticleSourcesEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendArticleSourcesAsync.request)),
    switchMap((action) =>
      from(apis.articleSources.loadArticleSources(action.payload)).pipe(
        map(appendArticleSourcesAsync.success),
        catchError((restException: RestException) => of(appendArticleSourcesAsync.failure(restException)))
      )
    )
  )

export const loadArticleSourceEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleSourceAsync.request)),
    switchMap((action) =>
      from(apis.articleSources.loadArticleSource(action.payload.articleId, action.payload.sourceId)).pipe(
        map(loadArticleSourceAsync.success),
        catchError((restException: RestException) => of(loadArticleSourceAsync.failure(restException)))
      )
    )
  )

// #endregion ArticleSources

const articleSourcesEpic = combineEpics(loadArticleSourcesEpic, appendArticleSourcesEpic, loadArticleSourceEpic)

export default articleSourcesEpic
