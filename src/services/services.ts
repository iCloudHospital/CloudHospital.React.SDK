import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { HospitalServiceModel, HospitalServicesModel, ServicesApi } from 'ch-api-client-typescript2/lib'
import {} from '../models/hospitals'
import { ServiceSearchOption, ServicesSearchOption } from '../models/services'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Services
export function loadServices(servicesSearchOption: ServicesSearchOption): Promise<HospitalServicesModel> {
  const {
    hospitalId,
    hospitalName,
    hospitalSlug,
    id,
    name,
    description,
    specialtyId,
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
  } = servicesSearchOption
  return new ServicesApi(undefined, apiRoot, instance)
    .apiV2ServicesGet(
      hospitalId,
      hospitalName,
      hospitalSlug,
      id,
      name,
      description,
      specialtyId,
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
export function loadService(serviceSearchOption: ServiceSearchOption): Promise<HospitalServiceModel> {
  const { serviceId, languageCode, slug } = serviceSearchOption
  if (slug) {
    return new ServicesApi(undefined, apiRoot, instance)
      .apiV2ServicesSlugGet(slug, languageCode)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new ServicesApi(undefined, apiRoot, instance)
      .apiV2ServicesServiceIdGet(serviceId, languageCode)
      .then((res) => {
        return res.data
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Services

export default {
  loadServices,
  loadService
}
