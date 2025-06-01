'use client'

import { useState } from 'react'
import PostList from 'src/features/main/components/PostList'

const PopularPosts = () => {
  const [selected, setSelected] = useState<'해외' | '국내'>('해외')

  return (
    <div className='flex w-[360px] flex-col gap-[24px] rounded-t-xl bg-white px-[20px] pt-[32px] pb-[20px]'>
      <h1 className='font-20b'>지금 인기있는 동행글</h1>

      <div className='bg-b2 font-14r relative flex h-[42px] w-[320px] items-center justify-between rounded-xl p-[4px]'>
        <div
          className={`absolute top-[4px] left-[4px] h-[34px] w-[156px] rounded-[23px] bg-white shadow transition-transform duration-300 ease-in-out ${
            selected === '국내' ? 'translate-x-[160px]' : 'translate-x-0'
          }`}
        />

        {['해외', '국내'].map((label) => (
          <button
            key={label}
            onClick={() => setSelected(label as '해외' | '국내')}
            className={`font-14r z-10 h-[34px] w-[156px] cursor-pointer px-[23px] py-[8px] transition-colors duration-200 ${
              selected === label ? 'text-t1' : 'text-t2'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <PostList />
    </div>
  )
}

export default PopularPosts
