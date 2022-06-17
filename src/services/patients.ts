import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { PatientsApi, PatientModel, CreatePatientCommand, UpdatePatientCommand } from 'ch-api-client-typescript2/lib'
import { PatientSearchOption } from '../models/patients'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadPatient(patientSearchOption: PatientSearchOption): Promise<PatientModel> {
  const { patientId, options } = patientSearchOption
  return new PatientsApi(undefined, apiRoot, instance)
    .apiV2PatientsPatientIdGet(patientId, options)
    .then((res) => {
      return res.data as PatientModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function postPatient(createPatientCommand?: CreatePatientCommand): Promise<PatientModel> {
  return new PatientsApi(undefined, apiRoot, instance)
    .apiV2PatientsPost(createPatientCommand)
    .then((res) => {
      return res.data as PatientModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function putPatient(patientId: string, updatePatientCommand?: UpdatePatientCommand): Promise<PatientModel> {
  return new PatientsApi(undefined, apiRoot, instance)
    .apiV2PatientsPatientIdPut(patientId, updatePatientCommand)
    .then((res) => {
      return res.data as PatientModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function deletePatient(patientId: string): Promise<boolean> {
  return new PatientsApi(undefined, apiRoot, instance)
    .apiV2PatientsPatientIdDelete(patientId)
    .then((res) => {
      return res.data as boolean
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadPatient,
  postPatient,
  putPatient,
  deletePatient
}
