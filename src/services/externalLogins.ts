import axios from 'axios'
import { getSession } from 'next-auth/react'
import { CurrentLogin, ExternalLogins } from '../models/auths'
import { IdentityError } from '../models/exceptions'
import { log } from '../utils/log'

const stsAuthority = process.env.NEXT_PUBLIC_STS_ISSUER

const loadExternalLogins = async (): Promise<ExternalLogins> => {
  try {
    log('CALL loadExternalLoginsAsync')
    const session = await getSession()

    const action = 'api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const response = await axios({
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `${session?.token_type} ${session?.access_token}`
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

const postExternalLogin = async (data: CurrentLogin): Promise<boolean> => {
  try {
    log('CALL postExternalLoginAsync')
    const session = await getSession()

    const action = 'api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const response = await axios({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${session?.token_type} ${session?.access_token}`,
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

const deleteExternalLogin = async (data: CurrentLogin): Promise<boolean> => {
  try {
    log('CALL deleteExternalLoginAsync')
    const session = await getSession()

    const action = '/api/v1/externalLogins'
    const url = `${stsAuthority}/${action}`

    const response = await axios({
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: `${session?.token_type} ${session?.access_token}`,
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
