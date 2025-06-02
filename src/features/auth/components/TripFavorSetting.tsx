'use client'
import { Button } from '@/components/Button'
import MultiSelectGroup from '@/components/MultiSelectionGroup/MultiSelectGroup'
import interestOptions from '@/constants/options/inerestOptions'

const TripFavorSetting = () => {
  return (
    <div className='relative h-[calc(100svh-62px)] w-[320px]'>
      <div className='flex h-[423px] w-[320px] flex-col gap-4'>
        <div className='font-20b'>
          선호하는 여행 스타일을
          <br />
          선택해주세요
        </div>
        <div className='h-[355px] w-[320px]'>
          <MultiSelectGroup
            options={interestOptions}
            values={[]}
            onChange={() => console.log('hello')}
            buttonClassName='w-[156px] border border-t4 h-[76px] flex justfy-center items-center'
          />
        </div>
      </div>
      <div className='absolute bottom-0 h-[90px] w-[320px] py-[14px]'>
        <Button
          children={'다음'}
          variant={'deactivation'}
          size={'lg'}
          className='font-16r rounded-md'
        />
      </div>
    </div>
  )
}

export default TripFavorSetting
