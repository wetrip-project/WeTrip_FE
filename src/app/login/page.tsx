import { Button } from '@/components/Button'
import { GoogleLogo, KaKaoLogo, NaverLogo, WetripLogo } from '@/components/Icon'

const page = () => {
  return (
    <div className='relative flex h-[100vh] w-[360px] flex-col items-center'>
      <div className='absolute top-[180px] flex h-[438px] w-[320px] flex-col items-center gap-[32px]'>
        <WetripLogo />
        <div className='flex h-[180px] w-[320px] flex-col gap-[15px]'>
          <Button
            children={
              <div className='flex h-[24px] gap-1 align-middle'>
                <KaKaoLogo />
                카카오톡으로 시작하기
              </div>
            }
            size={'lg'}
            className='font-16r bg-[#FAE100] text-black'
          />
          <Button
            children={
              <div className='flex h-[18px] items-center gap-[10px] align-middle'>
                <NaverLogo />
                네이버로 시작하기
              </div>
            }
            size={'lg'}
            className='font-16r bg-[#03C75A]'
          />
          <Button
            children={
              <div className='flex h-[20px] items-center gap-[10px] align-middle'>
                <GoogleLogo />
                구글계정으로 시작하기
              </div>
            }
            size={'lg'}
            variant={'strokeGray2'}
            className='font-16r border-t3 text-black'
          />
        </div>
      </div>
    </div>
  )
}

export default page
