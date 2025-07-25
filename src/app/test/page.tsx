'use client'
import { useState } from 'react'

const Page = () => {
  const [image, setImage] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value)
  }
  console.log('image: ', image)
  return <input type='file' onChange={onChange} />
}

export default Page
