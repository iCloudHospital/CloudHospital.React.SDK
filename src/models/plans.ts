export interface PlansSearchOption {
  id?: string
  name?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface PlanSearchOption {
  planId: string
  options?: any
}

export interface PlanHospitalsSearchOption {
  planId: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}

export interface PlanHospitalSearchOption {
  planId: string
  hospitalId: string
  options?: any
}
