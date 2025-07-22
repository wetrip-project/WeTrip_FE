'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface CallbackPageProps {
  params: { provider: string }
}

export default function CallbackPage({ params }: CallbackPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const accessToken = searchParams.get('accessToken')
    const refreshToken = searchParams.get('refreshToken')
    if (accessToken && refreshToken) {
      // 토큰 저장 (로컬스토리지)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      // TODO: provider별로 추가 처리 필요시 분기 가능
      router.replace('/main')
    } else {
      // 토큰이 없으면 에러 처리 또는 로그인 페이지로 이동
      router.replace('/login')
    }
  }, [router, searchParams, params.provider])

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <span className='font-16r'>로그인 처리 중입니다...</span>
    </div>
  )
}
