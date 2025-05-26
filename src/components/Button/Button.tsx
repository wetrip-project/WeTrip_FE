import { ButtonVariantProps, buttonVariants } from '@/components/Button/Button.cva'
import { cn } from '@/utils/cn'

export interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ variant, size, children, className, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </button>
  )
}
