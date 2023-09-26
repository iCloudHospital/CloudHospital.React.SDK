import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasMediaIdGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { HospitalServiceModel } from 'ch-api-client-typescript2/lib/models/hospital-service-model'
import { HospitalServicesModel } from 'ch-api-client-typescript2/lib/models/hospital-services-model'
import { MediaModel } from 'ch-api-client-typescript2/lib/models/media-model'
import { MediasModel } from 'ch-api-client-typescript2/lib/models/medias-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region HospitalServices
export const loadHospitalServices = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesGetRequest
): Promise<HospitalServicesModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadHospitalService = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdGetRequest
): Promise<HospitalServiceModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalServices

// #region HospitalServiceMedias
export const loadHospitalServiceMedias = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasGetRequest
): Promise<MediasModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadHospitalServiceMedia = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasMediaIdGetRequest
): Promise<MediaModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasMediaIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const hospitalServices = {
  loadHospitalServices,
  loadHospitalService,
  loadHospitalServiceMedias,
  loadHospitalServiceMedia
}

export default hospitalServices
