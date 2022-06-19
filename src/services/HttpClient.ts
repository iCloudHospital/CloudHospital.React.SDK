import axios, { AxiosInstance } from 'axios'
import { Configuration } from 'ch-api-client-typescript2/lib'

export class HttpClient {
  private static instance: AxiosInstance | null = null
  private static baseUrl = ''

  public static getInstance(): AxiosInstance {
    if (this.instance === null) {
      this.instance = axios.create()
    }

    return this.instance
  }

  public static getBaseUrl(): string {
    return this.baseUrl
  }

  public static setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl
  }
}

export const configuration = new Configuration({
  basePath: HttpClient.getInstance().defaults.baseURL
})

export const instance = HttpClient.getInstance()
