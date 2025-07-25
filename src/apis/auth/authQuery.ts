import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { querykeys } from '../querykeys'
import { authService } from './authService'

export interface NicknameSetResponse {
  nickname: string
  message: string
}

export const useSetNickname = (nickname: string): UseQueryResult<NicknameSetResponse, Error> => {
  return useQuery<NicknameSetResponse, Error>({
    queryKey: [querykeys.userOnboarding.nickname],
    queryFn: () => authService.postNickname(nickname),
    enabled: !!nickname,
  })
}
