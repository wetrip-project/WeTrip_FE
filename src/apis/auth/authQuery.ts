import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { GenderAgeResponse, NicknameSetResponse, UrlIssuanceResponse } from './authType'
import AuthQueryMap from './queryMap'

export const useSetNickname = (nickname: string): UseQueryResult<NicknameSetResponse, Error> => {
  return useQuery<NicknameSetResponse, Error>({
    queryKey: AuthQueryMap.nickname.key(nickname),
    queryFn: () => AuthQueryMap.nickname.fn(nickname),
    enabled: false,
  })
}

export const usePostAgeGender = (
  age: number,
  gender: string,
): UseQueryResult<GenderAgeResponse, Error> => {
  return useQuery<GenderAgeResponse, Error>({
    queryKey: AuthQueryMap.genderAge.key({ age, gender }),
    queryFn: () => AuthQueryMap.genderAge.fn({ age, gender }),
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
