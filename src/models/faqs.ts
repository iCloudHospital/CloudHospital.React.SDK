import { MediaType } from 'ch-api-client-typescript2/lib/api'

export interface FaqsSearchOption {
  id?: string
  title?: string
  content?: string
  categoryId?: string
  hospitalId?: string
  hospitalName?: string
  languageCode?: string
  showHidden?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface FaqSearchOption {
  faqId: string
  slug: string
  languageCode?: string
}

export interface FaqMediasSearchOption {
  faqId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
