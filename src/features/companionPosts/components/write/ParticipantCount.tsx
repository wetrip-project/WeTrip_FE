import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Icon from '@/components/Icon/icon'
import { toast } from 'react-toastify'

const MIN = 1
const MAX = 20

const ParticipantCount = () => {
  const {
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useFormContext()

  const [isUnlimited, setIsUnlimited] = useState(false)
  const count = watch('participantCount') ?? MIN

  const toggleUnlimited = () => {
    setIsUnlimited((prev) => !prev)
  }

  const handleDecrease = () => {
    const current = getValues('participantCount') || MIN
    if (current > MIN) setValue('participantCount', current - 1)
  }

  const handleIncrease = () => {
    const current = getValues('participantCount') || MIN
    if (current < MAX) {
      setValue('participantCount', current + 1)
    } else {
      toast.info('최대 20명까지 모집 가능합니다.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        className: 'custom-toast',
        icon: false,
      })
    }
  }

  return (
    <div className='flex w-full justify-between gap-[8px]'>
      <div className='flex flex-col gap-[6px]'>
        <label htmlFor='participantCount' className='font-16b text-t1'>
          모집인원
        </label>
        <button
          type='button'
          onClick={toggleUnlimited}
          className='flex cursor-pointer items-center gap-[4px]'
        >
          <Icon iconName={isUnlimited ? 'CheckOn_24' : 'CheckOff_24'} />
          <p className='font-14r text-t2'>제한없이 받을래요</p>
        </button>
      </div>

      <div
        className={`${
          errors.participantCount ? 'border-error' : 'border-stroke2'
        } flex h-[47px] w-[113px] items-center justify-between rounded-md border px-[12px]`}
      >
        <button
          type='button'
          onClick={handleDecrease}
          disabled={isUnlimited}
          className={`text-xl ${isUnlimited ? 'text-t4 cursor-not-allowed' : 'text-t2 cursor-pointer'}`}
        >
          –
        </button>

        <span className={`font-16r w-[40px] text-center ${isUnlimited ? 'text-t4' : 'text-t1'}`}>
          {count}명
        </span>

        <button
          type='button'
          onClick={handleIncrease}
          disabled={isUnlimited}
          className={`text-xl ${isUnlimited ? 'text-t4 cursor-not-allowed' : 'text-t2 cursor-pointer'}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ParticipantCount
