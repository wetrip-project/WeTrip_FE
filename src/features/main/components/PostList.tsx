import { dummyPosts } from 'src/features/main/components/dummyData'
import Image from 'next/image'

const PostList = () => {
  return (
    <section className='flex flex-col gap-[24px]'>
      {dummyPosts.map((post) => (
        <article
          key={post.id}
          className='border-stroke2 flex flex-col gap-[12px] border-b-1 pb-[16px]'
        >
          <div className='flex h-[93px] w-[320px] gap-[14px]'>
            <div className='flex h-[93px] w-[240px] flex-col gap-[8px]'>
              <header className='flex w-full flex-col gap-[4px]'>
                <div className='flex items-center gap-[6px]'>
                  <span
                    className={`font-12b rounded-sm px-[6px] py-[2px] ${
                      post.status === '모집중' ? 'border-main1 text-main1 border' : 'bg-b2 text-t3'
                    }`}
                  >
                    {post.status}
                  </span>
                  <time className='font-12r text-t3'>{post.date}</time>
                </div>
                <h2 className='font-16b'>{post.title}</h2>
              </header>
              <p className='text-t2 font-14r line-clamp-2 h-[36px] w-[240px]'>{post.description}</p>
            </div>
            <figure
              className='border-stroke2 h-[66px] w-[66px] rounded-md border'
              style={{
                boxShadow: 'inset 0 0 14.3px 0 rgba(50, 59, 76, 0.08)',
              }}
            >
              <Image
                src={post.imageUrl}
                alt='thumbnail'
                width={66}
                height={66}
                className='rounded-md'
              />
            </figure>
          </div>
          <footer className='flex h-[22px] items-center gap-[6px]'>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className='border-stroke2 font-12r text-t3 rounded-[2px] border px-[6px] py-[4px]'
              >
                #{tag}
              </span>
            ))}
          </footer>
        </article>
      ))}
    </section>
  )
}

export default PostList
