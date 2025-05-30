'use client'
import { Button } from '@/components/Button'
import SingleSelectGroup from '@/components/SelectionGroup/SingleSelectGroup'

const page = () => {
  const genderOptions = [
    { label: '남성', value: 'male' },
    { label: '여성', value: 'female' },
  ]
  const ageOptions = [
    { label: '10대', value: '10' },
    { label: '20대', value: '20' },
    { label: '30대', value: '30' },
    { label: '40대', value: '40' },
    { label: '50대', value: '50' },
    { label: '60대', value: '60' },
    { label: '70대', value: '70' },
    { label: '80대', value: '80' },
  ]
  return (
    <div className='flex min-h-[calc(100vh-76px)] w-[320px] flex-col gap-4'>
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
      <div className='h-[90px] w-[320px] py-[14px]'>
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

export default page
