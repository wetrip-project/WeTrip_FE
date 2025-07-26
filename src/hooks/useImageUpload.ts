import { useState } from 'react'
import type { StaticImageData } from 'next/image'
import { authService } from '@/apis/auth/authService'

type PreviewType = string | StaticImageData

export function useImageUpload() {
  const [preview, setPreview] = useState<PreviewType | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return
    if (selected.size > 2 * 1024 * 1024) {
      alert('2MB 이하의 이미지만 업로드 가능합니다.')
      return
    }
    setFile(selected)
    const reader = new FileReader()
    reader.onerror = () => {
      console.error('파일 읽기 실패:', reader.error)
      alert('이미지 미리보기에 실패했습니다.')
    }
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreview(reader.result)
      } else {
        alert('미리보기 생성에 실패했습니다.')
      }
    }
    try {
      reader.readAsDataURL(selected)
    } catch (err) {
      console.error('예외 발생:', err)
      alert('파일 처리 중 문제가 발생했습니다.')
    }
  }

  const uploadImage = async () => {
    console.log('업로드 버튼 클릭됨')
    if (!file) return alert('이미지를 먼저 선택해주세요.')
    console.log('file: ', file)
    try {
      const extension = file.name.split('.').pop() ?? 'jpeg'
      const { uploadUrl, fileName } = await authService.urlIssuance({ extension })
      console.log('uploadUrl: ', uploadUrl)
      return uploadUrl
    } catch (err) {
      console.error('업로드 중 오류 발생:', err)
      alert('이미지 업로드에 실패했습니다.')
      return null
    }
  }

  return { preview, handleChange, uploadImage }
}
