import axios, { AxiosInstance } from 'axios'

interface GetInstanceOption {
  forceRecreate?: boolean
}

export class HttpClient {
  private static instance: AxiosInstance | null = null

  public static getInstance(option?: GetInstanceOption): AxiosInstance {
    if (!this.instance || option?.forceRecreate) {
      this.instance = axios.create()
    }

    return this.instance
  }
}
