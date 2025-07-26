import apiClient from '@/utils/HttpClient'
import { authApiPath } from './authApiPath'
import { NicknameSetResponse, UrlIssuanceResponse } from './authType'

interface IAuthService {
  postNickname(nickName: string): Promise<NicknameSetResponse>
  urlIssuance({ extension }: { extension: string }): Promise<UrlIssuanceResponse>
}

class AuthService implements IAuthService {
  async postNickname(nickName: string) {
    return await apiClient.post<NicknameSetResponse>(authApiPath.nickname, {
      name: nickName,
    })
  }
  async urlIssuance({ extension }: { extension: string }) {
    return await apiClient.post<UrlIssuanceResponse>(authApiPath.urlIssuance, {
      extension,
    })
  }
}
export const authService = new AuthService()
