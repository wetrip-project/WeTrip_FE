import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'w-[320px] h-[50px] py-[16px] px-[20px] border-stroke2 bg-white rounded-md font-16r',
  {
    variants: {
      variant: {
        default: 'bg-white border border-stroke2 text-t1 placeholder:text-t3',
        sub: 'bg-b1 border border-stroke2 text-t1 placeholder:text-t3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
