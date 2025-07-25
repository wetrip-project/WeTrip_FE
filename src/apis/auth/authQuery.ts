import { useQuery } from '@tanstack/react-query'
import { querykeys } from '../querykeys'
import { authService } from './authService'

export const useSetNickname = (nickname: string) => {
  return useQuery({
    queryKey: [querykeys.userOnboarding.nickname],
    queryFn: () => authService.postNickname(nickname),
  })
}
