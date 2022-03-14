import { HospitalServicesModel, HospitalServiceModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  ServicesActionTypes,
  loadServiceAsync,
  loadServicesAsync,
  resetServicesState,
  resetServiceState,
  appendServicesAsync
} from '../actions/services'

export const isLoadingServices = createReducer<boolean, ServicesActionTypes>(false)
  .handleAction(
    [
      resetServicesState,
      loadServicesAsync.success,
      loadServicesAsync.failure,
      appendServicesAsync.success,
      appendServicesAsync.failure
    ],
    (_, __) => false
  )
  .handleAction([loadServicesAsync.request, appendServicesAsync.request], (_, __) => true)

export const loadServicesErrors = createReducer<RestException | null, ServicesActionTypes>(null)
  .handleAction(
    [
      resetServicesState,
      loadServicesAsync.request,
      loadServicesAsync.success,
      appendServicesAsync.request,
      appendServicesAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadServicesAsync.failure, appendServicesAsync.failure], (state, action) => action.payload)

export const services = createReducer<HospitalServicesModel | null, ServicesActionTypes>(null)
  .handleAction([resetServicesState, loadServicesAsync.failure], (_, __) => null)
  .handleAction([loadServicesAsync.success], (state, action) => action.payload)
  .handleAction([appendServicesAsync.success], (state, action) => {
    const servicesModel = {
      items: {},
      metaData: {}
    } as HospitalServicesModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    servicesModel.items = newItems
    servicesModel.metaData = action.payload.metaData

    return servicesModel
  })

export const isLoadingService = createReducer<boolean, ServicesActionTypes>(false)
  .handleAction([resetServiceState, loadServiceAsync.success, loadServiceAsync.failure], (_, __) => false)
  .handleAction([loadServiceAsync.request], (_, __) => true)

export const loadServiceErrors = createReducer<RestException | null, ServicesActionTypes>(null)
  .handleAction([resetServiceState, loadServiceAsync.request, loadServiceAsync.success], (state, action) => null)
  .handleAction([loadServiceAsync.failure], (state, action) => action.payload)

export const service = createReducer<HospitalServiceModel | null, ServicesActionTypes>(null)
  .handleAction([resetServiceState, loadServiceAsync.request, loadServiceAsync.failure], (_, __) => null)
  .handleAction([loadServiceAsync.success], (state, action) => action.payload)

const servicesState = combineReducers({
  isLoadingServices,
  loadServicesErrors,
  services,
  isLoadingService,
  loadServiceErrors,
  service
})

export type ServiceState = ReturnType<typeof servicesState>

export default servicesState
