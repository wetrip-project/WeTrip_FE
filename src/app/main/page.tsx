'use client'

import { Search } from '@/components/Search'
import NoPostPrompt from 'src/features/main/components/NoPostPrompt'
import PostOverview from 'src/features/main/components/PostOverview'
import PopularPosts from 'src/features/main/components/PopularPosts'
import RelatedPosts from 'src/features/main/components/RelatedPosts'

const Page = () => {
  const hasPosts = true // TODO : API 데이터 연결시 상태 변경 예정 반영

  const handleSearch = (value: string) => {
    console.log('검색어:', value)
    // 검색 API 호출
  }

  return (
    <div className='flex min-h-[calc(100vh-62px)] w-[360px] flex-col justify-between pt-[8px]'>
      <div className='mb-5 flex flex-col gap-[16px] px-5'>
        <Search onSearch={handleSearch} placeholder='동행 글 검색' />

        {hasPosts ? <PostOverview /> : <NoPostPrompt />}
      </div>

      {hasPosts ? <RelatedPosts /> : <PopularPosts />}
    </div>
  )
}

export default Page
