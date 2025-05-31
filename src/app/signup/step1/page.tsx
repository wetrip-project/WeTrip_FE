import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

const page = () => {
  return (
    <div className='flex min-h-[calc(100vh-62px)] w-[320px] flex-col justify-between pt-[25px]'>
      <div className='flex flex-1 flex-col gap-4'>
        <div className='font-20b'>사용할 닉네임을 적어주세요</div>
        <Input variant='default' placeholder='한글,숫자 최대 10자' />
      </div>
      <div className='h-[90px] w-[320px] py-[14px]'>
        <Button
          children={'다음'}
          variant={'deactivation'}
          size={'lg'}
          className='font-16r rounded-md'
        />
      </div>
    </div>
  )
}

export default page
