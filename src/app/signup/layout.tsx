import Icon from '@/components/Icon/icon'
import SignupScaffold from 'src/features/SignupScaffold'

export default function signupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-[100vh] w-[360px] px-5'>
      <div className='w-[320px] py-3'>
        <Icon iconName={'Back'} />
      </div>
      <SignupScaffold />
      <div className='w-[320px] pt-[25px]'>{children}</div>
    </div>
  )
}
