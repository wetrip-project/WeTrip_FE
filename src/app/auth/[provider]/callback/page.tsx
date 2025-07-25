'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'

export default function CallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = useParams()

  useEffect(() => {
    const accessToken = searchParams.get('accessToken')
    const refreshToken = searchParams.get('refreshToken')

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      router.replace('/main')
    } else {
      router.replace('/login')
    }
  }, [router, searchParams, params])

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <span className='font-16r'>로그인 처리 중입니다...</span>
    </div>
  )
}
