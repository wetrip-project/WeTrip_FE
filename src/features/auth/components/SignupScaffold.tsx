'use client'

import { ProgressBar } from '@/components/ProgressBar'
import { useSignupStore } from '@/stores/zustand/signupStore'

const SignupScaffold = () => {
  const step = useSignupStore((state) => state.step)
  const stepMap = {
    1: 80,
    2: 160,
    3: 240,
    4: 300,
  }
  const currentStep = step as keyof typeof stepMap
  return (
    <div className='h-[14px] w-[320px] py-1'>
      <ProgressBar progress={stepMap[currentStep]} />
    </div>
  )
}
export default SignupScaffold
