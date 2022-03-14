import { configuration, instance } from '../utils/interceptor'
import { RestException } from '../models/exceptions'
import { SpecialtiesApi, SpecialtiesModel, SpecialtyModel } from 'ch-api-client-typescript2/lib'
import { SpecialtiesSearchOption, SpecialtySearchOption } from '../models/specialties'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Specialties
export function loadSpecialties(specialtiesSearchOption: SpecialtiesSearchOption): Promise<SpecialtiesModel> {
  const {
    id,
    name,
    description,
    specialtyTypeId,
    hospitalId,
    created,
    languageCode,
    ids,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = specialtiesSearchOption
  return new SpecialtiesApi(configuration, apiRoot, instance)
    .apiV2SpecialtiesGet(
      id,
      name,
      description,
      specialtyTypeId,
      hospitalId,
      created,
      languageCode,
      ids,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as SpecialtiesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadSpecialty(specialtySearchOption: SpecialtySearchOption): Promise<SpecialtyModel> {
  const { specialtyId, slug, languageCode, returnDefaultValue } = specialtySearchOption
  if (slug) {
    return new SpecialtiesApi(configuration, apiRoot, instance)
      .apiV2SpecialtiesSlugGet(slug, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as SpecialtyModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new SpecialtiesApi(configuration, apiRoot, instance)
      .apiV2SpecialtiesSpecialtyIdGet(specialtyId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as SpecialtyModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Specialties
export default {
  loadSpecialties,
  loadSpecialty
}
