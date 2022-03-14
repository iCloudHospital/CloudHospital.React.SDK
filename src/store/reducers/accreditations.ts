import { AccreditationsModel, AccreditationModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  AccreditationsActionTypes,
  appendAccreditationsAsync,
  loadAccreditationAsync,
  loadAccreditationsAsync,
  resetAccreditationState
} from '../actions/accreditations'

export const isLoadingAccreditations = createReducer<boolean, AccreditationsActionTypes>(false as boolean)
  .handleAction(
    [
      loadAccreditationsAsync.success,
      loadAccreditationsAsync.failure,
      appendAccreditationsAsync.success,
      appendAccreditationsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadAccreditationsAsync.request, appendAccreditationsAsync.request], (state, action) => true)

export const loadAccreditationsErrors = createReducer<RestException | null, AccreditationsActionTypes>(null)
  .handleAction(
    [
      loadAccreditationsAsync.request,
      loadAccreditationsAsync.success,
      appendAccreditationsAsync.request,
      appendAccreditationsAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadAccreditationsAsync.failure, appendAccreditationsAsync.failure], (state, action) => action.payload)

export const hasMoreAccreditations = createReducer<boolean | null, AccreditationsActionTypes>(null)
  .handleAction(
    [loadAccreditationsAsync.success, appendAccreditationsAsync.success],
    (state, action) => action.payload.metaData?.hasNextPage ?? null
  )
  .handleAction(
    [
      loadAccreditationsAsync.request,
      loadAccreditationsAsync.failure,
      appendAccreditationsAsync.request,
      appendAccreditationsAsync.failure
    ],
    (_, __) => null
  )

export const accreditations = createReducer<AccreditationsModel | null, AccreditationsActionTypes>(null)
  .handleAction([loadAccreditationsAsync.failure], (state, action) => null)
  .handleAction([loadAccreditationsAsync.success], (state, action) => action.payload)
  .handleAction([appendAccreditationsAsync.success], (state, action) => {
    const accreditationsModel = {
      items: {},
      metaData: {}
    } as AccreditationsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    accreditationsModel.items = newItems
    accreditationsModel.metaData = action.payload.metaData

    return accreditationsModel
  })

export const isLoadingAccreditation = createReducer<boolean, AccreditationsActionTypes>(false as boolean)
  .handleAction(
    [resetAccreditationState, loadAccreditationAsync.success, loadAccreditationAsync.failure],
    (state, action) => false
  )
  .handleAction([loadAccreditationsAsync.request], (state, action) => true)

export const accreditation = createReducer<AccreditationModel | null, AccreditationsActionTypes>(null)
  .handleAction([resetAccreditationState, loadAccreditationAsync.failure], (state, action) => null)
  .handleAction([loadAccreditationAsync.success], (state, action) => action.payload)

const accreditationsState = combineReducers({
  isLoadingAccreditations,
  loadAccreditationsErrors,
  hasMoreAccreditations,
  accreditations,
  isLoadingAccreditation,
  accreditation
})

export default accreditationsState
export type AccreditationsState = ReturnType<typeof accreditationsState>
