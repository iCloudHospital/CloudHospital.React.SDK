import { ArticleStatus, MarketingType } from 'ch-api-client-typescript2/lib'

export enum ArticleTab {
  Basic = 'Basic',
  Sources = 'Sources',
  Contributors = 'Contributors'
}

export interface ArticlesSearchOption {
  id?: string
  title?: string
  description?: string
  status?: ArticleStatus
  marketingType?: MarketingType
  userId?: string
  userName?: string
  hospitalId?: string
  hospitalName?: string
  countryId?: string
  tag?: string
  exceptArticleId?: string
  exceptHospitalId?: string
  contributorId?: string
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface ArticleSearchOption {
  articleId: string
  slug: string
  languageCode?: string
  returnDefaultValue?: boolean
  options?: any
}
