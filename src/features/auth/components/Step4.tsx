'use client'

import { Button } from '@/components/Button'
import ImageUploader from '@/components/ImageUploader/imageUploader'
import { useImageUpload } from '@/hooks/useImageUpload'

const Step4 = () => {
  const { preview, handleChange, uploadImage } = useImageUpload()

  return (
    <div className='flex h-[calc(100svh-62px)] w-[320px] flex-col justify-between'>
      <div className='flex h-[305px] w-[320px] flex-col gap-4'>
        <div className='font-20b'>
          프로필 사진을 등록하면
          <br /> 더 쉽게 동행을 구할 수 있어요!
        </div>
        <div className='flex w-[320px] flex-col items-center justify-center gap-3'>
          <ImageUploader
            preview={typeof preview === 'string' ? preview : ''}
            handleChange={handleChange}
          />
          <div className='font-26b'>닉네임</div>
        </div>
      </div>
      <div className='flex h-[152px] w-[320px] flex-col gap-3 py-[14px]'>
        <Button
          children={
            <input
              type='file'
              id='avator'
              accept='image/png, image/jpeg'
              multiple={false}
              onChange={handleChange}
              className='absolute top-0 left-0 h-[50px] w-[320px] opacity-0'
            />
          }
          variant={'activation'}
          size={'lg'}
          className='font-16r relative rounded-md'
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

export default Step4
