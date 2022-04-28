import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { RestException } from '../../models/exceptions'
import {
  loadArticleContributorsAsync,
  appendArticleContributorsAsync,
  loadArticleContributorAsync
} from '../actions/articleContributors'

// #region ArticleContributors
export const loadArticleContributorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleContributorsAsync.request)),
    switchMap((action) =>
      from(apis.articleContributors.loadArticleContributors(action.payload)).pipe(
        map(loadArticleContributorsAsync.success),
        catchError((restException: RestException) => of(loadArticleContributorsAsync.failure(restException)))
      )
    )
  )

export const appendArticleContributorsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendArticleContributorsAsync.request)),
    switchMap((action) =>
      from(apis.articleContributors.loadArticleContributors(action.payload)).pipe(
        map(appendArticleContributorsAsync.success),
        catchError((restException: RestException) => of(appendArticleContributorsAsync.failure(restException)))
      )
    )
  )

export const loadArticleContributorEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadArticleContributorAsync.request)),
    switchMap((action) =>
      from(
        apis.articleContributors.loadArticleContributor(action.payload.articleId, action.payload.contributorId)
      ).pipe(
        map(loadArticleContributorAsync.success),
        catchError((restException: RestException) => of(loadArticleContributorAsync.failure(restException)))
      )
    )
  )
// #endregion ArticleContributors

const articleContributorsEpic = combineEpics(loadArticleContributorsEpic, appendArticleContributorsEpic)

export default articleContributorsEpic
