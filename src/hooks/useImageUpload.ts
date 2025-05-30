import { useState } from 'react'

export function useImageUpload() {
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return
    setFile(selected)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selected)
  }

  const uploadImage = async () => {
    if (!file) return null
    const formData = new FormData()
    formData.append('image', file)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    const result = await res.json()
    return result.filePath
  }

  return {
    preview,
    file,
    handleChange,
    uploadImage,
  }
}
