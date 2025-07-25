import axios from 'axios'

// 환경별 API URL 설정
const getApiUrl = () => {
  // 환경변수에서 직접 설정된 URL이 있으면 사용
  if (process.env.NEXT_PUBLIC_BASE_SERVER_URL) {
    return process.env.NEXT_PUBLIC_BASE_SERVER_URL
  }

  // 프로덕션 환경에서는 HTTPS 사용
  if (process.env.NODE_ENV === 'production') {
    return 'https://dev-wetrip.shop'
  }

  // 개발 환경에서는 HTTP 사용
  return 'http://dev-wetrip.shop'
}

const API_URL = getApiUrl()
const temporaryToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzUzNDEzMDY5LCJleHAiOjE3NTM0MTQ4Njl9.3gbgsMVK0_Jfz1EAQJnXbhtSNti61xKqzhxMRHEnmBI'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 2000,
  // withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  // token 연동 필요
  const token = temporaryToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   async (error) => {
//     if (error.response?.status === 401) {
//       try {
//         const refreshResponse = await axios.post(axios.defaults.baseURL + 'auth/refresh')
//         const { refreshToken } = refreshResponse.data
//         // useAuthStore.getState().setAccessToken(accessToken)
//         // error.config.headers.Authorization = `Bearer ${accessToken}`
//         return await axiosInstance.request(error.config)
//       } catch (refreshError) {
//         console.error('Refresh Token 만료:', refreshError)
//         window.location.href = '/login'
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   },
// )

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = '???'
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error: AxiosError) => {
//     console.log('interceptor > error', error)
//     Promise.reject(error)
//   },
// )

export default axiosInstance
