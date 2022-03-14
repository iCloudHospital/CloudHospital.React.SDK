export interface FaqCategoriesSearchOption {
  id?: string
  parentId?: string
  name?: string
  description?: string
  languageCode?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface FaqCategorySearchOption {
  faqCategoryId: string
  slug: string
  languageCode?: string
}
