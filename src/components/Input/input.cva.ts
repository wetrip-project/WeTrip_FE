import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'w-[200px] h-[50px] py-[16px] px-[20px] border-stroke2 bg-white rounded-md font-16r',
  {
    variants: {
      variant: {
        default: 'bg-white border-stroke2 text-t3',
        complete: 'bg-disabled text-t3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
