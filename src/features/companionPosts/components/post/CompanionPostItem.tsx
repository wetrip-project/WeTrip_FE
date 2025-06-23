import Image from 'next/image';

type Post = {
  id: number;
  status: '모집중' | '모집완료';
  period: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

type Props = {
  post: Post;
};

const CompanionPostItem = ({ post }: Props) => {
  return (
    <li className='flex justify-between gap-[14px] border-b border-stroke2 py-4'>
      <div>
        <div className='flex items-center gap-[6px]'>
          <strong
            className={`font-12r ${
              post.status === '모집중' ? 'text-main1 border-main1' : 'text-t3 border-t3'
            } border rounded-[4px] inline-block px-[5px] py-[1px]`}
          >
            {post.status}
          </strong>
          <p className='font-12r text-t3'>{post.period}</p>
        </div>
        <h2 className='font-16b mt-1 mb-3'>{post.title}</h2>
        <p className='text-t2 font-14r mb-3 line-clamp-2'>{post.description}</p>
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
      </div>
      <Image
        src={post.imageUrl}
        alt='thumbnail'
        width={66}
        height={66}
        className='rounded-md h-full'
      />
    </li>
  );
};

export default CompanionPostItem;
