import { useFormContext } from 'react-hook-form'

const Title = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <input
        {...register('title')}
        placeholder='글 제목'
        maxLength={50}
        className={`font-16r text-t1 w-full rounded-md border px-[20px] py-[16px] ${
          errors.title ? 'border-error' : 'border-stroke2'
        } focus:ring-0 focus:outline-none`}
      />
    </>
  )
}

export default Title
