import axios, { AxiosInstance } from 'axios'

export class HttpClient {
  private static instance: AxiosInstance | null = null

  public static getInstance(): AxiosInstance {
    if (this.instance === null) {
      this.instance = axios.create()
    }

    return this.instance
  }
}

export const instance = HttpClient.getInstance()
