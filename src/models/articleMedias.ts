import { MediaType } from 'ch-api-client-typescript2/lib'

export interface ArticleMediasSearchOption {
  articleId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
