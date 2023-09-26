import { CurrentLogin, ExternalLogins } from '@models/auths'
import { IdentityError } from '@models/exceptions'
import { log } from '../utils/log'
import { instance } from './HttpClient'

const sts_issuer = process.env.NEXT_PUBLIC_STS_ISSUER

export const postExternalLogin = async (data: CurrentLogin): Promise<boolean> => {
  try {
    log('CALL postExternalLoginAsync')
    const action = 'api/v1/externalLogins'
    const url = `${sts_issuer}/${action}`

    const response = await instance({
      method: 'POST',
      headers: {
        Accept: '*/*'
      },
      url,
      data
    })
    if (response.status === 200) {
      return true
    } else {
      throw new Error('error to add')
    }
  } catch (error: any) {
    log('error: ', error.response.data)
    throw error.response.data as IdentityError[]
  }
}

export const getExternalLogins = async (): Promise<ExternalLogins> => {
  try {
    log('CALL loadExternalLoginsAsync')
    const action = 'api/v1/externalLogins'
    const url = `${sts_issuer}/${action}`

    const response = await instance({
      method: 'GET',
      headers: {
        Accept: '*/*'
      },
      url
    })
    if (response.status === 200 && response.data) {
      return response.data as ExternalLogins
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error: ', error.response)
    throw error.response.data as IdentityError[]
  }
}

export const deleteExternalLogin = async (data: CurrentLogin): Promise<boolean> => {
  try {
    log('CALL deleteExternalLoginAsync')
    const action = '/api/v1/externalLogins'
    const url = `${sts_issuer}/${action}`

    const response = await instance({
      method: 'DELETE',
      headers: {
        Accept: '*/*'
      },
      url,
      data
    })
    if (response.status === 200) {
      return true
    } else {
      throw new Error('error to add')
    }
  } catch (error: any) {
    log('error: ', error.response)
    throw error.response.data as IdentityError[]
  }
}

const externalLogins = {
  getExternalLogins,
  postExternalLogin,
  deleteExternalLogin
}

export default externalLogins
