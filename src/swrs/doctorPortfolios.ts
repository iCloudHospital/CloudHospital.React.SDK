import { nameOf, useGenericSWR, useGenericSWRInfinite, useGenericSWRMutation } from '../hooks/useGenericSWRs'
import { RestException } from '../models/exceptions'
import {
  DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorPortfolioModel } from 'ch-api-client-typescript2/lib/models/doctor-portfolio-model'
import { DoctorPortfoliosModel } from 'ch-api-client-typescript2/lib/models/doctor-portfolios-model'
import { getDoctorPortfolioByPortfolioId, getDoctorPortfolios } from '../services/doctorPortfolios'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region GET api/v2/doctors/{doctorid}/portfolios
export const getDoctorPortfoliosSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWR<DoctorPortfoliosModel, RestException, DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest>(
    operationName + nameOf(() => getDoctorPortfolios),
    getDoctorPortfolios,
    payload,
    shouldFetch
  )
}

export const getDoctorPortfoliosMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorPortfoliosModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorPortfoliosModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest
  >(operationName + nameOf(() => getDoctorPortfolios), getDoctorPortfolios, config)
}

export const getDoctorPortfoliosInfinite = (
  operationName = '',
  payload?: DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest,
  shouldFetch?: boolean
) => {
  return useGenericSWRInfinite<
    DoctorPortfoliosModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest
  >(operationName + nameOf(() => getDoctorPortfolios), getDoctorPortfolios, payload, shouldFetch)
}
// #endregion GET api/v2/doctors/{doctorid}/portfolios

// #region GET api/v2/doctors/{doctorid}/portfolios/{portfolioId}
export const getDoctorPortfolioByPortfolioIdSWR = (
  operationName = '',
  payload: DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest,
  shouldFetch?: boolean,
  config?: SWRConfiguration<DoctorPortfolioModel, RestException>
) => {
  return useGenericSWR<
    DoctorPortfolioModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest
  >(
    operationName + nameOf(() => getDoctorPortfolioByPortfolioId),
    getDoctorPortfolioByPortfolioId,
    payload,
    shouldFetch,
    config
  )
}

export const getDoctorPortfolioByPortfolioIdSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<DoctorPortfolioModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<
    DoctorPortfolioModel,
    RestException,
    DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest
  >(operationName + nameOf(() => getDoctorPortfolioByPortfolioId), getDoctorPortfolioByPortfolioId, config)
}
// #endregion GET api/v2/doctors/{doctorid}/portfolios/{portfolioId}
