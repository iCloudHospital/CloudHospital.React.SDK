import {
  PlansApi,
  PlansApiApiV2PlansGetRequest,
  PlansApiApiV2PlansPlanIdGetRequest,
  PlansApiApiV2PlansPlanIdHospitalsGetRequest,
  PlansApiApiV2PlansPlanIdHospitalsHospitalIdGetRequest
} from 'ch-api-client-typescript2/lib/api/plans-api'
import { PlanHospitalModel } from 'ch-api-client-typescript2/lib/models/plan-hospital-model'
import { PlanHospitalsModel } from 'ch-api-client-typescript2/lib/models/plan-hospitals-model'
import { PlanModel } from 'ch-api-client-typescript2/lib/models/plan-model'
import { PlansModel } from 'ch-api-client-typescript2/lib/models/plans-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Plans
export const loadPlans = async (payload?: PlansApiApiV2PlansGetRequest): Promise<PlansModel> => {
  return new PlansApi(configuration, undefined, instance)
    .apiV2PlansGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadPlan = async (payload: PlansApiApiV2PlansPlanIdGetRequest): Promise<PlanModel> => {
  return new PlansApi(configuration, undefined, instance)
    .apiV2PlansPlanIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Plans

// #region Plan Hospitals
export const loadPlanHospitals = async (
  payload: PlansApiApiV2PlansPlanIdHospitalsGetRequest
): Promise<PlanHospitalsModel> => {
  return new PlansApi(configuration, undefined, instance)
    .apiV2PlansPlanIdHospitalsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadPlanHospital = async (
  payload: PlansApiApiV2PlansPlanIdHospitalsHospitalIdGetRequest
): Promise<PlanHospitalModel> => {
  return new PlansApi(configuration, undefined, instance)
    .apiV2PlansPlanIdHospitalsHospitalIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Plan Hospitals

const plans = {
  loadPlans,
  loadPlan,
  loadPlanHospitals,
  loadPlanHospital
}

export default plans
