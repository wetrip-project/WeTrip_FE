import Icon from '@/components/Icon/icon'

const PostOverview = () => {
  return (
    <div className='flex h-[176px] w-[320px] flex-col justify-between gap-[16px] rounded-xl bg-white px-[20px] py-[24px]'>
      <div className='border-stroke2 flex h-[56px] w-[280px] cursor-pointer items-center justify-between gap-[10px] rounded-md border p-[16px]'>
        <div className='flex gap-[4px]'>
          <Icon iconName='Paper_24' />
          <p className='font-16b'>
            내가 모집중인 동행 <span className='text-main1'>2</span>건
          </p>
        </div>
        <Icon iconName='Right' />
      </div>
      <div className='border-stroke2 flex h-[56px] w-[280px] cursor-pointer items-center justify-between gap-[10px] rounded-md border p-[16px]'>
        <div className='flex gap-[4px]'>
          <Icon iconName='Comment_24' />
          <p className='font-16b'>
            대화중인 채팅방 <span className='text-main1'>2</span>건
          </p>
        </div>
        <Icon iconName='Right' />
      </div>
    </div>
  )
}

export default PostOverview
