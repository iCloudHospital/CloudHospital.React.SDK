import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import {
  DealsModel,
  DealModel,
  DealPackagesModel,
  DealPackageModel,
  DealServicesModel,
  DealServiceModel,
  DealsSimpleModel
} from 'ch-api-client-typescript2/lib'
import {
  DealSearchOption,
  DealsSearchOption,
  DealPackageSearchOption,
  DealPackagesSearchOption,
  DealServiceSearchOption,
  DealServicesSearchOption,
  DealsSimpleSearchOption
} from '../../models/deals'
import { RestException } from '../../models/exceptions'

// #region Deals
export const loadDealsAsync = createAsyncAction('LOAD_DEALS_REQUEST', 'LOAD_DEALS_SUCCESS', 'LOAD_DEALS_FAILURE')<
  DealsSearchOption,
  DealsModel,
  RestException
>()

export const appendDealsAsync = createAsyncAction(
  'APPEND_DEALS_REQUEST',
  'APPEND_DEALS_SUCCESS',
  'APPEND_DEALS_FAILURE'
)<DealsSearchOption, DealsModel, RestException>()

export const loadDealAsync = createAsyncAction('LOAD_DEAL_REQUEST', 'LOAD_DEAL_SUCCESS', 'LOAD_DEAL_FAILURE')<
  DealSearchOption,
  DealModel,
  RestException
>()

export const loadDealsSimpleAsync = createAsyncAction(
  'LOAD_DEALS_SIMPLE_REQUEST',
  'LOAD_DEALS_SIMPLE_SUCCESS',
  'LOAD_DEALS_SIMPLE_FAILURE'
)<DealsSimpleSearchOption, DealsSimpleModel, RestException>()

export const appendDealsSimpleAsync = createAsyncAction(
  'APPEND_DEALS_SIMPLE_REQUEST',
  'APPEND_DEALS_SIMPLE_SUCCESS',
  'APPEND_DEALS_SIMPLE_FAILURE'
)<DealsSimpleSearchOption, DealsSimpleModel, RestException>()

export const resetDealsSimpleState = createAction('RESET_DEALS_SIMPLE_STATE')<undefined>()

export const resetDealsState = createAction('RESET_DEALS_STATE')<undefined>()

export const resetDealState = createAction('RESET_DEAL_STATE')<undefined>()
// #endregion Deals

// #region Deal Packages
export const loadDealPackagesAsync = createAsyncAction(
  'LOAD_DEAL_PACKAGES_REQUEST',
  'LOAD_DEAL_PACKAGES_SUCCESS',
  'LOAD_DEAL_PACKAGES_FAILURE'
)<DealPackagesSearchOption, DealPackagesModel, RestException>()

export const loadDealPackageAsync = createAsyncAction(
  'LOAD_DEAL_PACKAGE_REQUEST',
  'LOAD_DEAL_PACKAGE_SUCCESS',
  'LOAD_DEAL_PACKAGE_FAILURE'
)<DealPackageSearchOption, DealPackageModel, RestException>()

export const resetDealPackagesState = createAction('RESET_DEAL_PACKAGES_STATE')<undefined>()

export const resetDealPackageState = createAction('RESET_DEAL_PACKAGE_STATE')<undefined>()
// #endregion Deal Packages

// #region Deal Services
export const loadDealServicesAsync = createAsyncAction(
  'LOAD_DEAL_SERVICES_REQUEST',
  'LOAD_DEAL_SERVICES_SUCCESS',
  'LOAD_DEAL_SERVICES_FAILURE'
)<DealServicesSearchOption, DealServicesModel, RestException>()

export const loadDealServiceAsync = createAsyncAction(
  'LOAD_DEAL_SERVICE_REQUEST',
  'LOAD_DEAL_SERVICE_SUCCESS',
  'LOAD_DEAL_SERVICE_FAILURE'
)<DealServiceSearchOption, DealServiceModel, RestException>()

export const resetDealServicesState = createAction('RESET_DEAL_SERVICES_STATE')<undefined>()

export const resetDealServiceState = createAction('RESET_DEAL_SERVICE_STATE')<undefined>()
// #endregion Deal Services

export type DealsActionTypes =
  | ActionType<typeof loadDealsAsync>
  | ActionType<typeof appendDealsAsync>
  | ActionType<typeof loadDealAsync>
  | ActionType<typeof resetDealsState>
  | ActionType<typeof resetDealState>
  | ActionType<typeof loadDealPackagesAsync>
  | ActionType<typeof loadDealPackageAsync>
  | ActionType<typeof resetDealPackagesState>
  | ActionType<typeof resetDealPackageState>
  | ActionType<typeof loadDealServicesAsync>
  | ActionType<typeof loadDealServiceAsync>
  | ActionType<typeof resetDealServicesState>
  | ActionType<typeof resetDealServiceState>
  | ActionType<typeof loadDealsSimpleAsync>
  | ActionType<typeof appendDealsSimpleAsync>
  | ActionType<typeof resetDealsSimpleState>
