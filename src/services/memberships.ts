import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { MembershipModel, MembershipsApi, MembershipsModel, MembersModel } from 'ch-api-client-typescript2/lib'
import { MembershipSearchOption, MembershipsSearchOption } from '../models/memberships'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export const loadMemberships = (membershipsSearchOption: MembershipsSearchOption): Promise<MembershipsModel> => {
  const { id, planId, planName, ownerId, ownerName, isActive, page, limit, lastRetrieved } = membershipsSearchOption
  return new MembershipsApi(undefined, apiRoot, instance)
    .apiV2MembershipsGet(id, planId, planName, ownerId, ownerName, isActive, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadMembership = (membershipSearchOption: MembershipSearchOption): Promise<MembershipModel> => {
  const { membershipId } = membershipSearchOption
  return new MembershipsApi(undefined, apiRoot, instance)
    .apiV2MembershipsMembershipIdGet(membershipId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadMembershipMembers = (membershipSearchOption: MembershipSearchOption): Promise<MembersModel> => {
  const { membershipId } = membershipSearchOption
  return new MembershipsApi(undefined, apiRoot, instance)
    .apiV2MembershipsMembershipIdMembersGet(membershipId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadMemberships,
  loadMembership,
  loadMembershipMembers
}
