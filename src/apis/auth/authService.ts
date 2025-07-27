import apiClient from '@/utils/HttpClient'
import { authApiPath } from './authApiPath'
import { GenderAgeResponse, NicknameSetResponse, UrlIssuanceResponse } from './authType'
import axios from 'axios'

export interface IAuthService {
  postNickname(nickName: string): Promise<NicknameSetResponse>
  urlIssuance({ extension }: { extension: string }): Promise<UrlIssuanceResponse>
  postGenderAge({ age, gender }: { age: number; gender: string }): Promise<GenderAgeResponse>
}
class AuthService implements IAuthService {
  async postNickname(nickName: string) {
    return await apiClient.post<NicknameSetResponse>(authApiPath.nickname, {
      name: nickName,
    })
  }
  async postGenderAge({ age, gender }: { age: number; gender: string }) {
    return await apiClient.post<GenderAgeResponse>(authApiPath.genderAge, {
      age,
      gender,
    })
  }
  async urlIssuance({ extension }: { extension: string }) {
    return await apiClient.post<UrlIssuanceResponse>(authApiPath.urlIssuance, {
      extension,
    })
  }
  async PutProfile(uploadUrl: string, file: File) {
    return await axios.put(uploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    })
  }
}
export const authService = new AuthService()
