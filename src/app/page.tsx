import { Button } from '@/components/Button'
import Icon from '@/components/Icon/icon'

export default function Home() {
  return (
    <div>
      <p className='font-26b bg-main2'>프리텐다드 26B</p>
      <p className='font-14r'>프리텐다드 20R</p>
      <Icon iconName={'Photo'} />
      <Button children={'test'} variant={'activation'} size={'sm'} />
    </div>
  )
}
