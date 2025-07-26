import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'

const MIN = 1
const MAX = 7

const Deadline = () => {
  const {
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useFormContext()

  const daysBefore = watch('deadlineDays') ?? MIN

  const handleDecrease = () => {
    const current = getValues('deadlineDays') || MIN
    if (current > MIN) setValue('deadlineDays', current - 1)
  }

  const handleIncrease = () => {
    const current = getValues('deadlineDays') || MIN
    if (current < MAX) {
      setValue('deadlineDays', current + 1)
    } else {
      toast.info('최대 7일까지만 설정 가능합니다.', {
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
      <div className='flex flex-col gap-[7px]'>
        <label htmlFor='deadlineDays' className='font-16b text-t1'>
          모집 마감기한
        </label>
        <p className='text-t1 font-14r'>여행 시작일 {daysBefore}일 전까지</p>
      </div>

      <div
        className={`${
          errors.deadlineDays ? 'border-error' : 'border-stroke2'
        } flex h-[47px] w-[127px] items-center justify-between rounded-md border px-[12px]`}
      >
        <button type='button' onClick={handleDecrease} className='text-t2 cursor-pointer text-xl'>
          –
        </button>

        <span className='font-16r text-t1 w-[40px] text-center'>{daysBefore}일전</span>

        <button type='button' onClick={handleIncrease} className='text-t2 cursor-pointer text-xl'>
          +
        </button>
      </div>
    </div>
  )
}

export default Deadline
