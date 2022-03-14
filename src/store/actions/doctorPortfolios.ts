import { DoctorPortfoliosModel, DoctorPortfolioModel } from 'ch-api-client-typescript2/lib'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { DoctorPortfoliosSearchOption } from '../../models/doctorPortfolios'
import { RestException } from '../../models/exceptions'

export const loadDoctorPortfoliosAsync = createAsyncAction(
  'LOAD_DOCTOR_PORTFOLIOS_REQUEST',
  'LOAD_DOCTOR_PORTFOLIOS_SUCCESS',
  'LOAD_DOCTOR_PORTFOLIOS_FAILURE'
)<DoctorPortfoliosSearchOption, DoctorPortfoliosModel, RestException>()

export const loadDoctorPortfolioAsync = createAsyncAction(
  'LOAD_DOCTOR_PORTFOLIO_REQUEST',
  'LOAD_DOCTOR_PORTFOLIO_SUCCESS',
  'LOAD_DOCTOR_PORTFOLIO_FAILURE'
)<{ doctorId: string; portfolioId: string }, DoctorPortfolioModel, RestException>()

export const resetDoctorPortfoliosState = createAction('RESET_DOCTOR_PORTFOLIOS_STATE')<undefined>()

export const resetDoctorPortfolioState = createAction('RESET_DOCTOR_PORTFOLIO_STATE')<undefined>()

export type DoctorPortfoliosActionTypes =
  | ActionType<typeof loadDoctorPortfoliosAsync>
  | ActionType<typeof loadDoctorPortfolioAsync>
  | ActionType<typeof resetDoctorPortfoliosState>
  | ActionType<typeof resetDoctorPortfolioState>
