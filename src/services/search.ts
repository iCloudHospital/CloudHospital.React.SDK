import { configuration, instance } from '../utils/HttpClient'
import { AutoCompleteOption, SearchCountModel, SearchOption } from '../models/search'
import { RestException } from '../models/exceptions'

import {
  AzureSearchServiceAutocompleteModel,
  DealsModel,
  DoctorsModel,
  HospitalsModel,
  SearchApi,
  SpecialtiesModel,
  SpecialtyTypesModel
} from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function azSearchAutocomplete(
  autoCompleteOption: AutoCompleteOption
): Promise<AzureSearchServiceAutocompleteModel> {
  const { keyword, mode, fuzzy, highlight, size, minimumCoverage } = autoCompleteOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchAutocompleteGet(keyword, mode, fuzzy, highlight, size, minimumCoverage)
    .then((res) => {
      return res.data as AzureSearchServiceAutocompleteModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function searchHospitals(searchOption: SearchOption): Promise<HospitalsModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchHospitalsGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as HospitalsModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function searchDoctors(searchOption: SearchOption): Promise<DoctorsModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchDoctorsGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DoctorsModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function searchDeals(searchOption: SearchOption): Promise<DealsModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchDealsGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as DealsModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function searchSpecialties(searchOption: SearchOption): Promise<SpecialtiesModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchSpecialtiesGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as SpecialtiesModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function searchSpecialtyTypes(searchOption: SearchOption): Promise<SpecialtyTypesModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchSpecialtytypesGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as SpecialtyTypesModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export function getSearchCount(searchOption: SearchOption): Promise<SearchCountModel> {
  const { searchTerm, countOnly, countryId, hospitalId, marketingType, languageCode, page, limit, lastRetrieved } =
    searchOption
  return new SearchApi(configuration, apiRoot, instance)
    .apiV2SearchGetcountGet(
      searchTerm,
      countOnly,
      countryId,
      hospitalId,
      marketingType,
      languageCode,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as SearchCountModel
    })
    .catch((error: any) => {
      const restException = error.message.data as RestException
      throw restException
    })
}

export default {
  searchHospitals,
  searchDoctors,
  searchDeals,
  searchSpecialties,
  searchSpecialtyTypes,
  azSearchAutocomplete,
  getSearchCount
}
