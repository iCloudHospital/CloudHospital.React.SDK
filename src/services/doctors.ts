import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  DoctorAffiliationSearchOption,
  DoctorAffiliationsSearchOption,
  DoctorSearchOption,
  DoctorsSearchOption,
  DoctorsSimpleSearchOption
} from '../models/doctors'
import {
  DoctorsApi,
  DoctorsModel,
  DoctorModel,
  DoctorAffiliationsModel,
  DoctorAffiliationModel,
  DoctorsSimpleModel
} from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Doctors
export function loadDoctors(doctorsSearchOption: DoctorsSearchOption): Promise<DoctorsModel> {
  const {
    hospitalId,
    languageCode,
    returnDefaultValue,
    ids,
    specialtyId,
    consultationEnabled,
    id,
    fullname,
    email,
    gender,
    dateOfBirth,
    created,
    showHidden,
    page,
    limit,
    lastRetrieved
  } = doctorsSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsGet(
      hospitalId,
      languageCode,
      returnDefaultValue,
      ids,
      specialtyId,
      consultationEnabled,
      id,
      fullname,
      email,
      gender,
      dateOfBirth,
      created,
      showHidden,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DoctorsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorsSimple(doctorsSearchOption: DoctorsSimpleSearchOption): Promise<DoctorsSimpleModel> {
  const {
    hospitalId,
    languageCode,
    returnDefaultValue,
    ids,
    specialtyId,
    consultationEnabled,
    id,
    fullname,
    email,
    gender,
    dateOfBirth,
    created,
    showHidden,
    page,
    limit,
    lastRetrieved
  } = doctorsSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsSimpleGet(
      hospitalId,
      languageCode,
      returnDefaultValue,
      ids,
      specialtyId,
      consultationEnabled,
      id,
      fullname,
      email,
      gender,
      dateOfBirth,
      created,
      showHidden,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DoctorsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctor(doctorSearchOption: DoctorSearchOption): Promise<DoctorModel> {
  const { doctorId, slug, languageCode, returnDefaultValue } = doctorSearchOption

  console.log('doctorSearchOption: ', doctorSearchOption)
  if (slug) {
    return new DoctorsApi(configuration, apiRoot, instance)
      .apiV2DoctorsSlugGet(slug, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as DoctorModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new DoctorsApi(configuration, apiRoot, instance)
      .apiV2DoctorsDoctorIdGet(doctorId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as DoctorModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Doctors

// #region Doctor Affiliations
export function loadDoctorAffiliations(
  doctorAffiliationsSearchOption: DoctorAffiliationsSearchOption
): Promise<DoctorAffiliationsModel> {
  const { doctorId, hospitalName, page, limit, lastRetrieved } = doctorAffiliationsSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdAffiliationsGet(doctorId, hospitalName, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as DoctorAffiliationsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorAffiliation(
  doctorAffiliationSearchOption: DoctorAffiliationSearchOption
): Promise<DoctorAffiliationModel> {
  const { doctorId, hospitalId, options } = doctorAffiliationSearchOption
  return new DoctorsApi(configuration, apiRoot, instance)
    .apiV2DoctorsDoctorIdAffiliationsHospitalIdGet(doctorId, hospitalId, options)
    .then((res) => {
      return res.data as DoctorAffiliationModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Doctor Affiliations

export default {
  loadDoctors,
  loadDoctor,
  loadDoctorsSimple,
  loadDoctorAffiliations,
  loadDoctorAffiliation
}
