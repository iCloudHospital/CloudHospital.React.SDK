import axios from 'axios'
import { CurrentLogin, ExternalLogins } from '../models/auths'
import { IdentityError } from '../models/exceptions'
import { log } from '../utils/log'
import { HttpClient } from './HttpClient'

const stsAuthority = process.env.NEXT_PUBLIC_STS_ISSUER

const loadExternalLogins = async (access_token?: string, token_type?: string): Promise<ExternalLogins> => {
  try {
    log('CALL loadExternalLoginsAsync')
    const action = 'api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const instance = HttpClient.getInstance()

    const response = await instance({
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
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
    const identityErrors = error.response.data as IdentityError[]
    throw identityErrors
  }
}

const postExternalLogin = async (data: CurrentLogin, access_token?: string, token_type?: string): Promise<boolean> => {
  try {
    log('CALL postExternalLoginAsync')
    const action = 'api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const instance = HttpClient.getInstance()

    const response = await instance({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`,
        'Content-Type': 'application/json-patch+json'
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
    const identityErrors = error.response.data as IdentityError[]
    throw identityErrors
  }
}

const deleteExternalLogin = async (
  data: CurrentLogin,
  access_token?: string,
  token_type?: string
): Promise<boolean> => {
  try {
    log('CALL deleteExternalLoginAsync')
    const action = '/api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const instance = HttpClient.getInstance()

    const response = await instance({
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`,
        'Content-Type': 'application/json-patch+json'
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
    const identityErrors = error.response.data as IdentityError[]
    throw identityErrors
  }
}

export default {
  loadExternalLogins,
  postExternalLogin,
  deleteExternalLogin
}
