import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class HttpClient {
  private readonly client: AxiosInstance
  private readonly BASE_URL =
    process.env.NEXT_PUBLIC_BASE_SERVER_URL || 'https://dev-wetrip.shop/api'
  constructor() {
    this.client = axios.create({
      baseURL: this.BASE_URL,
      // withCredentials: true,
      timeout: 2000,
    })
    this.client.interceptors.request.use((config) => {
      // const token = localStorage.getItem('accessToken')
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzUzNTEzOTkzLCJleHAiOjE3NTM1MjExOTN9.GCa_6rJa7Z8zX_zyLbQST_aGSdOxAAmMhI6Svs7VQNM'
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

const apiClient = new HttpClient()

export default apiClient
