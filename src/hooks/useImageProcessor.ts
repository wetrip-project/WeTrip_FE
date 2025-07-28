import { useState } from 'react'
import type { StaticImageData } from 'next/image'

type PreviewType = string | StaticImageData

const useImageProcessor = () => {
  const [preview, setPreview] = useState<PreviewType | null>(null)

  const handleSetPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return
    if (selected.size > 2 * 1024 * 1024) {
      alert('2MB 이하의 이미지만 업로드 가능합니다.')
      return
    }
    const reader = new FileReader()
    reader.onerror = () => {
      console.error('파일 읽기 실패:', reader.error)
      alert('이미지 미리보기에 실패했습니다.')
    }
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreview(reader.result)
      } else
        (error: Error) => {
          return new Error(error.message)
        }
    }
    try {
      reader.readAsDataURL(selected)
    } catch (err) {
      console.error('예외 발생:', err)
      alert('파일 처리 중 문제가 발생했습니다.')
    }
  }

  return { preview, handleSetPreview }
}

export default useImageProcessor
