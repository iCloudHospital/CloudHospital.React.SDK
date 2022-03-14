export interface DoctorCertificatesSearchOption {
  doctorId: string
  doctorName?: string
  certificateId?: string
  certificate?: string
  activeFrom?: Date
  activeTo?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
}
