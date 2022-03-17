import axios from 'axios'
import qs from 'qs'
import { EmailSignIn, ExternalSignIn, IdentityToken } from '../models/auths'
import { GrantValidationResult } from '../models/exceptions'
import { HttpClient } from '../utils/HttpClient'
import { log } from '../utils/log'

const sts_issuer = process.env.NEXT_PUBLIC_STS_ISSUER
const client_id = process.env.STS_CLIENT_ID
const client_secret = process.env.STS_CLIENT_SECRET
const scope = process.env.SCOPE

const signInROPCAsync = async (emailSignIn: EmailSignIn): Promise<IdentityToken> => {
  try {
    log('CALL signInROPCAsync')
    const action = 'connect/token'
    const url = `${sts_issuer}/${action}`

    const data = {
      client_id,
      client_secret,
      scope,
      grant_type: 'password',
      username: emailSignIn.email,
      password: emailSignIn.password
    }

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url,
      data: qs.stringify(data)
    })

    if (response.status === 200 && response.data) {
      return response.data
    } else {
      log('status not 200: ', response.status)
      log('error data: ', response.data)
      throw response.data
    }
  } catch (error: any) {
    const grantValidationResult = error.response.data as GrantValidationResult
    log('CALL signInROPCAsync error: ', grantValidationResult)
    throw grantValidationResult
  }
}

const signInExternal = async (externalSignIn: ExternalSignIn): Promise<IdentityToken> => {
  try {
    log('CALL signInExternalAsync')
    const action = 'connect/token'
    const url = `${sts_issuer}/${action}`

    const data = {
      client_id,
      client_secret,
      scope,
      sub: externalSignIn.sub,
      grant_type: externalSignIn.grant_type,
      provider: externalSignIn.provider,
      external_token: externalSignIn.external_token,
      email: externalSignIn.email
    }

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url,
      data: qs.stringify(data)
    })

    if (response.status === 200 && response.data) {
      return response.data
    } else {
      log('status not 200: ', response.status)
      log('error data: ', response.data)
      throw response.data
    }
  } catch (error: any) {
    log('error: ', error.response)

    const grantValidationResult = error.response.data as GrantValidationResult
    log('CALL signInROPCAsync error: ', grantValidationResult)
    throw grantValidationResult
  }
}

const signOutExternal = async (provider: 'Facebook' | 'Google' | 'Apple', providerKey: string): Promise<boolean> => {
  // eslint-disable-next-line no-useless-catch
  try {
    log('CALL signOutExternalAsync')

    const action = 'externalLogins/removeLogin'
    const url = `${sts_issuer}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      url,
      data: {
        loginProvider: provider,
        providerKey
      }
    })

    if (response.status === 200 && response.data) {
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error) {
    throw error
  }
}

const refreshToken = async (refresh_token: string): Promise<any> => {
  try {
    log('CALL refreshTokenAsync')
    const action = 'connect/token'
    const url = `${sts_issuer}/${action}`

    const data = {
      client_id,
      client_secret,
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }
    log('DATA: ', data)

    const response = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url,
      data: qs.stringify(data)
    })

    if (response.status === 200 && response.data) {
      return response.data
    } else {
      throw response.data
    }
  } catch (error: any) {
    const grantValidationResult = error.response.data as GrantValidationResult
    log('CALL signInROPCAsync error: ', grantValidationResult)
    throw grantValidationResult
  }
}

export default {
  signInROPCAsync,
  signInExternal,
  signOutExternal,
  refreshToken
}
