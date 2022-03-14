export interface SpecialtiesSearchOption {
  id?: string
  name?: string
  description?: string
  specialtyTypeId?: string
  hospitalId?: string
  created?: Date
  languageCode?: string
  ids?: Array<string>
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface SpecialtySearchOption {
  specialtyId: string
  slug: string
  languageCode?: string
  returnDefaultValue?: boolean
}
