import { MembershipModel, MembershipsModel, MembersModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  MembershipsActionTypes,
  loadMembershipAsync,
  loadMembershipsAsync,
  loadMembershipMembersAsync
} from '../actions/memberships'

export const isLoadingMemberships = createReducer<boolean, MembershipsActionTypes>(false)
  .handleAction([loadMembershipsAsync.request], (_, __) => true)
  .handleAction([loadMembershipsAsync.success, loadMembershipsAsync.failure], (_, __) => false)

export const loadMembershipsErrors = createReducer<RestException | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipsAsync.request, loadMembershipsAsync.success], (state, action) => null)
  .handleAction([loadMembershipsAsync.failure], (state, action) => action.payload)

export const memberships = createReducer<MembershipsModel | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipsAsync.request, loadMembershipsAsync.failure], (_, __) => null)
  .handleAction([loadMembershipsAsync.success], (state, action) => action.payload)

export const isLoadingMembership = createReducer<boolean, MembershipsActionTypes>(false)
  .handleAction([loadMembershipAsync.request], (_, __) => true)
  .handleAction([loadMembershipAsync.success, loadMembershipAsync.failure], (_, __) => false)

export const loadMembershipErrors = createReducer<RestException | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipAsync.request, loadMembershipAsync.success], (state, action) => null)
  .handleAction([loadMembershipAsync.failure], (state, action) => action.payload)

export const membership = createReducer<MembershipModel | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipAsync.request, loadMembershipAsync.failure], (_, __) => null)
  .handleAction([loadMembershipAsync.success], (state, action) => action.payload)

export const isLoadingMembershipMembers = createReducer<boolean, MembershipsActionTypes>(false)
  .handleAction([loadMembershipMembersAsync.request], (_, __) => true)
  .handleAction([loadMembershipMembersAsync.success, loadMembershipMembersAsync.failure], (_, __) => false)

export const loadMembershipMembersErrors = createReducer<RestException | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipMembersAsync.request, loadMembershipMembersAsync.success], (state, action) => null)
  .handleAction([loadMembershipMembersAsync.failure], (state, action) => action.payload)

export const membershipMembers = createReducer<MembersModel | null, MembershipsActionTypes>(null)
  .handleAction([loadMembershipMembersAsync.request, loadMembershipMembersAsync.failure], (_, __) => null)
  .handleAction([loadMembershipMembersAsync.success], (state, action) => action.payload)

const membershipsState = combineReducers({
  isLoadingMemberships,
  loadMembershipsErrors,
  memberships,

  isLoadingMembership,
  loadMembershipErrors,
  membership,

  isLoadingMembershipMembers,
  loadMembershipMembersErrors,
  membershipMembers
})

export type MembershipState = ReturnType<typeof membershipsState>

export default membershipsState
