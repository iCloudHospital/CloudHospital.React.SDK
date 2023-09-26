import {
  HospitalsApi,
  HospitalsApiApiV2HospitalsHospitalIdLandingsGetRequest,
  HospitalsApiApiV2HospitalsHospitalIdLandingsSlugGetRequest
} from 'ch-api-client-typescript2/lib/api/hospitals-api'
import { LandingModel } from 'ch-api-client-typescript2/lib/models/landing-model'
import { LandingsModel } from 'ch-api-client-typescript2/lib/models/landings-model'
import { RestException } from '@models/exceptions'
import { configuration, instance } from './HttpClient'

export const loadLandings = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdLandingsGetRequest
): Promise<LandingsModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdLandingsGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export const loadLanding = async (
  payload: HospitalsApiApiV2HospitalsHospitalIdLandingsSlugGetRequest
): Promise<LandingModel> => {
  return new HospitalsApi(configuration, undefined, instance)
    .apiV2HospitalsHospitalIdLandingsSlugGet(payload)
    .then((res) => {
      return res.data
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

const landings = {
  loadLandings,
  loadLanding
}

export default landings
