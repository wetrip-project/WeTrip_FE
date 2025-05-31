import { Button } from '@/components/Button'
import { NaverLogo } from '@/components/Icon'

const NaverLoginButton = () => {
  return (
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
  )
}

export default NaverLoginButton
