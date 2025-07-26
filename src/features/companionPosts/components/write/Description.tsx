import { useFormContext } from 'react-hook-form'

const Description = () => {
  const {
    register,
    formState: {},
  } = useFormContext()

  const handleResizeHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget
    target.style.height = '100px'
    target.style.height = `${target.scrollHeight}px`
  }

  return (
    <div className='flex flex-col gap-[12px]'>
      <label htmlFor='description' className='font-16b text-t1'>
        상세 설명
      </label>
      <textarea
        {...register('description')}
        onInput={handleResizeHeight}
        placeholder='글 내용을 입력해주세요.'
        maxLength={1000}
        className='font-16r text-t1 border-stroke2 bg-b1 min-h-[100px] w-full resize-none rounded-md border px-[20px] py-[16px] focus:ring-0 focus:outline-none'
      />
    </div>
  )
}

export default Description
