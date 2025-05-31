'use client'

import { ProgressBar } from '@/components/ProgressBar'
import { usePathname } from 'next/navigation'

const SignupScaffold = () => {
  const stepMap = {
    step1: 80,
    step2: 160,
    step3: 240,
    step4: 300,
  }
  const pathname = usePathname()
  const currentStep = Object.entries(stepMap).find(([key]) => pathname.includes(key))?.[1] ?? 0
  return (
    <div className='h-[14px] w-[320px] py-1'>
      <ProgressBar progress={currentStep} />
    </div>
  )
}
export default SignupScaffold
