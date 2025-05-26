import { buttonVariants } from '@/components/Button/button.cva'
import { cn } from '@/utils/cn'
import { ButtonVariantProps, RequiredVariants } from './button.type'

export interface ButtonProps
  extends Omit<ButtonVariantProps, 'variant' | 'size'>,
    RequiredVariants {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ children, className, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button type={type} className={cn(buttonVariants(rest), className)}>
      {children}
    </button>
  )
}
