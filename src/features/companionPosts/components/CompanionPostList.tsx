'use client';

import React, { useEffect, useRef, useState } from 'react';
import CompanionPostItem from './post/CompanionPostItem';

type Post = {
  id: number;
  status: '모집중' | '모집완료';
  period: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

type CompanionPostListProps = {
  posts: Post[];
};

const CompanionPostList = ({ posts }: CompanionPostListProps) => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    setVisiblePosts(posts.slice(0, page * POSTS_PER_PAGE));
  }, [page, posts]);

  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && page * POSTS_PER_PAGE < posts.length) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [page, posts.length]);

  return (
    <ul className='mb-[26px] px-5'>
      {visiblePosts.map((post) => (
        <CompanionPostItem key={post.id} post={post} />
      ))}
      <div ref={observerRef} className='h-5' />
    </ul>
  );
};

export default CompanionPostList;
