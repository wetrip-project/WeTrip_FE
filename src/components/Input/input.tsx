import { inputVariants } from './input.cva'
import { cn } from '@/utils/cn'
import { InputProps } from './input.types'

export const Input = ({ variant = 'default', className, ...props }: InputProps) => {
  return <input className={cn(inputVariants({ variant }), className)} {...props} />
}
