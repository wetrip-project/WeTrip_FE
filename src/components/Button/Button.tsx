import { buttonVariants } from '@/components/Button/button.cva'
import { cn } from '@/utils/cn'
import { ButtonProps } from './button.types'

export const Button = ({ children, className, type = 'button', onClick, ...rest }: ButtonProps) => {
  return (
    <button type={type} className={cn(buttonVariants(rest), className)} onClick={onClick}>
      {children}
    </button>
  )
}
