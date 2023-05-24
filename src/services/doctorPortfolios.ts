import {
  DoctorsApi,
  DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest,
  DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest
} from 'ch-api-client-typescript2/lib/api/doctors-api'
import { DoctorPortfolioModel } from 'ch-api-client-typescript2/lib/models/doctor-portfolio-model'
import { DoctorPortfoliosModel } from 'ch-api-client-typescript2/lib/models/doctor-portfolios-model'
import { RestException } from '../models/exceptions'
import { configuration, instance } from './HttpClient'

export const getDoctorPortfolios = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdPortfoliosGetRequest
): Promise<DoctorPortfoliosModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdPortfoliosGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getDoctorPortfolioByPortfolioId = async (
  payload: DoctorsApiApiV2DoctorsDoctorIdPortfoliosPortfolioIdGetRequest
): Promise<DoctorPortfolioModel> => {
  return new DoctorsApi(configuration, undefined, instance)
    .apiV2DoctorsDoctorIdPortfoliosPortfolioIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const doctorPortfolios = {
  getDoctorPortfolios,
  getDoctorPortfolioByPortfolioId
}

export default doctorPortfolios
