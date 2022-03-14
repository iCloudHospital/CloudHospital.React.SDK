import { SnsType } from 'ch-api-client-typescript2/lib'

export interface ContributorsSearchOption {
  id?: string
  name?: string
  email?: string
  description?: string
  website?: string
  languageCode?: string
  hospitalId?: string
  interviewerOnly?: boolean
  showHidden?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
  authorized?: boolean
}

export interface ContributorSearchOption {
  contributorId: string
  slug: string
  languageCode?: string
}

export interface ContributorSnsHandlesSearchOption {
  contributorId: string
  id?: string
  snsType?: SnsType | undefined
  handle?: string | undefined
  contributorId2?: string
  page?: number
  limit?: number
  lastRetrieved?: Date | undefined
  current?: boolean | undefined
  languageCode?: string | undefined
}

export interface ContributorSnsHnadleSearchOption {
  contributorId: string
  handleId: string
  option?: any
}
