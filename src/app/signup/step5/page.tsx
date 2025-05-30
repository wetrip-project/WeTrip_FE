import { Button } from '@/components/Button'
import Image from 'next/image'
import logoWithHappy from 'public/assets/icons/logoWithHappy.png'

const page = () => {
  return (
    <div className='relative min-h-[calc(100vh-76px)] w-[320px]'>
      <div className='absolute top-[66px] left-[80px] h-[120px] w-[160px]'>
        <Image src={logoWithHappy} alt={'d'} />
      </div>
      <div className='font-20b absolute top-[342px] left-0 flex w-[320px] justify-center'>
        환영합니다 조조이님!
        <br /> 위트립에서 즐거운 동행하세요
      </div>
      <div className='absolute bottom-0 left-0 h-[90px] w-[320px] py-[14px]'>
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
