import { SpecialtiesModel, SpecialtyModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  loadSpecialtiesAsync,
  appendSpecialtiesAsync,
  SpecialtiesActionTypes,
  loadSpecialtyAsync,
  resetSpecialtyState,
  resetSpecialtiesState,
  loadTranslatedSpecialtyAsync
} from '../actions/specialties'

export const isLoadingSpecialties = createReducer<boolean, SpecialtiesActionTypes>(false as boolean)
  .handleAction(
    [
      resetSpecialtiesState,
      loadSpecialtiesAsync.success,
      loadSpecialtiesAsync.failure,
      appendSpecialtiesAsync.success,
      appendSpecialtiesAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadSpecialtiesAsync.request, appendSpecialtiesAsync.request], (state, action) => true)

export const loadSpecialtiesErrors = createReducer<RestException | null, SpecialtiesActionTypes>(null)
  .handleAction(
    [
      resetSpecialtiesState,
      loadSpecialtiesAsync.request,
      loadSpecialtiesAsync.success,
      appendSpecialtiesAsync.request,
      appendSpecialtiesAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadSpecialtiesAsync.failure, appendSpecialtiesAsync.failure], (state, action) => action.payload)

export const hasMoreSpecialties = createReducer<boolean | null, SpecialtiesActionTypes>(null)
  .handleAction(
    [loadSpecialtiesAsync.success, appendSpecialtiesAsync.success],
    (state, action) => action.payload.metaData?.hasNextPage ?? null
  )
  .handleAction(
    [
      loadSpecialtiesAsync.request,
      loadSpecialtiesAsync.failure,
      appendSpecialtiesAsync.request,
      appendSpecialtiesAsync.failure
    ],
    (_, __) => null
  )

export const specialties = createReducer<SpecialtiesModel | null, SpecialtiesActionTypes>(null)
  .handleAction([resetSpecialtiesState, loadSpecialtiesAsync.failure], (state, action) => null)
  .handleAction([loadSpecialtiesAsync.success], (state, action) => action.payload)
  .handleAction([appendSpecialtiesAsync.success], (state, action) => {
    const specialtiesModel = {
      items: {},
      metaData: {}
    } as SpecialtiesModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    specialtiesModel.items = newItems
    specialtiesModel.metaData = action.payload.metaData

    return specialtiesModel
  })

export const isLoadingSpecialty = createReducer<boolean, SpecialtiesActionTypes>(false as boolean)
  .handleAction(
    [
      resetSpecialtyState,
      loadSpecialtyAsync.success,
      loadSpecialtyAsync.failure,
      loadTranslatedSpecialtyAsync.success,
      loadTranslatedSpecialtyAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadSpecialtyAsync.request, loadTranslatedSpecialtyAsync.request], (state, action) => true)

export const loadSpecialtyErrors = createReducer<RestException | null, SpecialtiesActionTypes>(null)
  .handleAction(
    [
      resetSpecialtyState,
      loadSpecialtyAsync.request,
      loadSpecialtyAsync.success,
      loadTranslatedSpecialtyAsync.request,
      loadTranslatedSpecialtyAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadSpecialtyAsync.failure, loadTranslatedSpecialtyAsync.failure], (state, action) => action.payload)

export const specialty = createReducer<SpecialtyModel | null, SpecialtiesActionTypes>(null)
  .handleAction([resetSpecialtyState, loadSpecialtyAsync.failure], (state, action) => null)
  .handleAction([loadSpecialtyAsync.success], (state, action) => action.payload)

export const translatedSpecialty = createReducer<SpecialtyModel | null, SpecialtiesActionTypes>(null)
  .handleAction(
    [resetSpecialtyState, loadTranslatedSpecialtyAsync.request, loadTranslatedSpecialtyAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedSpecialtyAsync.success], (state, action) => action.payload)

const specialtiesState = combineReducers({
  isLoadingSpecialties,
  loadSpecialtiesErrors,
  hasMoreSpecialties,
  specialties,

  isLoadingSpecialty,
  loadSpecialtyErrors,
  specialty,
  translatedSpecialty
})

export default specialtiesState
export type SpecialtiesState = ReturnType<typeof specialtiesState>
