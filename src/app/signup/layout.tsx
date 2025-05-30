import Icon from '@/components/Icon/icon'

export default function signupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className='w-[320px] py-3'>
        <Icon iconName={'Back'} />
      </div>
      {children}
    </div>
  )
}
