import { PlanHospitalModel, PlanHospitalsModel, PlanModel, PlansModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  PlansActionTypes,
  loadPlansAsync,
  loadPlanAsync,
  resetPlanState,
  resetPlansState,
  resetPlanHospitalsState,
  loadPlanHospitalsAsync,
  resetPlanHospitalState,
  loadPlanHospitalAsync
} from '../actions/plans'

// #region Plans
export const isLoadingPlans = createReducer<boolean, PlansActionTypes>(false as boolean)
  .handleAction([resetPlansState, loadPlansAsync.success, loadPlansAsync.failure], (state, action) => false)
  .handleAction([loadPlansAsync.request], (state, action) => true)

export const loadPlansErrors = createReducer<RestException | null, PlansActionTypes>(null)
  .handleAction([resetPlansState, loadPlansAsync.request, loadPlansAsync.success], (state, action) => null)
  .handleAction([loadPlansAsync.failure], (state, action) => action.payload)

export const plans = createReducer<PlansModel | null, PlansActionTypes>(null)
  .handleAction([resetPlansState, loadPlansAsync.failure], (state, action) => null)
  .handleAction([loadPlansAsync.success], (state, action) => action.payload)

export const isLoadingPlan = createReducer<boolean, PlansActionTypes>(false as boolean)
  .handleAction([resetPlanState, loadPlanAsync.success, loadPlanAsync.failure], (state, action) => false)
  .handleAction([loadPlanAsync.request], (state, action) => true)

export const loadPlanErrors = createReducer<RestException | null, PlansActionTypes>(null)
  .handleAction([resetPlanState, loadPlanAsync.request, loadPlanAsync.success], (state, action) => null)
  .handleAction([loadPlanAsync.failure], (state, action) => action.payload)

export const plan = createReducer<PlanModel | null, PlansActionTypes>(null)
  .handleAction([resetPlanState, loadPlanAsync.request, loadPlanAsync.failure], (state, action) => null)
  .handleAction([loadPlanAsync.success], (state, action) => action.payload)
// #endregion Plans

// #region Plan Hospitals
export const isLoadingPlanHospitals = createReducer<boolean, PlansActionTypes>(false as boolean)
  .handleAction(
    [resetPlanHospitalsState, loadPlanHospitalsAsync.success, loadPlanHospitalsAsync.failure],
    (state, action) => false
  )
  .handleAction([loadPlanHospitalsAsync.request], (state, action) => true)

export const loadPlanHospitalsErrors = createReducer<RestException | null, PlansActionTypes>(null)
  .handleAction(
    [resetPlanHospitalsState, loadPlanHospitalsAsync.request, loadPlanHospitalsAsync.success],
    (state, action) => null
  )
  .handleAction([loadPlanHospitalsAsync.failure], (state, action) => action.payload)

export const planHospitals = createReducer<PlanHospitalsModel | null, PlansActionTypes>(null)
  .handleAction([resetPlanHospitalsState, loadPlanHospitalsAsync.failure], (state, action) => null)
  .handleAction([loadPlanHospitalsAsync.success], (state, action) => action.payload)

export const isLoadingPlanHospital = createReducer<boolean, PlansActionTypes>(false as boolean)
  .handleAction(
    [resetPlanHospitalState, loadPlanHospitalAsync.success, loadPlanHospitalAsync.failure],
    (state, action) => false
  )
  .handleAction([loadPlanHospitalAsync.request], (state, action) => true)

export const loadPlanHospitalErrors = createReducer<RestException | null, PlansActionTypes>(null)
  .handleAction(
    [resetPlanHospitalState, loadPlanHospitalAsync.request, loadPlanHospitalAsync.success],
    (state, action) => null
  )
  .handleAction([loadPlanHospitalAsync.failure], (state, action) => action.payload)

export const planHospital = createReducer<PlanHospitalModel | null, PlansActionTypes>(null)
  .handleAction(
    [resetPlanHospitalState, loadPlanHospitalAsync.request, loadPlanHospitalAsync.failure],
    (state, action) => null
  )
  .handleAction([loadPlanHospitalAsync.success], (state, action) => action.payload)
// #endregion Plan Hospitals

const plansState = combineReducers({
  isLoadingPlans,
  loadPlansErrors,
  plans,
  isLoadingPlan,
  loadPlanErrors,
  plan,

  isLoadingPlanHospitals,
  loadPlanHospitalsErrors,
  planHospitals,
  isLoadingPlanHospital,
  loadPlanHospitalErrors,
  planHospital
})

export default plansState
export type PlansState = ReturnType<typeof plansState>
