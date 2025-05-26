import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export const buttonVariants = cva(
  'h-[50px] w-[200px] inline-flex items-center justify-center rounded-md font-16r',
  {
    variants: {
      variant: {
        activation: 'bg-main1 text-white',
        deactivation: 'bg-disabled text-t3',
        strokeGray1: 'bg-white border border-disabled text-t2',
        strokeGray2: 'bg-white border border-t4 text-t1',
        strokeGreen: 'bg-white border border-main1 text-main1',
      },
      size: {
        sm: 'w-[200px] px-[14px]',
        lg: 'w-[320px] px-[14px]',
      },
    },
    defaultVariants: {
      variant: 'activation',
      size: 'sm',
    },
  },
)
