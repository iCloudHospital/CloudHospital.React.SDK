import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { MembershipModel, MembershipsModel, MembersModel } from 'ch-api-client-typescript2/lib'
import { MembershipSearchOption, MembershipsSearchOption } from '../../models/memberships'
import { RestException } from '../../models/exceptions'

export const loadMembershipsAsync = createAsyncAction(
  'LOAD_MEMBERSHIPS_REQUEST',
  'LOAD_MEMBERSHIPS_SUCCESS',
  'LOAD_MEMBERSHIPS_FAILURE'
)<MembershipsSearchOption, MembershipsModel, RestException>()

export const loadMembershipAsync = createAsyncAction(
  'LOAD_MEMBERSHIP_REQUEST',
  'LOAD_MEMBERSHIP_SUCCESS',
  'LOAD_MEMBERSHIP_FAILURE'
)<MembershipSearchOption, MembershipModel, RestException>()

export const loadMembershipMembersAsync = createAsyncAction(
  'LOAD_MEMBERSHIP_MEMBERS_REQUEST',
  'LOAD_MEMBERSHIP_MEMBERS_SUCCESS',
  'LOAD_MEMBERSHIP_MEMBERS_FAILURE'
)<MembershipSearchOption, MembersModel, RestException>()

export const resetMembershipsState = createAction('RESET_MEMBERSHIPS_STATE')<undefined>()

export const resetMembershipState = createAction('RESET_MEMBERSHIP_STATE')<undefined>()

export type MembershipsActionTypes =
  | ActionType<typeof loadMembershipsAsync>
  | ActionType<typeof loadMembershipAsync>
  | ActionType<typeof loadMembershipMembersAsync>
  | ActionType<typeof resetMembershipsState>
  | ActionType<typeof resetMembershipState>
