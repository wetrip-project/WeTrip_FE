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
  genderAge: {
    key: ({ age, gender }: { age: number; gender: string }) =>
      querykeys.userOnboarding.genderAge({ age, gender }),
    fn: ({ age, gender }: { age: number; gender: string }) =>
      authService.postGenderAge({ age, gender }),
  },
} as const

export default AuthQueryMap
