import { MediaType } from 'ch-api-client-typescript2/lib'
export interface HospitalEquipmentsSearchOption {
  hospitalId: string
  id?: string
  name?: string
  hospitalId2?: string
  hospitalName?: string
  description?: string
  created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalEquipmentMediasSearchOption {
  hospitalId: string
  equipmentId: string
  id?: string
  mediaType?: MediaType
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface HospitalEquipmentMediaSearchOption {
  hospitalId: string
  equipmentId: string
  mediaId: string
}
