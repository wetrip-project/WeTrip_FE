'use client'

import { UploadImg } from '../Icon'
import defaultImg from 'public/assets/icons/defaultAvator.png'

type Props = {
  preview: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ImageUploader({ preview, handleChange }: Props) {
  const imageSrc = preview || defaultImg.src

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
            id='avator'
            accept='image/png, image/jpeg'
            multiple={false}
            onChange={handleChange}
            className='absolute top-0 left-0 h-full w-full opacity-0'
          />
        </label>
      </div>
    </div>
  )
}
