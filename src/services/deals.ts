import { configuration, instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import {
  DealPackageSearchOption,
  DealPackagesSearchOption,
  DealSearchOption,
  DealServiceSearchOption,
  DealServicesSearchOption,
  DealsSearchOption,
  DealsSimpleSearchOption
} from '../models/deals'
import {
  DealsApi,
  DealsModel,
  DealModel,
  DealPackagesModel,
  DealPackageModel,
  DealServicesModel,
  DealServiceModel,
  DealsSimpleModel
} from 'ch-api-client-typescript2/lib'
import { log } from '../utils/log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
// #region Deals
export function loadDeals(dealsSearchOption: DealsSearchOption): Promise<DealsModel> {
  const {
    id,
    name,
    marketingType,
    countryId,
    hospitalId,
    hospitalName,
    specialtyId,
    specialtyTypeId,
    ServiceId,
    exceptHospitalId,
    exceptDealId,
    ids,
    languageCode,
    showHidden,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = dealsSearchOption
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsGet(
      id,
      name,
      marketingType,
      countryId,
      hospitalId,
      hospitalName,
      specialtyId,
      specialtyTypeId,
      ServiceId,
      exceptHospitalId,
      exceptDealId,
      ids,
      languageCode,
      showHidden,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DealsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDealsSimple(dealsSimpleSearchOption: DealsSimpleSearchOption): Promise<DealsSimpleModel> {
  const {
    id,
    name,
    marketingType,
    countryId,
    hospitalId,
    hospitalName,
    specialtyId,
    specialtyTypeId,
    ServiceId,
    exceptHospitalId,
    exceptDealId,
    ids,
    languageCode,
    showHidden,
    returnDefaultValue,
    page,
    limit,
    lastRetrieved
  } = dealsSimpleSearchOption
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsSimpleGet(
      id,
      name,
      marketingType,
      countryId,
      hospitalId,
      hospitalName,
      specialtyId,
      specialtyTypeId,
      ServiceId,
      exceptHospitalId,
      exceptDealId,
      ids,
      languageCode,
      showHidden,
      returnDefaultValue,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DealsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDeal(dealSearchOption: DealSearchOption): Promise<DealModel> {
  const { dealId, slug, languageCode, returnDefaultValue, options } = dealSearchOption
  if (slug) {
    return new DealsApi(configuration, apiRoot, instance)
      .apiV2DealsSlugGet(slug, languageCode, returnDefaultValue, options)
      .then((res) => {
        return res.data as DealModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new DealsApi(configuration, apiRoot, instance)
      .apiV2DealsDealIdGet(dealId, languageCode, returnDefaultValue, options)
      .then((res) => {
        return res.data as DealModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}
// #endregion Deals

// #region Deal Packages
export function loadDealPackages(dealPackagesSearchOption: DealPackagesSearchOption): Promise<DealPackagesModel> {
  const {
    dealId,
    relatedDealPackageId,
    dealName,
    name,
    countryId,
    hospitalId,
    hospitalName,
    page,
    limit,
    lastRetrieved
  } = dealPackagesSearchOption
  // log('dealId: ', dealId)
  // log('relatedDealPackageId: ', relatedDealPackageId)
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsDealIdPackagesGet(
      dealId,
      relatedDealPackageId,
      dealName,
      name,
      countryId,
      hospitalId,
      hospitalName,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DealPackagesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDealPackage(dealPackageSearchOption: DealPackageSearchOption): Promise<DealPackageModel> {
  const { dealId, packageId, options } = dealPackageSearchOption
  log('dealId: ', dealId)
  log('packageId: ', packageId)
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsDealIdPackagesPackageIdGet(dealId, packageId, options)
    .then((res) => {
      return res.data as DealPackageModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Deal Packages

// #region Deal Services
export function loadDealServices(dealServicesSearchOption: DealServicesSearchOption): Promise<DealServicesModel> {
  const { dealId, page, limit, lastRetrieved } = dealServicesSearchOption
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsDealIdServicesGet(dealId, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as DealServicesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDealService(dealServiceSearchOption: DealServiceSearchOption): Promise<DealServiceModel> {
  const { dealId, serviceId, options } = dealServiceSearchOption
  return new DealsApi(configuration, apiRoot, instance)
    .apiV2DealsDealIdServicesServiceIdGet(dealId, serviceId, options)
    .then((res) => {
      return res.data as DealServiceModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Deal Services

export default {
  loadDeals,
  loadDeal,

  loadDealsSimple,

  loadDealPackages,
  loadDealPackage,

  loadDealServices,
  loadDealService
}
