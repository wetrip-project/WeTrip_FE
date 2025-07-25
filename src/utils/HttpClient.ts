import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const temporaryToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzUzNDEzMDY5LCJleHAiOjE3NTM0MTQ4Njl9.3gbgsMVK0_Jfz1EAQJnXbhtSNti61xKqzhxMRHEnmBI'

export default class HttpClient {
  private readonly client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      // withCredentials: true,
      timeout: 2000,
    })

    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
  }

  public async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, config)
    return response.data
  }
  public async post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data, config)
    return response.data
  }

  public async put<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config)
    return response.data
  }

  public async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config)
    return response.data
  }
}
