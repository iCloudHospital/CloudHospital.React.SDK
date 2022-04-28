import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { loadDoctorPortfolioAsync, loadDoctorPortfoliosAsync } from '../actions/doctorPortfolios'

export const loadDoctorPortfoliosEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorPortfoliosAsync.request)),
    switchMap((action) =>
      from(apis.doctorPortfolios.loadDoctorPortfolios(action.payload)).pipe(
        map(loadDoctorPortfoliosAsync.success),
        catchError((restException: RestException) => of(loadDoctorPortfoliosAsync.failure(restException)))
      )
    )
  )

export const loadDoctorPortfolioEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadDoctorPortfolioAsync.request)),
    switchMap((action) =>
      from(apis.doctorPortfolios.loadDoctorPortfolio(action.payload.doctorId, action.payload.portfolioId)).pipe(
        map(loadDoctorPortfolioAsync.success),
        catchError((restException: RestException) => of(loadDoctorPortfolioAsync.failure(restException)))
      )
    )
  )

const doctorPortfoliosEpic = combineEpics(loadDoctorPortfoliosEpic, loadDoctorPortfolioEpic)
export default doctorPortfoliosEpic
