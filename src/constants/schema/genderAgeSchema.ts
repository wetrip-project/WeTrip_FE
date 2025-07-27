import { z } from 'zod'

export const genderAgeSchema = z.object({
  gender: z.enum(['male', 'female'], {
    required_error: '성별을 선택해주세요',
  }),
  age: z.union(
    [
      z.literal(10),
      z.literal(20),
      z.literal(30),
      z.literal(40),
      z.literal(50),
      z.literal(60),
      z.literal(70),
      z.literal(80),
    ],
    {
      required_error: '나이대를 선택해주세요',
    },
  ),
})

export type GenderAgeData = z.infer<typeof genderAgeSchema>
