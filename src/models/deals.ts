import { MarketingType } from 'ch-api-client-typescript2/lib'

export enum DealTab {
  Basic = 'Basic',
  Packages = 'Packages',
  Services = 'Services'
}
export interface DealsSearchOption {
  id?: string
  name?: string
  marketingType?: MarketingType
  countryId?: string
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyTypeId?: string
  ServiceId?: string
  exceptHospitalId?: string
  exceptDealId?: string
  ids?: Array<string>
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DealsSimpleSearchOption {
  id?: string
  name?: string
  marketingType?: MarketingType
  countryId?: string
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyTypeId?: string
  ServiceId?: string
  exceptHospitalId?: string
  exceptDealId?: string
  ids?: Array<string>
  languageCode?: string
  showHidden?: boolean
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DealSearchOption {
  dealId: string
  slug: string
  languageCode?: string
  returnDefaultValue?: boolean
  options?: any
}

export interface DealPackagesSearchOption {
  dealId: string
  relatedDealPackageId?: string
  dealName?: string
  name?: string
  countryId?: string
  hospitalId?: string
  hospitalName?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DealPackageSearchOption {
  dealId: string
  packageId: string
  options?: any
}
export interface DealServicesSearchOption {
  dealId: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface DealServiceSearchOption {
  dealId: string
  serviceId: string
  options?: any
}
