import { BookingStatus, Gender } from 'ch-api-client-typescript2/lib'

export enum BookingTab {
  Basic = 'Basic',
  History = 'History'
}
export interface BookingsSearchOption {
  searchString?: string
  isOpen?: boolean
  isCompleted?: boolean
  status?: BookingStatus
  dealPackageId?: string
  hospitalId?: string
  page?: number
  limit?: number
  lastRetrieved?: Date
}
export interface BookingSearchOption {
  bookingId: string
  options?: any
}

export interface BookingValues {
  date: Date | null
}

export interface ConsultationValues {
  specialtyId: string | undefined
  specialtyName: string | undefined
  // doctorId: string | undefined
  // doctorName: string | undefined
  timeZone?: string | null
  approximateDateStart: Date | null
  approximateDateEnd: Date | null
  date: Date | null
  timeRange: string | undefined
  language: string | undefined
  comment: string | undefined
}

export interface ClientValues {
  person: number
  firstName: string | undefined
  lastName: string | undefined
  email: string | undefined
  phone: string | undefined | null
  dateOfBirth: Date | null
  gender: Gender | undefined | null
}

export interface ConfirmBookingValues {
  bookingId: string
  date: Date | null
}
