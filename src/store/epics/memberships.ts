import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootEpic } from 'CHTypes'
import { loadMembershipAsync, loadMembershipMembersAsync, loadMembershipsAsync } from '../actions/memberships'
import { RestException } from '../../models/exceptions'

export const loadMembershipsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadMembershipsAsync.request)),
    switchMap((action) =>
      from(apis.memberships.loadMemberships(action.payload)).pipe(
        map(loadMembershipsAsync.success),
        catchError((restException: RestException) => of(loadMembershipsAsync.failure(restException)))
      )
    )
  )

export const loadMembershipEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadMembershipAsync.request)),
    switchMap((action) =>
      from(apis.memberships.loadMembership(action.payload)).pipe(
        map(loadMembershipAsync.success),
        catchError((restException: RestException) => of(loadMembershipAsync.failure(restException)))
      )
    )
  )

export const loadMembershipMembersEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadMembershipMembersAsync.request)),
    switchMap((action) =>
      from(apis.memberships.loadMembershipMembers(action.payload)).pipe(
        map(loadMembershipMembersAsync.success),
        catchError((restException: RestException) => of(loadMembershipMembersAsync.failure(restException)))
      )
    )
  )

const membershipsEpic = combineEpics(loadMembershipsEpic, loadMembershipEpic, loadMembershipMembersEpic)

export default membershipsEpic
