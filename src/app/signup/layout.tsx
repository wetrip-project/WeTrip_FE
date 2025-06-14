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
      <div className='w-[320px]'>{children}</div>
    </div>
  )
}
import BackButton from 'src/features/auth/components/BackButton'
import SignupScaffold from 'src/features/auth/components/SignupScaffold'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='h-[100svh] w-[360px] px-5'>
      <div className='h-[48px] w-[320px] py-3'>
        <BackButton />
      </div>
      <SignupScaffold />
      <div className='min-h-[calc(100vh-62px)] w-[320px]'>{children}</div>
    </div>
  )
}

export default Layout
