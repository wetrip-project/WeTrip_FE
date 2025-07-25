import { axiosInstance } from '@/apis/core'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface FetcherOptions<D = unknown> extends AxiosRequestConfig<D> {
  url: string
  method: HttpMethod
  data?: D
  params?: Record<string, unknown>
  headers?: Record<string, string>
}

const fetcher = async <T = unknown, D = unknown>(
  options: FetcherOptions<D>,
): Promise<AxiosResponse<T>> => {
  const { url, method, data, params, headers } = options
  try {
    const response = await axiosInstance<T, AxiosResponse<T>, D>({
      url,
      method,
      data,
      params,
      headers,
    })
    return response
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
    throw error
  }
}

export default fetcher
