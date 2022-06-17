import { instance } from './HttpClient'
import { RestException } from '../models/exceptions'
import { DoctorsApi, DoctorPortfoliosModel, DoctorPortfolioModel } from 'ch-api-client-typescript2/lib'
import { DoctorPortfoliosSearchOption } from '../models/doctorPortfolios'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadDoctorPortfolios(
  doctorPortfoliosSearchOption: DoctorPortfoliosSearchOption
): Promise<DoctorPortfoliosModel> {
  const { doctorId, doctorName, portfolioId, name, page, limit, lastRetrieved } = doctorPortfoliosSearchOption
  return new DoctorsApi(undefined, apiRoot, instance)
    .apiV2DoctorsDoctorIdPortfoliosGet(doctorId, doctorName, portfolioId, name, page, limit, lastRetrieved)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadDoctorPortfolio(doctorId: string, portfolioId: string): Promise<DoctorPortfolioModel> {
  return new DoctorsApi(undefined, apiRoot, instance)
    .apiV2DoctorsDoctorIdPortfoliosPortfolioIdGet(doctorId, portfolioId)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export default {
  loadDoctorPortfolios,
  loadDoctorPortfolio
}
