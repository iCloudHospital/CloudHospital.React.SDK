import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import { appendArticleMediasAsync, loadArticleMediaAsync, loadArticleMediasAsync } from '../actions/articleMedias'
import { setMessage } from '../actions/toastMessages'

// #region ArticleMedias
export const loadArticleMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleMediasAsync.request)),
    switchMap((action) =>
      from(apis.articleMedias.loadArticleMedias(action.payload)).pipe(
        map(loadArticleMediasAsync.success),
        catchError((restException: RestException) => of(loadArticleMediasAsync.failure(restException)))
      )
    )
  )

export const appendArticleMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendArticleMediasAsync.request)),
    switchMap((action) =>
      from(apis.articleMedias.loadArticleMedias(action.payload)).pipe(
        map(appendArticleMediasAsync.success),
        catchError((restException: RestException) => of(appendArticleMediasAsync.failure(restException)))
      )
    )
  )

export const loadArticleMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleMediaAsync.request)),
    switchMap((action) =>
      from(apis.articleMedias.loadArticleMedia(action.payload.articleId, action.payload.mediaId)).pipe(
        map(loadArticleMediaAsync.success),
        catchError((restException: RestException) => of(loadArticleMediaAsync.failure(restException)))
      )
    )
  )
// #endregion ArticleMedias

const articleMediasEpic = combineEpics(loadArticleMediasEpic, appendArticleMediasEpic, loadArticleMediaEpic)

export default articleMediasEpic
