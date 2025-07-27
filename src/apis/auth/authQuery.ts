import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { NicknameSetResponse, UrlIssuanceResponse } from './authType'
import AuthQueryMap from './queryMap'

export const useSetNickname = (nickname: string): UseQueryResult<NicknameSetResponse, Error> => {
  return useQuery<NicknameSetResponse, Error>({
    queryKey: AuthQueryMap.nickname.key(nickname),
    queryFn: () => AuthQueryMap.nickname.fn(nickname),
    enabled: false,
  })
}

export const useUrlIssuance = ({
  extension,
}: {
  extension: string
}): UseQueryResult<UrlIssuanceResponse, Error> => {
  return useQuery<UrlIssuanceResponse, Error>({
    queryKey: AuthQueryMap.urlIssuance.key(extension),
    queryFn: () => AuthQueryMap.urlIssuance.fn(extension),
    enabled: !!extension,
  })
}
