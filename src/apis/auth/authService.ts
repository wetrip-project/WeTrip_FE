import { apiClient } from '@/utils/ApiClient'

class AuthService {
  async postNickname(nickName: string) {
    return await apiClient.post('/api/auth/signup/nickname', {
      name: nickName,
    })
  }
}

export const authService = new AuthService()
