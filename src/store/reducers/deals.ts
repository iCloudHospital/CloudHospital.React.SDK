import {
  DealPackageModel,
  DealsModel,
  DealModel,
  DealPackagesModel,
  DealServicesModel,
  DealServiceModel
} from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  DealsActionTypes,
  loadDealsAsync,
  appendDealsAsync,
  loadDealAsync,
  resetDealsState,
  resetDealState,
  loadDealPackageAsync,
  loadDealPackagesAsync,
  resetDealPackageState,
  resetDealPackagesState,
  loadDealServicesAsync,
  loadDealServiceAsync,
  resetDealServicesState,
  resetDealServiceState
} from '../actions/deals'
import { AzSearchActionTypes, searchDealsAsync, searchDoctorsAsync } from '../actions/azSearch'

// #region Deals
export const isLoadingDeals = createReducer<boolean, DealsActionTypes | AzSearchActionTypes>(false as boolean)
  .handleAction(
    [
      resetDealsState,
      loadDealsAsync.success,
      loadDealsAsync.failure,
      appendDealsAsync.success,
      appendDealsAsync.failure,
      searchDealsAsync.success,
      searchDoctorsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadDealsAsync.request, appendDealsAsync.request, searchDealsAsync.request], (state, action) => true)

export const loadDealsErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction(
    [
      resetDealsState,
      loadDealsAsync.request,
      loadDealsAsync.success,
      appendDealsAsync.request,
      appendDealsAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadDealsAsync.failure, appendDealsAsync.failure], (state, action) => action.payload)

export const deals = createReducer<DealsModel | null, DealsActionTypes>(null)
  .handleAction([resetDealsState, loadDealsAsync.request, loadDealsAsync.failure], (state, action) => null)
  .handleAction([loadDealsAsync.success], (state, action) => action.payload)
  .handleAction([appendDealsAsync.success], (state, action) => {
    const dealsViewModel = {
      items: {},
      metaData: {}
    } as DealsModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    dealsViewModel.items = newItems
    dealsViewModel.metaData = action.payload.metaData

    return dealsViewModel
  })

export const isLoadingDeal = createReducer<boolean, DealsActionTypes>(false as boolean)
  .handleAction([resetDealState, loadDealAsync.success, loadDealAsync.failure], (state, action) => false)
  .handleAction([loadDealAsync.request], (state, action) => true)

export const loadDealErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction([resetDealState, loadDealAsync.request, loadDealAsync.success], (state, action) => null)
  .handleAction([loadDealAsync.failure], (state, action) => action.payload)

export const deal = createReducer<DealModel | null, DealsActionTypes>(null)
  .handleAction([resetDealState, loadDealAsync.request, loadDealAsync.failure], (state, action) => null)
  .handleAction([loadDealAsync.success], (state, action) => action.payload)
// #endregion Deals

// #region Deal Packages
export const isLoadingDealPackages = createReducer<boolean, DealsActionTypes | AzSearchActionTypes>(false as boolean)
  .handleAction(
    [resetDealPackagesState, loadDealPackagesAsync.success, loadDealPackagesAsync.failure, searchDoctorsAsync.failure, searchDealsAsync.success],
    (state, action) => false
  )
  .handleAction([loadDealPackagesAsync.request, searchDealsAsync.request], (state, action) => true)

export const loadDealPackagesErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealPackagesState, loadDealPackagesAsync.request, loadDealPackagesAsync.success],
    (state, action) => null
  )
  .handleAction([loadDealPackagesAsync.failure], (state, action) => action.payload)

export const dealPackages = createReducer<DealPackagesModel | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealPackagesState, loadDealPackagesAsync.request, loadDealPackagesAsync.failure],
    (state, action) => null
  )
  .handleAction([loadDealPackagesAsync.success], (state, action) => action.payload)

export const isLoadingDealPackage = createReducer<boolean, DealsActionTypes>(false as boolean)
  .handleAction(
    [resetDealPackageState, loadDealPackageAsync.success, loadDealPackageAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDealPackageAsync.request], (state, action) => true)

export const dealPackageErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealPackageState, loadDealPackageAsync.request, loadDealPackageAsync.success],
    (state, action) => null
  )
  .handleAction([loadDealPackageAsync.failure], (state, action) => action.payload)

export const dealPackage = createReducer<DealPackageModel | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealPackageState, loadDealPackageAsync.request, loadDealPackageAsync.failure],
    (state, action) => null
  )
  .handleAction([loadDealPackageAsync.success], (state, action) => action.payload)
// #endregion Deal Packages

// #region Deal Services
export const isLoadingDealServices = createReducer<boolean, DealsActionTypes>(false as boolean)
  .handleAction(
    [resetDealServicesState, loadDealServicesAsync.success, loadDealServicesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDealServicesAsync.request], (state, action) => true)

export const loadDealServicesErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealServicesState, loadDealServicesAsync.request, loadDealServicesAsync.success],
    (state, action) => null
  )
  .handleAction([loadDealServicesAsync.failure], (state, action) => action.payload)

export const dealServices = createReducer<DealServicesModel | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealServicesState, loadDealServicesAsync.request, loadDealServicesAsync.failure],
    (state, action) => null
  )
  .handleAction([loadDealServicesAsync.success], (state, action) => action.payload)

export const isLoadingDealService = createReducer<boolean, DealsActionTypes>(false as boolean)
  .handleAction(
    [resetDealServiceState, loadDealServiceAsync.success, loadDealServiceAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDealServiceAsync.request], (state, action) => true)

export const dealServiceErrors = createReducer<RestException | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealServiceState, loadDealServiceAsync.request, loadDealServiceAsync.success],
    (state, action) => null
  )
  .handleAction([loadDealServiceAsync.failure], (state, action) => action.payload)

export const dealService = createReducer<DealServiceModel | null, DealsActionTypes>(null)
  .handleAction(
    [resetDealServiceState, loadDealServiceAsync.request, loadDealServiceAsync.failure],
    (state, action) => null
  )
  .handleAction([loadDealServiceAsync.success], (state, action) => action.payload)
// #endregion Deal Services
const dealsState = combineReducers({
  isLoadingDeals,
  loadDealsErrors,
  deals,
  isLoadingDeal,
  loadDealErrors,
  deal,

  isLoadingDealPackages,
  loadDealPackagesErrors,
  dealPackages,
  isLoadingDealPackage,
  dealPackageErrors,
  dealPackage,

  isLoadingDealServices,
  loadDealServicesErrors,
  dealServices,
  isLoadingDealService,
  dealServiceErrors,
  dealService
})

export default dealsState
export type DealsState = ReturnType<typeof dealsState>
