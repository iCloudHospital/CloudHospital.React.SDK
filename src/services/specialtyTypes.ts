import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  SpecialtyTypesApi,
  SpecialtyTypesModel,
  SpecialtyTypeModel,
  MediaModel,
  MediasModel
} from 'ch-api-client-typescript2/lib'
import {
  SpecialtyTypeMediasSearchOption,
  SpecialtyTypeSearchOption,
  SpecialtyTypesSearchOption
} from '../models/specialtyTypes'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region SpecialtyTypes
export function loadSpecialtyTypes(
  specialtyTypesSearchOption: SpecialtyTypesSearchOption
): Promise<SpecialtyTypesModel> {
  const {
    id,
    name,
    description,
    marketingType,
    hospitalId,
    created,
    languageCode,
    ids,
    specialtyTypeCategoryId,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = specialtyTypesSearchOption
  return new SpecialtyTypesApi(undefined, apiRoot, instance)
    .apiV2SpecialtytypesGet(
      id,
      name,
      description,
      marketingType,
      hospitalId,
      created,
      languageCode,
      ids,
      specialtyTypeCategoryId,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as SpecialtyTypesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadSpecialtyType(specialtyTypeSearchOption: SpecialtyTypeSearchOption): Promise<SpecialtyTypeModel> {
  const { specialtyTypeId, slug, languageCode, returnDefaultValue } = specialtyTypeSearchOption
  if (slug) {
    return new SpecialtyTypesApi(undefined, apiRoot, instance)
      .apiV2SpecialtytypesSlugGet(slug, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as SpecialtyTypeModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new SpecialtyTypesApi(undefined, apiRoot, instance)
      .apiV2SpecialtytypesSpecialtyTypeIdGet(specialtyTypeId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as SpecialtyTypeModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion SpecialtyTypes

// #region SpecialtyTypeMedias
export function getSpecialtyTypeMedias(
  specialtyTypeMediasSearchOption: SpecialtyTypeMediasSearchOption
): Promise<MediasModel> {
  const { specialtyTypeId, id, mediaType, page, limit, lastRetrieved } = specialtyTypeMediasSearchOption
  return new SpecialtyTypesApi(undefined, apiRoot, instance)
    .apiV2SpecialtytypesSpecialtyTypeIdMediasGet(specialtyTypeId, id, mediaType, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function getSpecialtyTypeMedia(specialtyTypeId: string, mediaId: string): Promise<MediaModel> {
  return new SpecialtyTypesApi(undefined, apiRoot, instance)
    .apiV2SpecialtytypesSpecialtyTypeIdMediasMediaIdGet(specialtyTypeId, mediaId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion SpecialtyTypeMedias

export default {
  loadSpecialtyTypes,
  loadSpecialtyType,

  getSpecialtyTypeMedias,
  getSpecialtyTypeMedia
}
