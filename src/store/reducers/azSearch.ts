import {
  AzureSearchModel,
  HospitalsModel,
  DoctorsModel,
  DealsModel,
  SpecialtiesModel,
  AzureSearchServiceSuggestModel,
  AzureSearchServiceAutocompleteModel
} from 'ch-api-client-typescript2/lib'

import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { SearchCountModel } from '../../models/search'
import actions from '../actions'

import { AzSearchActionTypes, azSearchAutocompleteAsync, getSearchCountAsync, resetAzSearchAutoCompleteAsync } from '../actions/azSearch'

export const isLoadingautoCompleteValues = createReducer<boolean, AzSearchActionTypes>(false as boolean)
  .handleAction([azSearchAutocompleteAsync.request], (state, action) => true)
  .handleAction([azSearchAutocompleteAsync.success, azSearchAutocompleteAsync.failure, resetAzSearchAutoCompleteAsync], (state, action) => false)

export const autoCompleteValuesError = createReducer<RestException | null, AzSearchActionTypes>(null)
  .handleAction([azSearchAutocompleteAsync.request, azSearchAutocompleteAsync.success], (state, action) => null)
  .handleAction([azSearchAutocompleteAsync.failure], (state, action) => action.payload)

export const autoCompleteValues = createReducer<AzureSearchServiceAutocompleteModel | null, AzSearchActionTypes>(null)
  .handleAction([azSearchAutocompleteAsync.success], (state, action) => action.payload)
  .handleAction(
    [
      azSearchAutocompleteAsync.failure, 
      resetAzSearchAutoCompleteAsync
    ], (state, action) => null)

export const SearchCountValues = createReducer<SearchCountModel | null, AzSearchActionTypes>(null)
.handleAction([getSearchCountAsync.success], (state, action) => action.payload)
.handleAction(
  [
    getSearchCountAsync.failure, 
  ], (state, action) => null)

const azSearchState = combineReducers({
  isLoadingautoCompleteValues,
  autoCompleteValuesError,
  autoCompleteValues,
  SearchCountValues
})

export default azSearchState
export type AzSearchState = ReturnType<typeof azSearchState>