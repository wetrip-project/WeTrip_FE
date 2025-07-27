'use client'

import { useSetNickname } from '@/apis/auth/authQuery'
import { Input } from '@/components/Input'
import { nicknameSchema } from '@/constants/schema/nicknameSchema'
import useDebounce from '@/hooks/useDebounce'
import { cn } from '@/utils/cn'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {
  onNext: () => void
}

type NicknameData = {
  nickname: string
}

const Step1 = ({ onNext }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NicknameData>({
    resolver: zodResolver(nicknameSchema),
    mode: 'onChange',
  })

  const watchedNickname = watch('nickname')
  const debouncedNickname = useDebounce(watchedNickname, 500)
  const { data, status, refetch } = useSetNickname(debouncedNickname)

  const onSubmit: SubmitHandler<NicknameData> = (data) => {
    console.log('최종 제출:', data)
  }

  useEffect(() => {
    const isNicknameValid =
      !errors.nickname && typeof debouncedNickname === 'string' && debouncedNickname.length > 0
    if (isNicknameValid) {
      refetch()
    }
  }, [debouncedNickname, errors.nickname])

  return (
    <div className='flex h-[calc(100vh-62px)] w-[320px] flex-col justify-between'>
      <div className='flex flex-1 flex-col gap-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='font-20b'>사용할 닉네임을 적어주세요</label>
          <div className='flex h-[73px] w-[320px] flex-col gap-2'>
            <Input
              variant={'default'}
              placeholder='한글,숫자 최대 10자'
              className={cn(errors.nickname ? 'outline-error' : 'focus:outline-main1')}
              {...register('nickname')}
            />
            {errors.nickname && (
              <span className='font-12r text-error h-[14px] w-[320px]'>
                {errors.nickname.message}
              </span>
            )}
            {status === 'success' && (
              <span className='font-12r text-error h-[14px] w-[320px]'>
                {data.nickname}은 사용 가능한 닉네임입니다.
              </span>
            )}
          </div>
        </form>
      </div>
      <div className='h-[90px] w-[320px] py-[14px]'>
        <motion.button
          className={cn(
            status === 'success'
              ? 'bg-main1 font-16r inline-flex w-[320px] items-center justify-center rounded-md py-[14px] text-white'
              : 'bg-disabled text-t3 font-16r inline-flex h-[50px] w-[320px] items-center justify-center rounded-md py-[14px]',
          )}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          다음
        </motion.button>
      </div>
    </div>
  )
}

export default Step1
