'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { motion } from 'motion/react'

type Props = {
  onNext: () => void
}

const Step1 = ({ onNext }: Props) => {
  return (
    <div className='flex h-[calc(100vh-62px)] w-[320px] flex-col justify-between'>
      <div className='flex flex-1 flex-col gap-4'>
        <div className='font-20b'>사용할 닉네임을 적어주세요</div>
        <Input
          variant='default'
          placeholder='한글,숫자 최대 10자'
          className='focus:outline-main1'
        />
      </div>
      <div className='h-[90px] w-[320px] py-[14px]'>
        <motion.button
          className='bg-main1 font-16r inline-flex w-[320px] items-center justify-center rounded-md py-[14px] text-white'
          whileTap={{ scale: 0.95 }}
        >
          다음
        </motion.button>
      </div>
    </div>
  )
}

export default Step1
