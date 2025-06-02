'use client'
import { useSearchParams, useRouter } from 'next/navigation'

import Step1 from 'src/features/auth/components/Step1'
import Step2 from 'src/features/auth/components/Step2'
import Step3 from 'src/features/auth/components/Step3'
import Step4 from 'src/features/auth/components/Step4'

export default function SignupPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const step = Number(searchParams.get('step') || '1')
  const goToStep = (n: number) => {
    const newSearch = new URLSearchParams(searchParams)
    newSearch.set('step', String(n))
    router.push(`/signup?${newSearch.toString()}`)
  }
  return (
    <div className='h-[calc(100vh-62px)] w-[320px]'>
      {step === 1 && <Step1 onNext={() => goToStep(2)} />}
      {step === 2 && <Step2 onNext={() => goToStep(3)} />}
      {step === 3 && <Step3 onNext={() => goToStep(4)} />}
      {step === 4 && <Step4 />}
    </div>
  )
}
