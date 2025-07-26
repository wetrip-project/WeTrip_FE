export const AUTH_SIGNUP_PREFIX = '/auth/signup' as const

export const authApiPath = {
  profile: AUTH_SIGNUP_PREFIX,
  urlIssuance: `${AUTH_SIGNUP_PREFIX}/profile_photo_url`,
  tripType: `${AUTH_SIGNUP_PREFIX}/trip_type`,
  nickname: `${AUTH_SIGNUP_PREFIX}/nickname`,
  genderAge: `${AUTH_SIGNUP_PREFIX}/gender_age`,
  complete: `${AUTH_SIGNUP_PREFIX}/complete`,
} as const
