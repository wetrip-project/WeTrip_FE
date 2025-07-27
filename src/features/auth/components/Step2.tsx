'use client'

import SingleSelectGroup from '@/components/SelectionGroup/SingleSelectGroup'
import ageOptions from '@/constants/options/ageOptions'
import genderOptions from '@/constants/options/genderOptions'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { GenderAgeData, genderAgeSchema } from '@/constants/schema/genderAgeSchema'
import { motion } from 'motion/react'
import { cn } from '@/utils/cn'
import { usePostAgeGender } from '@/apis/auth/authQuery'

type Props = {
  onNext: () => void
}

const Step2 = ({ onNext }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<GenderAgeData>({
    resolver: zodResolver(genderAgeSchema),
  })
  const watchedAge = watch('age')
  const watchedGender = watch('gender')
  const { refetch, status } = usePostAgeGender(watchedAge, watchedGender)
  const onSubmit: SubmitHandler<GenderAgeData> = async () => {
    if (watchedAge && watchedGender)
      await refetch().then((result) => {
        if (result.status === 'success') {
          onNext()
        }
      })
  }
  return (
    <div className='relative flex h-[calc(100vh-62px)] w-[320px] flex-col gap-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='font-20b'>성별과 나이대를 선택해주세요</label>
        <div className='flex flex-col gap-2'>
          <div className='font-14b'>성별</div>
          <Controller
            control={control}
            name='gender'
            render={({ field }) => (
              <SingleSelectGroup
                options={genderOptions}
                value={field.value}
                onChange={field.onChange}
                buttonClassName='w-[156px]'
              />
            )}
          />
          {errors.gender && <p className='text-sm text-red-500'>{errors.gender.message}</p>}
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-14b'>나이</label>
          <Controller
            control={control}
            name='age'
            render={({ field }) => (
              <SingleSelectGroup
                options={ageOptions}
                value={field.value?.toString()}
                onChange={(v) => field.onChange(Number(v))}
                buttonClassName='w-[74px]'
              />
            )}
          />
          {errors.age && <p className='text-sm text-red-500'>{errors.age.message}</p>}
        </div>
        <div className='absolute bottom-0 h-[90px] w-[320px] py-[14px]'>
          <motion.button
            className={cn(
              watchedAge && watchedGender
                ? 'bg-main1 font-16r inline-flex w-[320px] items-center justify-center rounded-md py-[14px] text-white'
                : 'bg-disabled text-t3 font-16r inline-flex h-[50px] w-[320px] items-center justify-center rounded-md py-[14px]',
            )}
            whileTap={{ scale: 0.95 }}
            type='submit'
          >
            다음
          </motion.button>
        </div>
      </form>
    </div>
  )
}

export default Step2
