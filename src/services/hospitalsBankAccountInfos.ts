import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdBankaccountinfosBankAccountInfoIdGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdBankaccountinfosGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { BankAccountInfoModel } from 'ch-api-client-typescript2/lib/models/bank-account-info-model'
import { BankAccountInfosModel } from 'ch-api-client-typescript2/lib/models/bank-account-infos-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

// #region Hospitals
export const getHospitalBankAccountInfos = async (payload: HospitalsApiApiV2HospitalsHospitalIdBankaccountinfosGetRequest): Promise<BankAccountInfosModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdBankaccountinfosGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const getHospitalBankAccountInfoById = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdBankaccountinfosBankAccountInfoIdGetRequest
): Promise<BankAccountInfoModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdBankaccountinfosBankAccountInfoIdGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const hospitalBankAccountInfos = {
  getHospitalBankAccountInfos,
  getHospitalBankAccountInfoById,
}

export default hospitalBankAccountInfos
