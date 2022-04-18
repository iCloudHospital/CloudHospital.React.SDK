import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  HospitalsApi,
  HospitalSpecialtiesModel,
  HospitalSpecialtiesSimpleModel,
  HospitalSpecialtyModel
} from 'ch-api-client-typescript2/lib'
import {
  HospitalSpecialtiesSearchOption,
  HospitalSpecialtiesSimpleSearchOption,
  HospitalSpecialtySearchOption
} from '../models/hospitalSpecialties'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region HospitalSpecialties
export function loadHospitalSpecialties(
  hospitalSpecialtiesSearchOption: HospitalSpecialtiesSearchOption
): Promise<HospitalSpecialtiesModel> {
  const {
    hospitalId,
    hospitalName,
    hospitalSlug,
    specialtyId,
    specialtyName,
    specialtyTypeId,
    hospitalSpecialtySlug,
    title,
    marketingType,
    languageCode,
    showHidden,
    returnDefaultValue,
    includeServices,
    page,
    limit,
    lastRetrieved,
    options
  } = hospitalSpecialtiesSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesGet(
      hospitalId,
      hospitalName,
      hospitalSlug,
      specialtyId,
      specialtyName,
      specialtyTypeId,
      hospitalSpecialtySlug,
      title,
      marketingType,
      languageCode,
      showHidden,
      returnDefaultValue,
      includeServices,
      page,
      limit,
      lastRetrieved,
      options
    )
    .then((res) => {
      return res.data as HospitalSpecialtiesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalSpecialty(
  HospitalSpecialtySearchOption: HospitalSpecialtySearchOption
): Promise<HospitalSpecialtyModel> {
  const { hospitalId, specialtyId, languageCode, returnDefaultValue, includeServices } = HospitalSpecialtySearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSpecialtyIdGet(
      hospitalId,
      specialtyId,
      languageCode,
      returnDefaultValue,
      includeServices
    )
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalSpecialtiesSimple(
  hospitalSpecialtiesSimpleSearchOption: HospitalSpecialtiesSimpleSearchOption
): Promise<HospitalSpecialtiesModel> {
  const {
    hospitalId,
    hospitalName,
    hospitalSlug,
    specialtyId,
    specialtyName,
    specialtyTypeId,
    hospitalSpecialtySlug,
    title,
    marketingType,
    languageCode,
    showHidden,
    returnDefaultValue,
    includeServices,
    page,
    limit,
    lastRetrieved,
    options
  } = hospitalSpecialtiesSimpleSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdSpecialtiesSimpleGet(
      hospitalId,
      hospitalName,
      hospitalSlug,
      specialtyId,
      specialtyName,
      specialtyTypeId,
      hospitalSpecialtySlug,
      title,
      marketingType,
      languageCode,
      showHidden,
      returnDefaultValue,
      includeServices,
      page,
      limit,
      lastRetrieved,
      options
    )
    .then((res) => {
      return res.data as HospitalSpecialtiesSimpleModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalSpecialties

export default {
  loadHospitalSpecialties,
  loadHospitalSpecialty,
  loadHospitalSpecialtiesSimple
}
