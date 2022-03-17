import axios, { AxiosInstance } from 'axios'
import { Configuration } from 'ch-api-client-typescript2/lib'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export class HttpClient {
  private static instance: AxiosInstance | null = null

  public static getInstance(): AxiosInstance {
    if (this.instance === null) {
      this.instance = axios.create()
    }

    return this.instance
  }
}

export const configuration = new Configuration({
  basePath: apiRoot
})

export const instance = HttpClient.getInstance()
