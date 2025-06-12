'use client'

import Icon from '@/components/Icon/icon'
import { useSignupStore } from '@/stores/zustand/signupStore'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
  const step = useSignupStore((state) => state.step)
  const setStep = useSignupStore((state) => state.setStep)
  const goPrevStep = () => {
    if (step > 1) {
      const newSearch = new URLSearchParams(window.location.search)
      newSearch.set('step', String(step - 1))
      const newUrl = `/signup?${newSearch.toString()}`
      window.history.pushState({}, '', newUrl)
      setStep(step - 1)
    } else {
      router.push('/login')
    }
  }
  return (
    <button className='h-6 w-6' onClick={goPrevStep}>
      <Icon iconName={'Back'} />
    </button>
  )
}

export default BackButton
