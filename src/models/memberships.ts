export interface MembershipsSearchOption {
  id?: string
  planId?: string
  planName?: string
  ownerId?: string
  ownerName?: string
  isActive?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface MembershipSearchOption {
  membershipId: string
}
