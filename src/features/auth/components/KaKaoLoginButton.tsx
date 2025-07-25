'use client'

import { Button } from '@/components/Button'
import { KaKaoLogo } from '@/components/Icon'
import { useRouter } from 'next/navigation'

const KaKaoLoginButton = () => {
  const router = useRouter()
  console.log(process.env.NEXT_PUBLIC_BASE_SERVER_URL)
  return (
    <Button
      size='lg'
      className='font-16r bg-[#FAE100] text-black'
      onClick={() => router.push(`https://dev-wetrip.shop/oauth2/authorization/kakao`)}
    >
      <div className='flex h-[24px] gap-1 align-middle'>
        <KaKaoLogo />
        카카오톡으로 시작하기
      </div>
    </Button>
  )
}

export default KaKaoLoginButton
