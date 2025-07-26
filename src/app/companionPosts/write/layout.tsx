import Icon from '@/components/Icon/icon'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-[100svh] w-[360px]'>
      <div className='flex h-[48px] w-full items-center gap-[12px] bg-white px-[20px] py-[12px]'>
        <Icon iconName={'Back'} />
        <h1 className='font-16r'>동행 글쓰기</h1>
      </div>
      {children}
    </div>
  )
}
