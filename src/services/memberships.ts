import {
  MembershipsApi,
  MembershipsApiApiV2MembershipsGetRequest,
  MembershipsApiApiV2MembershipsMembershipIdGetRequest,
  MembershipsApiApiV2MembershipsMembershipIdMembersGetRequest
} from 'ch-api-client-typescript2/lib/api/memberships-api'
import { MembersModel } from 'ch-api-client-typescript2/lib/models/members-model'
import { MembershipModel } from 'ch-api-client-typescript2/lib/models/membership-model'
import { MembershipsModel } from 'ch-api-client-typescript2/lib/models/memberships-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadMemberships = async (payload: MembershipsApiApiV2MembershipsGetRequest): Promise<MembershipsModel> => {
  return new MembershipsApi(configuration, undefined, instance)
    .apiV2MembershipsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadMembership = async (
  payload: MembershipsApiApiV2MembershipsMembershipIdGetRequest
): Promise<MembershipModel> => {
  return new MembershipsApi(configuration, undefined, instance)
    .apiV2MembershipsMembershipIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadMembershipMembers = async (
  payload: MembershipsApiApiV2MembershipsMembershipIdMembersGetRequest
): Promise<MembersModel> => {
  return new MembershipsApi(configuration, undefined, instance)
    .apiV2MembershipsMembershipIdMembersGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const memberships = {
  loadMemberships,
  loadMembership,
  loadMembershipMembers
}

export default memberships
