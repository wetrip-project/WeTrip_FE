import { Button } from '@/components/Button'
import Image from 'next/image'
import logoWithSearch from 'public/assets/icons/logoWithSearch.png'

const NoPostPrompt = () => {
  return (
    <div className='flex h-[272px] w-[320px] flex-col items-center justify-between gap-[16px] rounded-xl bg-white px-[20px] py-[24px]'>
      <div className='h-[80px] w-[120px]'>
        <Image src={logoWithSearch} alt='logo' />
      </div>
      <div className='font-16b'>
        <p>조조이님의 일정에 맞는</p>
        <p>동행을 직접 구해보세요!</p>
      </div>
      <div className='w-full'>
        <Button variant={'activation'} className='font-16r w-full cursor-pointer rounded-md'>
          동행 모집 글쓰기
        </Button>
      </div>
    </div>
  )
}

export default NoPostPrompt
