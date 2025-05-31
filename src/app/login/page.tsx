import { WetripLogo } from '@/components/Icon'
import GoogleLoginButton from 'src/features/auth/components/GoggleLoginButton'
import KaKaoLoginButton from 'src/features/auth/components/KaKaoLoginButton'
import NaverLoginButton from 'src/features/auth/components/NaverLoginButton'

const page = () => {
  return (
    <div className='relative flex h-[100svh] w-[360px] flex-col items-center'>
      <div className='absolute top-[180px] flex h-[438px] w-[320px] flex-col items-center gap-[32px]'>
        <WetripLogo />
        <div className='flex h-[180px] w-[320px] flex-col gap-[15px]'>
          <KaKaoLoginButton />
          <NaverLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  )
}

export default page
