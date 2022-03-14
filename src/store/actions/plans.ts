import { PlansModel, PlanModel, PlanHospitalsModel, PlanHospitalModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  PlanHospitalSearchOption,
  PlanHospitalsSearchOption,
  PlanSearchOption,
  PlansSearchOption
} from '../../models/plans'

// #region Plans
export const loadPlansAsync = createAsyncAction('LOAD_PLANS_REQUEST', 'LOAD_PLANS_SUCCESS', 'LOAD_PLANS_FAILURE')<
  PlansSearchOption,
  PlansModel,
  RestException
>()

export const loadPlanAsync = createAsyncAction('LOAD_PLAN_REQUEST', 'LOAD_PLAN_SUCCESS', 'LOAD_PLAN_FAILURE')<
  PlanSearchOption,
  PlanModel,
  RestException
>()

export const resetPlansState = createAction('RESET_PLANS_STATE')<undefined>()

export const resetPlanState = createAction('RESET_PLAN_STATE')<undefined>()
// #endregion Plans

// #region Plan Hospitals
export const loadPlanHospitalsAsync = createAsyncAction(
  'LOAD_PLAN_HOSPITALS_REQUEST',
  'LOAD_PLAN_HOSPITALS_SUCCESS',
  'LOAD_PLAN_HOSPITALS_FAILURE'
)<PlanHospitalsSearchOption, PlanHospitalsModel, RestException>()

export const loadPlanHospitalAsync = createAsyncAction(
  'LOAD_PLAN_HOSPITAL_REQUEST',
  'LOAD_PLAN_HOSPITAL_SUCCESS',
  'LOAD_PLAN_HOSPITAL_FAILURE'
)<PlanHospitalSearchOption, PlanHospitalModel, RestException>()

export const resetPlanHospitalsState = createAction('RESET_PLAN_HOSPITALS_STATE')<undefined>()

export const resetPlanHospitalState = createAction('RESET_PLAN_HOSPITAL_STATE')<undefined>()
// #endregion Plan Hospitals

export type PlansActionTypes =
  | ActionType<typeof loadPlansAsync>
  | ActionType<typeof loadPlanAsync>
  | ActionType<typeof resetPlansState>
  | ActionType<typeof resetPlanState>
  | ActionType<typeof loadPlanHospitalsAsync>
  | ActionType<typeof loadPlanHospitalAsync>
  | ActionType<typeof resetPlanHospitalsState>
  | ActionType<typeof resetPlanHospitalState>
