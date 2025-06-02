import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useSignupStore } from '@/stores/hooks/signupStore'

const Step1 = () => {
  const { setStep } = useSignupStore()
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex flex-1 flex-col gap-4'>
        <div className='font-20b'>사용할 닉네임을 적어주세요</div>
        <Input variant='default' placeholder='한글,숫자 최대 10자' />
      </div>
      <div className='h-[90px] w-[320px] py-[14px]'>
        <Button
          children={'다음'}
          variant={'deactivation'}
          size={'lg'}
          className='font-16r rounded-md'
          onClick={() => setStep(2)}
        />
      </div>
    </div>
  )
}

export default Step1
