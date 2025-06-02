'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon/icon'
import SignupScaffold from 'src/features/auth/components/SignupScaffold'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setStep(Number(params.get('step') || '1'))
    const handler = () => {
      const params = new URLSearchParams(window.location.search)
      setStep(Number(params.get('step') || '1'))
    }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])
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
    <div className='h-[100svh] w-[360px] px-5'>
      <div className='w-[320px] py-3' onClick={goPrevStep}>
        <Icon iconName={'Back'} />
      </div>
      <SignupScaffold />
      <div className='min-h-[calc(100vh-62px)] w-[320px]'>{children}</div>
    </div>
  )
}

export default Layout
