import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { PlansApi, PlansModel, PlanModel, PlanHospitalsModel, PlanHospitalModel } from 'ch-api-client-typescript2/lib'
import {
  PlansSearchOption,
  PlanSearchOption,
  PlanHospitalsSearchOption,
  PlanHospitalSearchOption
} from '../models/plans'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

// #region Plans
export function loadPlans(plansSearchOption: PlansSearchOption): Promise<PlansModel> {
  const { id, name, page, limit, lastRetrieved } = plansSearchOption
  return new PlansApi(undefined, apiRoot, instance)
    .apiV2PlansGet(id, name, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as PlansModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadPlan(planSearchOption: PlanSearchOption): Promise<PlanModel> {
  const { planId, options } = planSearchOption
  return new PlansApi(undefined, apiRoot, instance)
    .apiV2PlansPlanIdGet(planId, options)
    .then((res) => {
      return res.data as PlanModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Plans

// #region Plan Hospitals
export function loadPlanHospitals(planHospitalsSearchOption: PlanHospitalsSearchOption): Promise<PlanHospitalsModel> {
  const { planId, page, limit, lastRetrieved } = planHospitalsSearchOption
  return new PlansApi(undefined, apiRoot, instance)
    .apiV2PlansPlanIdHospitalsGet(planId, page, limit, lastRetrieved)
    .then((res) => {
      return res.data as PlanHospitalsModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadPlanHospital(planHospitalSearchOption: PlanHospitalSearchOption): Promise<PlanHospitalModel> {
  const { planId, options } = planHospitalSearchOption
  return new PlansApi(undefined, apiRoot, instance)
    .apiV2PlansPlanIdHospitalsHospitalIdGet(planId, options)
    .then((res) => {
      return res.data as PlanHospitalModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}
// #endregion Plan Hospitals

export default {
  loadPlans,
  loadPlan,

  loadPlanHospitals,
  loadPlanHospital
}
