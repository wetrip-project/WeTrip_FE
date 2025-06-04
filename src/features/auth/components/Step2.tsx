'use client'
import { Button } from '@/components/Button'
import SingleSelectGroup from '@/components/SelectionGroup/SingleSelectGroup'
import ageOptions from '@/constants/options/ageOptions'
import genderOptions from '@/constants/options/genderOptions'

type Props = {
  onNext: () => void
}

const Step2 = ({ onNext }: Props) => {
  return (
    <div className='relative flex h-[calc(100vh-62px)] w-[320px] flex-col gap-4'>
      <div className='font-20b'>성별과 나이대를 선택해주세요</div>
      <div className='flex flex-col gap-2'>
        <div className='font-14b'>성별</div>
        <SingleSelectGroup
          buttonClassName={'w-[156px]'}
          options={genderOptions}
          value={null}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-14b'>나이</div>
        <SingleSelectGroup
          buttonClassName={'w-[74px]'}
          options={ageOptions}
          value={null}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
      <div className='absolute bottom-0 h-[90px] w-[320px] py-[14px]'>
        <Button
          children={'다음'}
          variant={'deactivation'}
          size={'lg'}
          className='font-16r rounded-md'
          onClick={onNext}
        />
      </div>
    </div>
  )
}

export default Step2
