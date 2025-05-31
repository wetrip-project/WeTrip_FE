import { Button } from '@/components/Button'
import Icon from '@/components/Icon/icon'
import Image from 'next/image'
import logoWithHappy from 'public/assets/icons/logoWithHappy.png'

const page = () => {
  return (
    <div className='relative h-[100svh] w-[360px] px-5'>
      <div className='flex h-[48px] w-[320px] flex-row-reverse py-3'>
        <Icon iconName={'Close24'} />
      </div>
      <div className='absolute top-[200px] left-[20px] flex h-[162px] w-[320px] justify-center'>
        <div className='h=[162px] w-[160px]'>
          <Image src={logoWithHappy} alt={'d'} />
        </div>
      </div>
      <div className='font-20b absolute top-[394px] left-5 flex w-[320px] flex-col items-center justify-center'>
        <div>환영합니다 조조이님!</div>
        <div>위트립에서 즐거운 동행하세요</div>
      </div>
      <div className='absolute bottom-0 left-5 h-[90px] w-[320px] py-[14px]'>
        <Button
          children={'다음'}
          variant={'activation'}
          size={'lg'}
          className='font-16r rounded-md'
        />
      </div>
    </div>
  )
}

export default page
