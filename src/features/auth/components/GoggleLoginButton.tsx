import { Button } from '@/components/Button'
import { GoogleLogo } from '@/components/Icon'

const GoogleLoginButton = () => {
  return (
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
  )
}

export default GoogleLoginButton
