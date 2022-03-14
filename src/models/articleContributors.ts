import { ContributionType } from 'ch-api-client-typescript2/lib'

export interface ArticleContributorsSearchOption {
  articleId: string
  articleName?: string
  contributorId?: string
  contributorName?: string
  email?: string
  description?: string
  website?: string
  contributionType?: ContributionType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
