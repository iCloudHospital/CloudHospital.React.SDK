import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { loadPlanAsync, loadPlansAsync, loadPlanHospitalsAsync, loadPlanHospitalAsync } from '../actions/plans'
import { RestException } from '../../models/exceptions'

// #region Plans
export const loadPlansEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPlansAsync.request)),
    switchMap((action) =>
      from(apis.plans.loadPlans(action.payload)).pipe(
        map(loadPlansAsync.success),
        catchError((restException: RestException) => of(loadPlansAsync.failure(restException)))
      )
    )
  )

export const loadPlanEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPlanAsync.request)),
    switchMap((action) =>
      from(apis.plans.loadPlan(action.payload)).pipe(
        map(loadPlanAsync.success),
        catchError((restException: RestException) => of(loadPlanAsync.failure(restException)))
      )
    )
  )

// #endregion Plans

// #region Plan Hospitals
export const loadPlanHospitalsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPlanHospitalsAsync.request)),
    switchMap((action) =>
      from(apis.plans.loadPlanHospitals(action.payload)).pipe(
        map(loadPlanHospitalsAsync.success),
        catchError((restException: RestException) => of(loadPlanHospitalsAsync.failure(restException)))
      )
    )
  )

export const loadPlanHospitalEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadPlanHospitalAsync.request)),
    switchMap((action) =>
      from(apis.plans.loadPlanHospital(action.payload)).pipe(
        map(loadPlanHospitalAsync.success),
        catchError((restException: RestException) => of(loadPlanHospitalAsync.failure(restException)))
      )
    )
  )
// #endregion Plan Hospitals

const plansEpic = combineEpics(
  loadPlansEpic,
  loadPlanEpic,

  loadPlanHospitalsEpic,
  loadPlanHospitalEpic
)

export default plansEpic
