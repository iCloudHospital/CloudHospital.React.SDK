import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  HospitalsModel,
  DoctorsModel,
  DealsModel,
  SpecialtiesModel,
  AzureSearchServiceAutocompleteModel,
} from 'ch-api-client-typescript2/lib'
import { AutoCompleteOption, SearchCountModel, SearchOption } from '../../models/search'
import { SpecialtiesSearchOption } from '../../models/specialties'

export const searchHospitalsAsync = createAsyncAction(
  'SEARCH_HOSPITALS_REQUEST',
  'SEARCH_HOSPITALS_SUCCESS',
  'SEARCH_HOSPITALS_FAILURE',
)<SearchOption, HospitalsModel, RestException>()

export const searchDoctorsAsync = createAsyncAction(
  'SEARCH_DOCTORS_REQUEST',
  'SEARCH_DOCTORS_SUCCESS',
  'SEARCH_DOCTORS_FAILURE',
)<SearchOption, DoctorsModel, RestException>()

export const searchDealsAsync = createAsyncAction(
  'SEARCH_DEALS_REQUEST',
  'SEARCH_DEALS_SUCCESS',
  'SEARCH_DEALS_FAILURE',
)<SearchOption, DealsModel, RestException>()

export const searchSpecialtiesAsync = createAsyncAction(
  'SEARCH_SPECIALTIES_REQUEST',
  'SEARCH_SPECIALTIES_SUCCESS',
  'SearchOption',
)<SpecialtiesSearchOption, SpecialtiesModel, RestException>()

export const searchSpecialtyTypesAsync = createAsyncAction(
  'SEARCH_SPECIALITYTYPES_REQUEST',
  'SEARCH_SPECIALITYTYPES_SUCCESS',
  'SEARCH_SPECIALITYTYPES_FAILURE',
)<SearchOption, SpecialtiesModel, RestException>()

export const getSearchCountAsync = createAsyncAction(
  'SEARCH_COUNT_REQUEST',
  'SEARCH_COUNT_SUCCESS',
  'SEARCH_COUNT_FAILURE',
)<SearchOption, SearchCountModel, RestException>()

export const azSearchAutocompleteAsync = createAsyncAction(
  'AZSEARCH_AUTOCOMPLETE_REQUEST',
  'AZSEARCH_AUTOCOMPLETE_SUCCESS',
  'AZSEARCH_AUTOCOMPLETE_FAILURE'
)<AutoCompleteOption, AzureSearchServiceAutocompleteModel, RestException>()

export const resetAzSearchAutoCompleteAsync = createAction('RESET_AZSEARCH_AUTOCOMPLETE')<undefined>()

export type AzSearchActionTypes =
  | ActionType<typeof searchHospitalsAsync>
  | ActionType<typeof searchDoctorsAsync>
  | ActionType<typeof searchDealsAsync>
  | ActionType<typeof searchSpecialtiesAsync>
  | ActionType<typeof searchSpecialtyTypesAsync>
  | ActionType<typeof azSearchAutocompleteAsync>
  | ActionType<typeof getSearchCountAsync>
  | ActionType<typeof resetAzSearchAutoCompleteAsync>

  