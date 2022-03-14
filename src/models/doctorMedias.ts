import { MediaType } from 'ch-api-client-typescript2/lib'

export interface DoctorMediasSearchOption {
  doctorId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface PostDoctorMediaValues {
  doctorId: string
  mediaId: string
  mediaType: MediaType
  url: string | null
  thumbnailUrl: string | null
  description: string | null
  order: number
}
