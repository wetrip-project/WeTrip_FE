'use client'

import { FormProvider } from 'react-hook-form'
import { useWriteForm } from '@/hooks/useWriteForm'
import { useCompanionPostsStore } from '@/stores/zustand/companionPostsStore'
import { CompanionWriteFormInputs } from 'src/schema/companionPostSchema'
import { Button } from '@/components/Button'
import ImageUpload from 'src/features/companionPosts/components/write/ImageUpload'
import Title from 'src/features/companionPosts/components/write/Title'
import ParticipantCount from 'src/features/companionPosts/components/write/ParticipantCount'
import Deadline from 'src/features/companionPosts/components/write/DeadLine'
import Description from 'src/features/companionPosts/components/write/Description'

const Page = () => {
  const methods = useWriteForm()
  const { handleSubmit, formState } = methods // 임시
  // TODO : 수정 api 연결시
  // const {handleSubmit, formState, reset} = methods
  const { isEdit, postId } = useCompanionPostsStore()
  const isValid = formState.isValid

  const onSubmit = (data: CompanionWriteFormInputs) => {
    console.log('입력 데이터 : ', data)
    if (isEdit && postId) {
      // TODO : 수정 api 요청 처리
      console.log('수정 요청', postId, data)
    } else {
      // TODO : POST api 요청 처리
      console.log('작성 요청', data)
    }
  }

  return (
    <div className='bg-b2 flex w-[360px] flex-col gap-[9px]'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex w-full flex-col gap-[40px] bg-white px-[20px] py-[12px]'>
            <div className='flex flex-col gap-[12px]'>
              <ImageUpload />
              <Title />
            </div>
            {/* TODO : 여행 정보 컴포넌트 추가 */}
            <ParticipantCount />
            <Deadline />
            <Description />
          </div>

          <div className='mt-[9px] w-full bg-white px-[20px] py-[12px]'>
            {/* TODO : 동행 스케줄, 여행 태그, 선호 태그 컴포넌트 추가 */}
            <Button
              type='submit'
              variant={isValid ? 'activation' : 'deactivation'}
              className='font-16r w-full cursor-pointer rounded-md'
            >
              작성 완료
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Page
