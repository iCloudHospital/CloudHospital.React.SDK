export interface AboutUsPagesSearchOption {
  hospitalId?: string
  hospitalName?: string
  hospitalSlug?: string
  overviewTitle?: string
  normalizedOverviewTitle?: string
  overview?: string
  content?: string
  customStyle?: string
  background?: string
  backgroundThumbnail?: string
  languageCode?: string
  returnDefaultValue?: boolean
  confirmed?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface AboutUsPageSearchOption {
  hospitalId: string
  languageCode?: string
  returnDefaultValue?: boolean
  slug?: string
}
