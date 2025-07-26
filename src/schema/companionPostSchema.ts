import z from 'zod'

const isFile = (val: unknown): val is File => {
  return typeof File !== 'undefined' && val instanceof File
}

export const companionWriteFormSchema = z.object({
  images: z
    .array(
      z.any().refine(isFile, {
        message: '파일 형식이 올바르지 않습니다.',
      }),
    )
    .max(10, '최대 10개의 이미지만 업로드할 수 있습니다.')
    .optional(),
  title: z.string().min(1, '제목을 입력해주세요.').max(50, '50자 이하로 입력해주세요.'),
  participantCount: z
    .number()
    .min(1, '1명 이상 모집가능합니다.')
    .max(20, '20명까지 모집가능합니다.'),
  deadLine: z.number().min(1).max(7),
  description: z.string().min(10, '설명을 10자 이상 입력해주세요.'),
})

export type CompanionWriteFormInputs = z.infer<typeof companionWriteFormSchema>
