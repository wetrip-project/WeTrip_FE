'use client';

import React, { useEffect, useRef, useState } from 'react';

type Post = {
  id: number;
  status: '모집중' | '모집완료';
  period: string;
  title: string;
  description: string;
  tags: string[];
};

type CompanionPostListProps = {
  posts: Post[];
};

const CompanionPostList = ({ posts }: CompanionPostListProps) => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const POSTS_PER_PAGE = 10; // 한 번에 보여줄 개수

  // 페이지 바뀔 때마다 visiblePosts 업데이트
  useEffect(() => {
    const start = 0;
    const end = page * POSTS_PER_PAGE;
    setVisiblePosts(posts.slice(start, end));
  }, [page, posts]);

  // Intersection Observer
  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 이미 모든 포스트를 로드했으면 더 이상 페이지 증가 X
          if (page * POSTS_PER_PAGE >= posts.length) return;
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(currentRef);

    // cleanup
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [page, posts.length]); 

  return (
    <ul className='mb-[26px] px-5'>
      {visiblePosts.map((post) => (
        <li
          key={post.id}
          className='border-b border-stroke2 py-4'
        >
          <div className='flex items-center gap-[6px]'>
            <strong
              className={`font-12r ${post.status === '모집중' ? 'text-main1 border-main1' : 'text-t3 border-t3'} border rounded-[4px] inline-block px-[5px] py-[1px]`}
            >
              {post.status}
            </strong>
            <p className='font-12r text-t3'>{post.period}</p>
          </div>
          <h2 className='font-16b mt-1 mb-3'>{post.title}</h2>
          <p className='text-t2 font-14r mb-3'>{post.description}</p>
          <div className='flex flex-wrap gap-[6px]'>
            {post.tags.map((tag) => (
              <span
                key={tag} 
                className='inline-block border border-stroke2 text-t3 font-12r rounded-[2px] px-[6px] py-[2px]'
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
      {/* trigger */}
      <div ref={observerRef} className='h-5' />
    </ul>
  );
};

export default CompanionPostList;
