import axios from 'axios'
import { Configuration } from 'ch-api-client-typescript2/lib'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { Errors, RestException } from '../models/exceptions'
import { log } from './log'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export const configuration = new Configuration({
  basePath: apiRoot
})

export const instance = axios.create({
  baseURL: apiRoot,
  timeout: 50000,
  params: {} // do not remove this, its added to add params later in the config
})

instance.interceptors.request.use(
  async (config) => {
    config.headers.common['Access-Control-Allow-Origin'] = '*'

    if (typeof window !== 'undefined') {
      const session = await getSession()
      if (session && session.access_token) {
        config.headers.Authorization = `${session.token_type} ${session.access_token}`
      }
    }

    return config
  },
  (error) => {
    // Do something with request error
    if (error.response.status === 401) {
      const authError = {
        status: error.response.status,
        errors: {
          message: error.response.statusText
        } as Errors
      } as RestException
      return Promise.reject(authError)
    } else {
      return Promise.reject(error)
    }
  }
)
