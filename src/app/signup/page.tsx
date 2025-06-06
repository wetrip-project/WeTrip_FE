'use client'

import { useSignupStore } from '@/stores/zustand/signupStore'
import { useEffect } from 'react'
import Step1 from 'src/features/auth/components/Step1'
import Step2 from 'src/features/auth/components/Step2'
import Step3 from 'src/features/auth/components/Step3'
import Step4 from 'src/features/auth/components/Step4'

export default function SignupPage() {
  const { step, setStep } = useSignupStore()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const stepFromUrl = Number(params.get('step') || '1')
    setStep(stepFromUrl)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setStep(Number(params.get('step') || '1'))
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goToStep = (n: number) => {
    const newSearch = new URLSearchParams(window.location.search)
    newSearch.set('step', String(n))
    const newUrl = `/signup?${newSearch.toString()}`
    window.history.pushState({}, '', newUrl)
    setStep(n)
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
