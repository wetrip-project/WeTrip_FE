import React from 'react';

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
  return (
    <ul className='margin-[26px]'>
      {posts.map((post) => (
        <li
          key={post.id}
        className='border-b border-[#E7ECEA] py-4'
        >
          <div className='flex items-center gap-[6px]'>
            <strong
              className={`text-xs ${post.status === '모집중' ? 'text-[#13DF6F] border-[#13DF6F]' : 'text-[#9E9E9E] border-[#9E9E9E] '} border rounded-[4px] inline-block px-[5px] py-[1px]`}
            >
              {post.status}
            </strong>
            <p className='text-xs text-#9E9E9E'>{post.period}</p>
          </div>
          <h2 className='text-[#212221] font-bold mt-1 mb-3'>{post.title}</h2>
          <p className='text-[#616161] text-sm mb-3'>{post.description}</p>
          <div className='flex flex-wrap gap-[6px]'>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className='inline-block border border-[#E7ECEA] text-[#9E9E9E] text-xs rounded-[2px] px-[6px] py-[2px]'
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CompanionPostList;
