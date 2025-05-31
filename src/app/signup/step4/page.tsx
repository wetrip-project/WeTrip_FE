import { Button } from '@/components/Button'
import ImageUploader from '@/components/ImageUploader/imageUploader'

const page = () => {
  return (
    <div className='flex h-[calc(100svh-62px)] w-[320px] flex-col justify-between pt-[25px]'>
      <div className='flex h-[305px] w-[320px] flex-col gap-4'>
        <div className='font-20b'>
          프로필 사진을 등록하면
          <br /> 더 쉽게 동행을 구할 수 있어요!
        </div>
        <div className='flex w-[320px] flex-col items-center justify-center gap-3'>
          <ImageUploader />
          <div className='font-26b'>닉네임</div>
        </div>
      </div>
      <div className='flex h-[152px] w-[320px] flex-col gap-3 py-[14px]'>
        <Button
          children={'사진 등록하기'}
          variant={'activation'}
          size={'lg'}
          className='font-16r rounded-md'
        />
        <Button
          children={'나중에 하기'}
          variant={'deactivation'}
          size={'lg'}
          className='font-16r rounded-md'
        />
      </div>
    </div>
  )
}

export default page
