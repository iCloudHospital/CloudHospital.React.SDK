export interface DoctorSpecialtiesSearchOption {
  doctorId: string
  doctorName?: string
  specialtyId?: string
  specialtyName?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}
