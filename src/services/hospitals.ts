import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  HospitalsApi,
  HospitalsModel,
  HospitalModel,
  MediasModel,
  MediaModel,
  HospitalsSimpleModel
} from 'ch-api-client-typescript2/lib'
import {
  HospitalSearchOption,
  HospitalsSearchOption,
  HospitalMediasSearchOption,
  HospitalsSimpleSearchOption
} from '../models/hospitals'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Hospitals
export function loadHospitals(hospitalSearchOption: HospitalsSearchOption): Promise<HospitalsModel> {
  const {
    hospitalId,
    name,
    countryId,
    created,
    marketingType,
    specialtyTypeId,
    specialtyId,
    serviceId,
    exceptHospitalId,
    showHidden,
    languageCode,
    ids,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = hospitalSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsGet(
      hospitalId,
      name,
      countryId,
      created,
      marketingType,
      specialtyTypeId,
      specialtyId,
      serviceId,
      exceptHospitalId,
      showHidden,
      languageCode,
      ids,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as HospitalsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalsSimple(
  hospitalsSimpleSearchOption: HospitalsSimpleSearchOption
): Promise<HospitalsSimpleModel> {
  const {
    hospitalId,
    name,
    countryId,
    created,
    marketingType,
    specialtyTypeId,
    specialtyId,
    serviceId,
    exceptHospitalId,
    showHidden,
    languageCode,
    ids,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = hospitalsSimpleSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsSimpleGet(
      hospitalId,
      name,
      countryId,
      created,
      marketingType,
      specialtyTypeId,
      specialtyId,
      serviceId,
      exceptHospitalId,
      showHidden,
      languageCode,
      ids,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as HospitalsSimpleModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospital(hospitalDetailSearchOption: HospitalSearchOption): Promise<HospitalModel> {
  const { hospitalId, slug, languageCode, returnDefaultValue } = hospitalDetailSearchOption
  if (slug) {
    return new HospitalsApi(configuration, apiRoot, instance)
      .apiV2HospitalsSlugGet(slug, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as HospitalModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new HospitalsApi(configuration, apiRoot, instance)
      .apiV2HospitalsHospitalIdGet(hospitalId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as HospitalModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Hospitals

// #region HospitalMedias
export function loadHospitalMedias(hospitalMediasSearchOption: HospitalMediasSearchOption): Promise<MediasModel> {
  const { hospitalId, id, mediaType, page, limit, lastRetrieved } = hospitalMediasSearchOption
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdMediasGet(hospitalId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadHospitalMedia(hospitalId: string, mediaId: string): Promise<MediaModel> {
  return new HospitalsApi(configuration, apiRoot, instance)
    .apiV2HospitalsHospitalIdMediasMediaIdGet(hospitalId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion HospitalMedias

export default {
  loadHospitals,
  loadHospitalsSimple,
  loadHospital,

  loadHospitalMedias,
  loadHospitalMedia
}
