import { configuration, instance } from '../utils/HttpClient'
import { RestException } from '../models/exceptions'
import {
  HospitalsApi,
  HospitalServicesModel,
  HospitalServiceModel,
  MediasModel,
  MediaModel
} from 'ch-api-client-typescript2/lib'
import {
  HospitalServicesSearchOption,
  HospitalServiceSearchOption,
  HospitalServiceMediasSearchOption,
  HospitalServiceMediaSearchOption
} from '../models/hospitalServices'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region HospitalServices
export function loadHospitalServices(
  hospitalServicesSearchOption: HospitalServicesSearchOption
): Promise<HospitalServicesModel> {
  const {
    hospitalId,
    specialtyId,
    hospitalName,
    hospitalSlug,
    id,
    name,
    description,
    specialtyName,
    specialtyTypeId,
    specialtyTypeName,
    serviceCategoryId,
    marketingType,
    procedure,
    created,
    languageCode,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = hospitalServicesSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesGet(
      hospitalId,
      specialtyId,
      hospitalName,
      hospitalSlug,
      id,
      name,
      description,
      specialtyName,
      specialtyTypeId,
      specialtyTypeName,
      serviceCategoryId,
      marketingType,
      procedure,
      created,
      languageCode,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalService(
  hospitalServiceSearchOption: HospitalServiceSearchOption
): Promise<HospitalServiceModel> {
  const { hospitalId, specialtyId, serviceId, languageCode } = hospitalServiceSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdGet(
      hospitalId,
      specialtyId,
      serviceId,
      languageCode
    )
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
export function loadHospitalServiceMedias(
  hospitalServiceMediasSearchOption: HospitalServiceMediasSearchOption
): Promise<MediasModel> {
  const { hospitalId, specialtyId, serviceId, id, mediaType, page, limit, lastRetrieved } =
    hospitalServiceMediasSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasGet(
      hospitalId,
      specialtyId,
      serviceId,
      id,
      mediaType,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalServiceMedia(
  hospitalServiceMediaSearchOption: HospitalServiceMediaSearchOption
): Promise<MediaModel> {
  const { hospitalId, specialtyId, serviceId, mediaId } = hospitalServiceMediaSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdMediasMediaIdGet(
      hospitalId,
      specialtyId,
      serviceId,
      mediaId
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadHospitalServices,
  loadHospitalService,

  loadHospitalServiceMedias,
  loadHospitalServiceMedia
}
