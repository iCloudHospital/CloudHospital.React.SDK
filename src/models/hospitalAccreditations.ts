export interface HospitalAccreditationsSearchOption {
  hospitalId: string
  hospitalName?: string
  accreditationId?: string
  accreditationName?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}
