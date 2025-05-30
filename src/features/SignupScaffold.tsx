'use client'

import { ProgressBar } from '@/components/ProgressBar'
import { usePathname } from 'next/navigation'

export default function SignupScaffold() {
  const stepMap = {
    step1: 105,
    step2: 210,
    step3: 300,
    step4: 320,
  }
  const pathname = usePathname()
  const currentStep = Object.entries(stepMap).find(([key]) => pathname.includes(key))?.[1] ?? 0
  return (
    <div className='h-[14px] w-[320px] py-1'>
      <ProgressBar progress={currentStep} />
    </div>
  )
}
