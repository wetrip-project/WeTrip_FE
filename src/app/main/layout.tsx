import Icon from '@/components/Icon/icon'

export default function mainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-b2 h-[100svh] w-[360px]'>
      <div className='w-full px-5'>
        <div className='flex w-[320px] justify-between py-3'>
          <Icon iconName={'WetripLogo'} />
          <Icon iconName={'Alarm'} />
        </div>
      </div>
      {children}
    </div>
  )
}
