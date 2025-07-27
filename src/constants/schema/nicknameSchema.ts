import { z } from 'zod'

export const nicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' })
    .max(10, { message: '띄어쓰기 없이 한글, 영문, 숫자 10자 이내로 가능합니다.' })
    .regex(/^[가-힣a-zA-Z0-9]+$/, {
      message: '한글, 영문, 숫자만 사용할 수 있어요.',
    }),
})

export type NicknameData = z.infer<typeof nicknameSchema>
