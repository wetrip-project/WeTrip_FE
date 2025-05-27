import { buttonVariants } from '@/components/Button/button.cva'
import { cn } from '@/utils/cn'
import { ButtonProps } from './button.types'

export const Button = ({ children, className, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button type={type} className={cn(buttonVariants(rest), className)}>
      {children}
    </button>
  )
}
