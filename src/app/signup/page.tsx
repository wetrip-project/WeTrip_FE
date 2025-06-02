'use client'

import { useSignupStore } from '@/stores/hooks/signupStore'
import Step1 from 'src/features/auth/components/Step1'
import Step2 from 'src/features/auth/components/Step2'
import Step3 from 'src/features/auth/components/Step3'
import Step4 from 'src/features/auth/components/Step4'

export default function SignupPage() {
  const { step } = useSignupStore()

  return (
    <div className='mx-auto mt-10 w-full max-w-md'>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </div>
  )
}
