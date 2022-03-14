import { SelectOption } from './selectOptions'

export interface AccreditationsSearchOption {
  name?: string
  logo?: string
  country?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface AccreditationSearchOption {
  accreditationId: string
  options?: any
}

export type AccreditationOption = SelectOption & {
  // value: string
  // label: string
  logo: string
}
