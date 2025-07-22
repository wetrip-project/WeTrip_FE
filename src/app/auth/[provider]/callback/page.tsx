'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Page({ params }: { params: { provider: string } }) {
  const { provider } = params
  const searchParams = useSearchParams()
  const accessToken = searchParams.get('accessToken')
  const refreshToken = searchParams.get('refreshToken')

  console.log(provider)
  console.log(accessToken)
  console.log(refreshToken)
  return <div>page</div>
}
