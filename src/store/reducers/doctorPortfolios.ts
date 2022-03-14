import { DoctorPortfoliosModel, DoctorPortfolioModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  DoctorPortfoliosActionTypes,
  loadDoctorPortfolioAsync,
  loadDoctorPortfoliosAsync,
  resetDoctorPortfolioState,
  resetDoctorPortfoliosState
} from '../actions/doctorPortfolios'

export const isLoadingDoctorPortfolios = createReducer<boolean, DoctorPortfoliosActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorPortfoliosState, loadDoctorPortfoliosAsync.success, loadDoctorPortfoliosAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorPortfoliosAsync.request], (state, action) => true)

export const loadDoctorPortfoliosErrors = createReducer<RestException | null, DoctorPortfoliosActionTypes>(null)
  .handleAction(
    [resetDoctorPortfoliosState, loadDoctorPortfoliosAsync.request, loadDoctorPortfoliosAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorPortfoliosAsync.failure], (state, action) => action.payload)

export const doctorPortfolios = createReducer<DoctorPortfoliosModel | null, DoctorPortfoliosActionTypes>(null)
  .handleAction([resetDoctorPortfoliosState, loadDoctorPortfoliosAsync.failure], (state, action) => null)
  .handleAction([loadDoctorPortfoliosAsync.success], (state, action) => action.payload)

export const isLoadingDoctorPortfolio = createReducer<boolean, DoctorPortfoliosActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorPortfolioState, loadDoctorPortfolioAsync.success, loadDoctorPortfolioAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorPortfolioAsync.request], (state, action) => true)

export const loadDoctorPortfolioErrors = createReducer<RestException | null, DoctorPortfoliosActionTypes>(null)
  .handleAction(
    [resetDoctorPortfolioState, loadDoctorPortfolioAsync.request, loadDoctorPortfolioAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorPortfolioAsync.failure], (state, action) => action.payload)

export const doctorPortfolio = createReducer<DoctorPortfolioModel | null, DoctorPortfoliosActionTypes>(null)
  .handleAction([resetDoctorPortfolioState, loadDoctorPortfolioAsync.failure], (state, action) => null)
  .handleAction([loadDoctorPortfolioAsync.success], (state, action) => action.payload)

const doctorPortfoliosState = combineReducers({
  isLoadingDoctorPortfolios,
  loadDoctorPortfoliosErrors,
  doctorPortfolios,

  isLoadingDoctorPortfolio,
  loadDoctorPortfolioErrors,
  doctorPortfolio
})

export default doctorPortfoliosState
export type DoctorPortfoliosState = ReturnType<typeof doctorPortfoliosState>
