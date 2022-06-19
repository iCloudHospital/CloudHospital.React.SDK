import { AxiosRequestConfig } from 'axios'
import { Gender, MediaType, ReviewType } from 'ch-api-client-typescript2/lib'
import { object, mixed } from 'yup'

export enum ServiceReviewTab {
  Basic = 'Basic',
  Medias = 'Medias'
}
export interface ServiceReviewsSearchOption {
  hospitalId?: string
  serviceId?: string
  serviceName?: string
  patientId?: string
  patientName?: string
  gender?: Gender
  recommended?: boolean
  rate?: number
  reviewType?: ReviewType
  languageCode?: string
  returnDefaultValue?: boolean
  page?: number
  limit?: number
  lastRetrieved?: Date
  options?: AxiosRequestConfig
}

export interface ServiceReviewSearchOption {
  serviceReviewId: string
}

export const ServiceReviewSchema = object().shape({
  reviewType: mixed<ReviewType>().oneOf(Object.values(ReviewType)).required('Review Type is required')
})

export interface ServiceReviewMediasSearchOption {
  serviceReviewId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}
