import { apiClient } from '@/utils/ApiClient'
import { NicknameSetResponse } from './authQuery'

class AuthService {
  async postNickname(nickName: string) {
    return await apiClient.post<NicknameSetResponse>('/api/auth/signup/nickname', {
      name: nickName,
    })
  }
}
export const authService = new AuthService()
