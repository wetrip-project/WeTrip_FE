import { authService } from '@/apis/auth/authService'
import convertToWebP from '@/utils/convertToWebP'

const useUploadProfile = () => {
  const uploadProfileThroughWebP = async (file: File) => {
    if (!file) return alert('이미지를 먼저 선택해주세요.')
    try {
      const webpBlob = await convertToWebP(file)
      console.log('WebP 변환 성공')
      const extension = 'webp'
      const { uploadUrl } = await authService.urlIssuance({ extension })
      if (uploadUrl) {
        await authService.PutProfile(uploadUrl, webpBlob)
      }
    } catch (err) {
      console.error('업로드 중 오류 발생:', err)
      alert('이미지 업로드에 실패했습니다.')
      return null
    }
  }
  const uploadProfile = async (file: File) => {
    if (!file) return alert('이미지를 먼저 선택해주세요.')
    try {
      // const webpBlob = await convertToWebP(file)
      // console.log('WebP 변환 성공')
      const extension = 'jpeg'
      const { uploadUrl } = await authService.urlIssuance({ extension })
      if (uploadUrl) {
        await authService.PutProfile(uploadUrl, file)
      }
    } catch (err) {
      console.error('업로드 중 오류 발생:', err)
      alert('이미지 업로드에 실패했습니다.')
      return null
    }
  }
  return { uploadProfileThroughWebP, uploadProfile }
}

export default useUploadProfile
