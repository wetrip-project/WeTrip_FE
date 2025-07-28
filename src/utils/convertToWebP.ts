const convertToWebP = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('Canvas가 지원되지 않습니다.'))
        ctx.drawImage(img, 0, 0)
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob)
            } else {
              reject(new Error('WebP 변환 실패'))
            }
          },
          'image/webp',
          0.8,
        )
      }
      img.onerror = () => reject(new Error('이미지 로딩 실패'))
      img.src = reader.result as string
    }
    reader.onerror = () => reject(new Error('파일 읽기 실패'))
    reader.readAsDataURL(file)
  })
}

export default convertToWebP
