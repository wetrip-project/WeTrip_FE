import { authService } from './authService'
import { querykeys } from '../querykeys'

const AuthQueryMap = {
  nickname: {
    key: (nickname: string) => [querykeys.userOnboarding.nickname, nickname],
    fn: (nickname: string) => authService.postNickname(nickname),
  },
  urlIssuance: {
    key: (ext: string) => [querykeys.userOnboarding.profilePhoto, ext],
    fn: (ext: string) => authService.urlIssuance({ extension: ext }),
  },
} as const

export default AuthQueryMap
