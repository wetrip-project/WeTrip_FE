import { Button } from '@/components/Button'
import { KaKaoLogo } from '@/components/Icon'

const KaKaoLoginButton = () => {
  return (
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
  )
}

export default KaKaoLoginButton
