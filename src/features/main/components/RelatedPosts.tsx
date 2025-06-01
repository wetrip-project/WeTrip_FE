import Image from 'next/image'
import logoBasic from 'public/assets/icons/logoBasic.png'
import PostList from 'src/features/main/components/PostList'

const RelatedPosts = () => {
  return (
    <div className='flex w-[360px] flex-col gap-[24px] rounded-t-xl bg-white px-[20px] pt-[32px] pb-[20px]'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-20b'>모집 중인 동행과</h1>
          <h1 className='font-20b'>비슷한 동행글 추천 ✈️</h1>
        </div>
        <div className='h-[80px] w-[80px]'>
          <Image src={logoBasic} alt='logo' />
        </div>
      </div>
      <PostList />
    </div>
  )
}

export default RelatedPosts
