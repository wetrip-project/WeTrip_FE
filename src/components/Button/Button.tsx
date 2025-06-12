import { cn } from '@/utils/cn'
import { ButtonProps } from './button.types'
import { buttonVariants } from './Button.cva'

export const Button = ({ children, className, type = 'button', onClick, ...rest }: ButtonProps) => {
  return (
    <button type={type} className={cn(buttonVariants(rest), className)} onClick={onClick}>
      {children}
    </button>
  )
}
