'use client'

import { useImageUpload } from '@/hooks/useImageUpload'
import { UploadImg } from '../Icon'
import defaultImg from 'public/assets/icons/defaultAvator.png'

export default function ImageUploader() {
  const { preview, handleChange, uploadImage } = useImageUpload()

  const handleUploadClick = async () => {
    console.log('업로드 성공')
    await uploadImage()
  }

  const imageSrc = typeof preview === 'string' ? preview : preview?.src || defaultImg.src

  return (
    <div className='relative h-[145px] w-[137px]'>
      <img
        src={imageSrc}
        alt='preview'
        className='absolute top-0 left-0 h-[137px] w-[137px] rounded-full object-cover'
      />
      <div className='absolute right-0 bottom-0 h-[48px] w-[48px]'>
        <label className='relative block h-full w-full cursor-pointer'>
          <UploadImg />
          <input
            type='file'
            accept='image/*'
            onChange={handleChange}
            className='absolute top-0 left-0 h-full w-full opacity-0'
          />
        </label>
      </div>
    </div>
  )
}
