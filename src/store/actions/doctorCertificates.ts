import { DoctorCertificatesModel, DoctorCertificateModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { DoctorCertificatesSearchOption } from '../../models/doctorCertificates'
import { RestException } from '../../models/exceptions'

export const loadDoctorCertificatesAsync = createAsyncAction(
  'LOAD_DOCTOR_CERTIFICATES_REQUEST',
  'LOAD_DOCTOR_CERTIFICATES_SUCCESS',
  'LOAD_DOCTOR_CERTIFICATES_FAILURE'
)<DoctorCertificatesSearchOption, DoctorCertificatesModel, RestException>()

export const loadDoctorCertificateAsync = createAsyncAction(
  'LOAD_DOCTOR_CERTIFICATE_REQUEST',
  'LOAD_DOCTOR_CERTIFICATE_SUCCESS',
  'LOAD_DOCTOR_CERTIFICATE_FAILURE'
)<{ doctorId: string; certificateId: string }, DoctorCertificateModel, RestException>()

export const resetDoctorCertificates = createAction('RESET_DOCTOR_CERTIFICATES')<undefined>()

export const resetDoctorCertificate = createAction('RESET_DOCTOR_CERTIFICATE')<undefined>()

export type DoctorCertificatesActionTypes =
  | ActionType<typeof loadDoctorCertificatesAsync>
  | ActionType<typeof loadDoctorCertificateAsync>
  | ActionType<typeof resetDoctorCertificates>
  | ActionType<typeof resetDoctorCertificate>
