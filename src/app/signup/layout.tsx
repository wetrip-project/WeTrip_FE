import Icon from '@/components/Icon/icon'
import SignupScaffold from 'src/features/auth/components/SignupScaffold'

export default function signupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-[100svh] w-[360px] px-5'>
      <div className='w-[320px] py-3'>
        <Icon iconName={'Back'} />
      </div>
      <SignupScaffold />
      <div className='min-h-[calc(100vh-62px)] w-[320px] flex-col justify-between'>{children}</div>
    </div>
  )
}
