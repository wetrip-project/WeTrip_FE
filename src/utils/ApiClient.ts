import HttpClient from './HttpClient'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_SERVER_URL as string

export const apiClient = new HttpClient(BASE_URL)
